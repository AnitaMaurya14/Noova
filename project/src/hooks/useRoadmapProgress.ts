import { useState, useEffect } from 'react';
import { RoadmapData, Week } from '../types/roadmap';

interface Progress {
  totalWeeks: number;
  completedWeeks: number;
  currentWeek: Week | null;
  daysUntilEnd: number;
  percentComplete: number;
}

export const useRoadmapProgress = (roadmapData: RoadmapData) => {
  const [progress, setProgress] = useState<Progress>({
    totalWeeks: 0,
    completedWeeks: 0,
    currentWeek: null,
    daysUntilEnd: 0,
    percentComplete: 0
  });

  const [completedWeeks, setCompletedWeeks] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('completedWeeks');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  const [weekProgress, setWeekProgress] = useState<Map<string, number>>(() => {
    const saved = localStorage.getItem('weekProgress');
    return saved ? new Map(JSON.parse(saved)) : new Map();
  });

  useEffect(() => {
    localStorage.setItem('completedWeeks', JSON.stringify([...completedWeeks]));
  }, [completedWeeks]);

  useEffect(() => {
    localStorage.setItem('weekProgress', JSON.stringify([...weekProgress]));
  }, [weekProgress]);

  useEffect(() => {
    const allWeeks: Week[] = [];
    roadmapData.tracks.forEach(track => {
      track.months.forEach(month => {
        allWeeks.push(...month.weeks);
      });
    });

    const today = new Date();
    const endDate = new Date(roadmapData.endDate);
    const daysLeft = Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    const currentWeek = allWeeks.find(week => {
      const start = new Date(week.startDate);
      const end = new Date(week.endDate);
      return today >= start && today <= end;
    }) || allWeeks[0];

    setProgress({
      totalWeeks: allWeeks.length,
      completedWeeks: completedWeeks.size,
      currentWeek,
      daysUntilEnd: Math.max(0, daysLeft),
      percentComplete: (completedWeeks.size / allWeeks.length) * 100
    });
  }, [roadmapData, completedWeeks]);

  const markWeekComplete = (weekId: string) => {
    setCompletedWeeks(prev => new Set([...prev, weekId]));
  };

  const markWeekIncomplete = (weekId: string) => {
    setCompletedWeeks(prev => {
      const newSet = new Set(prev);
      newSet.delete(weekId);
      return newSet;
    });
  };

  const updateWeekProgress = (weekId: string, completedGoals: number, totalGoals: number) => {
    const percent = totalGoals > 0 ? (completedGoals / totalGoals) * 100 : 0;
    setWeekProgress(prev => new Map(prev).set(weekId, percent));
  };

  const isWeekComplete = (weekId: string) => completedWeeks.has(weekId);

  const getWeekProgress = (weekId: string) => weekProgress.get(weekId) || 0;

  return {
    progress,
    markWeekComplete,
    markWeekIncomplete,
    isWeekComplete,
    updateWeekProgress,
    getWeekProgress
  };
};
