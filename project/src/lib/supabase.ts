import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Project {
  id: string;
  user_id: string;
  title: string;
  description: string;
  github_url?: string;
  live_url?: string;
  technologies: string[];
  file_url?: string;
  created_at: string;
  updated_at: string;
}

export interface DailyJournal {
  id: string;
  user_id: string;
  entry_date: string;
  completed_tasks: string[];
  learnings: string[];
  activities: string[];
  notes: string;
  mood?: string;
  created_at: string;
  updated_at: string;
}
