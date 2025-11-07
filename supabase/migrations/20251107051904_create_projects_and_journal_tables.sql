/*
  # Create Projects and Daily Journal Tables

  ## Overview
  This migration creates tables for managing user projects/CVs and daily journal entries
  for the AI Engineer Roadmap Tracker application.

  ## New Tables
  
  ### `projects`
  - `id` (uuid, primary key) - Unique identifier for each project
  - `user_id` (uuid, foreign key) - References auth.users
  - `title` (text) - Project title
  - `description` (text) - Project description
  - `github_url` (text, optional) - GitHub repository URL
  - `live_url` (text, optional) - Live demo URL
  - `technologies` (text[], array) - List of technologies used
  - `file_url` (text, optional) - URL to uploaded file (CV/resume)
  - `created_at` (timestamptz) - Timestamp of creation
  - `updated_at` (timestamptz) - Timestamp of last update

  ### `daily_journals`
  - `id` (uuid, primary key) - Unique identifier for each journal entry
  - `user_id` (uuid, foreign key) - References auth.users
  - `entry_date` (date) - Date of the journal entry
  - `completed_tasks` (text[]) - List of tasks completed today
  - `learnings` (text[]) - List of things learned today
  - `activities` (text[]) - List of activities done today
  - `notes` (text, optional) - Additional notes
  - `mood` (text, optional) - User's mood for the day
  - `created_at` (timestamptz) - Timestamp of creation
  - `updated_at` (timestamptz) - Timestamp of last update

  ## Security
  - Enable RLS on all tables
  - Users can only read/write their own data
  - Authenticated users required for all operations
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  description text DEFAULT '',
  github_url text,
  live_url text,
  technologies text[] DEFAULT '{}',
  file_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create daily_journals table
CREATE TABLE IF NOT EXISTS daily_journals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  entry_date date NOT NULL DEFAULT CURRENT_DATE,
  completed_tasks text[] DEFAULT '{}',
  learnings text[] DEFAULT '{}',
  activities text[] DEFAULT '{}',
  notes text DEFAULT '',
  mood text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, entry_date)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_projects_user_id ON projects(user_id);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_journals_user_id ON daily_journals(user_id);
CREATE INDEX IF NOT EXISTS idx_journals_entry_date ON daily_journals(entry_date DESC);
CREATE INDEX IF NOT EXISTS idx_journals_user_date ON daily_journals(user_id, entry_date);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_journals ENABLE ROW LEVEL SECURITY;

-- Projects policies
CREATE POLICY "Users can view own projects"
  ON projects FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own projects"
  ON projects FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Daily journals policies
CREATE POLICY "Users can view own journal entries"
  ON daily_journals FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own journal entries"
  ON daily_journals FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own journal entries"
  ON daily_journals FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own journal entries"
  ON daily_journals FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers to update updated_at
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_daily_journals_updated_at
  BEFORE UPDATE ON daily_journals
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();