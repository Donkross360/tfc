/*
  # Add test admin user

  1. Create test admin user in admin_users table
  2. Note: The user must first be created through Supabase Auth
*/

-- Insert test admin user into admin_users table
-- Note: Replace the user_id with the actual UUID from Supabase Auth
INSERT INTO admin_users (user_id, is_admin)
VALUES ('REPLACE_WITH_USER_ID', true);