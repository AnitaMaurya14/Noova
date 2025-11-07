import { Track } from '../types/roadmap';
import { MonthSection } from './MonthSection';
import { Code2, Brain } from 'lucide-react';

interface TrackSectionProps {
  track: Track;
  trackIndex: number;
  isWeekComplete: (weekId: string) => boolean;
  getWeekProgress: (weekId: string) => number;
  onWeekToggle: (weekId: string) => void;
  onGoalToggle: (weekId: string, goalIndex: number) => void;
  weekGoals: Map<string, Set<number>>;
}

export const TrackSection = ({
  track,
  trackIndex,
  isWeekComplete,
  getWeekProgress,
  onWeekToggle,
  onGoalToggle,
  weekGoals
}: TrackSectionProps) => {
  const trackColors = [
    'bg-gradient-to-r from-emerald-500 to-blue-500 text-white',
    'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
  ];

  const trackIcons = [
    <Code2 className="w-8 h-8" />,
    <Brain className="w-8 h-8" />
  ];

  return (
    <div className="mb-16">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 mb-8 border-2 border-slate-700">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-xl ${trackColors[trackIndex]}`}>
            {trackIcons[trackIndex]}
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-2">{track.title}</h2>
            <p className="text-slate-400 text-lg">{track.description}</p>
          </div>
        </div>
      </div>

      {track.months.map(month => (
        <MonthSection
          key={month.id}
          month={month}
          trackColor={trackColors[trackIndex]}
          isWeekComplete={isWeekComplete}
          getWeekProgress={getWeekProgress}
          onWeekToggle={onWeekToggle}
          onGoalToggle={onGoalToggle}
          weekGoals={weekGoals}
        />
      ))}
    </div>
  );
};
