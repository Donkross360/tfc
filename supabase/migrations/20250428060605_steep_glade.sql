/*
  # Add test events

  1. Changes
    - Insert 3 upcoming test events into the events table
*/

INSERT INTO events (title, date, time, location, description, image_url)
VALUES
  (
    'Easter Sunday Celebration',
    '2025-03-31',
    '9:00 AM',
    'Main Sanctuary',
    'Join us for a special Easter celebration with worship, message of hope, and activities for the whole family. Special musical performances and children''s program included.',
    'https://images.pexels.com/photos/3038424/pexels-photo-3038424.jpeg?auto=compress&cs=tinysrgb&w=800'
  ),
  (
    'Youth Summer Camp',
    '2025-07-15',
    '8:00 AM',
    'Mountain View Retreat Center',
    'A week-long adventure for teens ages 13-18. Activities include worship, Bible study, outdoor adventures, team building, and more. All meals and accommodation included.',
    'https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&w=800'
  ),
  (
    'Community Outreach Day',
    '2025-05-17',
    '10:00 AM',
    'City Park',
    'Come serve our community! We''ll be partnering with local organizations to provide food, clothing, and services to those in need. All volunteers welcome.',
    'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800'
  );