import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zgncdvwreylhabcioydb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnbmNkdndyZXlsaGFiY2lveWRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3Nzg0OTQsImV4cCI6MjA3NTM1NDQ5NH0.cd6ctVXgv3lp9PW5RfO3o3uluuTXe7C2OXh-3MyD0Pw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: window.localStorage
  }
});

export type Profile = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  created_at: string;
  updated_at: string;
};
