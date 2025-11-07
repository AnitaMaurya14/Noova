import { useState, useEffect } from 'react';
import { roadmapData } from '../data/roadmapData';
import { useRoadmapProgress } from '../hooks/useRoadmapProgress';
import { ProgressDashboard } from './ProgressDashboard';
import { TrackSection } from './TrackSection';

export const RoadmapTracker = () => {
  const {
    progress,
    markWeekComplete,
    markWeekIncomplete,
    isWeekComplete,
    updateWeekProgress,
    getWeekProgress
  } = useRoadmapProgress(roadmapData);

  const [weekGoals, setWeekGoals] = useState<Map<string, Set<number>>>(() => {
    const saved = localStorage.getItem('weekGoals');
    if (saved) {
      const parsed = JSON.parse(saved);
      return new Map(
        Object.entries(parsed).map(([key, value]) => [key, new Set(value as number[])])
      );
    }
    return new Map();
  });

  useEffect(() => {
    const toSave: Record<string, number[]> = {};
    weekGoals.forEach((value, key) => {
      toSave[key] = [...value];
    });
    localStorage.setItem('weekGoals', JSON.stringify(toSave));
  }, [weekGoals]);

  const handleWeekToggle = (weekId: string) => {
    if (isWeekComplete(weekId)) {
      markWeekIncomplete(weekId);
    } else {
      markWeekComplete(weekId);
    }
  };

  const handleGoalToggle = (weekId: string, goalIndex: number) => {
    setWeekGoals(prev => {
      const newMap = new Map(prev);
      const goals = new Set(newMap.get(weekId) || new Set());

      if (goals.has(goalIndex)) {
        goals.delete(goalIndex);
      } else {
        goals.add(goalIndex);
      }

      newMap.set(weekId, goals);

      const week = roadmapData.tracks
        .flatMap(t => t.months)
        .flatMap(m => m.weeks)
        .find(w => w.id === weekId);

      if (week) {
        updateWeekProgress(weekId, goals.size, week.goals.length);
      }

      return newMap;
    });
  };

  return (
    <>
      <ProgressDashboard
        totalWeeks={progress.totalWeeks}
        completedWeeks={progress.completedWeeks}
        daysUntilEnd={progress.daysUntilEnd}
        percentComplete={progress.percentComplete}
        currentWeekTitle={progress.currentWeek?.title || 'Loading...'}
      />

      <div className="space-y-16">
        {roadmapData.tracks.map((track, index) => (
          <TrackSection
            key={track.id}
            track={track}
            trackIndex={index}
            isWeekComplete={isWeekComplete}
            getWeekProgress={getWeekProgress}
            onWeekToggle={handleWeekToggle}
            onGoalToggle={handleGoalToggle}
            weekGoals={weekGoals}
          />
        ))}
      </div>

      <div className="mt-16 p-8 bg-gradient-to-br from-emerald-900/20 to-blue-900/20 rounded-2xl border border-emerald-500/30">
        <h3 className="text-2xl font-bold text-white mb-4">Your Mission</h3>
        <div className="space-y-2 text-slate-300">
          <p>🎯 Build one killer project that will get you hired</p>
          <p>💻 Master the AI stack: Python, FastAPI, LlamaIndex, RAG</p>
          <p>🧠 Sharpen your C++ DSA skills daily (1 hour/day)</p>
          <p>🚀 Deploy a live, production-ready AI application</p>
          <p>💰 Land a ₹10-15 LPA AI Engineer role</p>
        </div>
      </div>
    </>
  );
};
