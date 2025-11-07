import { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import { roadmapData } from './data/roadmapData';
import { useRoadmapProgress } from './hooks/useRoadmapProgress';
import { ProgressDashboard } from './components/ProgressDashboard';
import { TrackSection } from './components/TrackSection';

function App() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative">
        <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">6-Month AI Engineer Roadmap</h1>
                <p className="text-slate-400 text-sm">Nov 2025 - Apr 2026 | Get Hired Plan</p>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
        </main>

        <footer className="border-t border-slate-800 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-slate-500 text-sm">
              Your code and live demos will do the talking. Show, don't tell. 🚀
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
