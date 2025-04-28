import { createClient } from '@supabase/supabase-js';

// Check if environment variables are available
if (!import.meta.env.VITE_SUPABASE_URL) {
  console.error('VITE_SUPABASE_URL is not defined. Please connect to Supabase using the "Connect to Supabase" button.');
  throw new Error('Missing Supabase URL. Please connect to Supabase first.');
}

if (!import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.error('VITE_SUPABASE_ANON_KEY is not defined. Please connect to Supabase using the "Connect to Supabase" button.');
  throw new Error('Missing Supabase Anon Key. Please connect to Supabase first.');
}

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);