import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { format } from 'date-fns';
import { Pencil, Trash2, Plus, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image_url: string;
}

const AdminDashboard: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<Partial<Event>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
    
    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        checkAdminStatus(session.user);
      } else {
        setUser(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const checkAdminStatus = async (user: any) => {
    try {
      const { data: adminUsers, error: adminError } = await supabase
        .from('admin_users')
        .select('is_admin')
        .eq('user_id', user.id);
     
      if (adminError) throw adminError;

      if (adminUsers && adminUsers.length > 0 && adminUsers[0].is_admin) {
        setUser(user);
        await fetchEvents();
      } else {
        await supabase.auth.signOut();
        setError('Unauthorized access. Please contact the system administrator.');
      }
    } catch (err: any) {
      console.error('Error checking admin status:', err);
      setError('Error verifying admin status: ' + err.message);
      await supabase.auth.signOut();
    }
  };

  const checkUser = async () => {
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) throw error;
      
      if (user) {
        await checkAdminStatus(user);
      }
    } catch (err) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError(null);

      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;
      
      if (data.user) {
        await checkAdminStatus(data.user);
      }
    } catch (err: any) {
      console.error('Login error:', err);
      setError('Invalid credentials or unauthorized access.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate('/');
  };

  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (err: any) {
      console.error('Error fetching events:', err);
      setError(err.message || 'Failed to fetch events. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      if (!currentEvent.title || !currentEvent.date || !currentEvent.time || !currentEvent.location || !currentEvent.description || !currentEvent.image_url) {
        throw new Error('Please fill in all fields');
      }

      if (currentEvent.id) {
        const { error } = await supabase
          .from('events')
          .update(currentEvent)
          .eq('id', currentEvent.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('events')
          .insert([currentEvent]);

        if (error) throw error;
      }

      setIsEditing(false);
      setCurrentEvent({});
      await fetchEvents();
    } catch (err: any) {
      console.error('Error saving event:', err);
      setError(err.message || 'Failed to save event. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    try {
      setIsLoading(true);
      setError(null);
      const { error } = await supabase
        .from('events')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchEvents();
    } catch (err: any) {
      console.error('Error deleting event:', err);
      setError(err.message || 'Failed to delete event. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-16 bg-warmGray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen pt-16 bg-warmGray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
            <h1 className="text-2xl font-bold text-navy-800 mb-6">Admin Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-gold-500 text-white px-4 py-2 rounded-md hover:bg-gold-600 transition-colors"
                disabled={isLoading}
              >
                <LogIn className="w-5 h-5 mr-2" />
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
              {error && (
                <div className="mt-4 text-red-600 text-sm">{error}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-warmGray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-navy-800">Event Management</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                setCurrentEvent({});
                setIsEditing(true);
              }}
              className="flex items-center bg-gold-500 text-white px-4 py-2 rounded-md hover:bg-gold-600 transition-colors"
              disabled={isLoading}
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Event
            </button>
            <button
              onClick={handleLogout}
              className="text-navy-600 hover:text-navy-800"
            >
              Logout
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {isEditing ? (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-navy-600 mb-2">Title</label>
                <input
                  type="text"
                  value={currentEvent.title || ''}
                  onChange={e => setCurrentEvent({ ...currentEvent, title: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-600 mb-2">Date</label>
                <input
                  type="date"
                  value={currentEvent.date || ''}
                  onChange={e => setCurrentEvent({ ...currentEvent, date: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-600 mb-2">Time</label>
                <input
                  type="text"
                  value={currentEvent.time || ''}
                  onChange={e => setCurrentEvent({ ...currentEvent, time: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="e.g., 7:00 PM"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-600 mb-2">Location</label>
                <input
                  type="text"
                  value={currentEvent.location || ''}
                  onChange={e => setCurrentEvent({ ...currentEvent, location: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-navy-600 mb-2">Image URL</label>
                <input
                  type="url"
                  value={currentEvent.image_url || ''}
                  onChange={e => setCurrentEvent({ ...currentEvent, image_url: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-navy-600 mb-2">Description</label>
                <textarea
                  value={currentEvent.description || ''}
                  onChange={e => setCurrentEvent({ ...currentEvent, description: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md"
                  rows={4}
                  required
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setCurrentEvent({});
                }}
                className="px-4 py-2 text-navy-600 hover:text-navy-800 transition-colors"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-gold-500 text-white rounded-md hover:bg-gold-600 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? 'Saving...' : (currentEvent.id ? 'Update' : 'Create')} Event
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {events.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                      No events found. Click "Add Event" to create one.
                    </td>
                  </tr>
                ) : (
                  events.map(event => (
                    <tr key={event.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            src={event.image_url}
                            alt={event.title}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{event.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{format(new Date(event.date), 'MMM d, yyyy')}</div>
                        <div className="text-sm text-gray-500">{event.time}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {event.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => {
                            setCurrentEvent(event);
                            setIsEditing(true);
                          }}
                          className="text-gold-500 hover:text-gold-600 mr-4"
                          disabled={isLoading}
                        >
                          <Pencil className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(event.id)}
                          className="text-red-500 hover:text-red-600"
                          disabled={isLoading}
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;