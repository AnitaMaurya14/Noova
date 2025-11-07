export interface Topic {
  id: string;
  title: string;
  completed: boolean;
}

export interface DayTask {
  id: string;
  day: string;
  topics: Topic[];
  notes: string;
}

export interface Week {
  id: string;
  weekNumber: number;
  title: string;
  description: string;
  goals: string[];
  days: DayTask[];
  startDate: string;
  endDate: string;
}

export interface Month {
  id: string;
  monthNumber: number;
  title: string;
  goal: string;
  weeks: Week[];
}

export interface Track {
  id: string;
  title: string;
  description: string;
  months: Month[];
}

export interface RoadmapData {
  tracks: Track[];
  startDate: string;
  endDate: string;
}
