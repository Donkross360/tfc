import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MapPin } from 'lucide-react';
import { format } from 'date-fns';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image_url: string;
}

interface EventModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, isOpen, onClose }) => {
  if (!event) return null;

  const formattedDate = format(new Date(event.date), 'MMMM d, yyyy');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-lg overflow-hidden max-w-2xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={event.image_url}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-navy-800 mb-4">{event.title}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-navy-600">
                  <Calendar className="h-5 w-5 mr-2 text-gold-500" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center text-navy-600">
                  <Clock className="h-5 w-5 mr-2 text-gold-500" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-navy-600">
                  <MapPin className="h-5 w-5 mr-2 text-gold-500" />
                  <span>{event.location}</span>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-navy-600">{event.description}</p>
              </div>
              
              <div className="mt-6 flex justify-end space-x-4">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-navy-600 hover:text-navy-800 transition-colors"
                >
                  Close
                </button>
                <button className="px-4 py-2 bg-gold-500 text-white rounded-md hover:bg-gold-600 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventModal;