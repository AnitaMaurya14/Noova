import { Month } from '../types/roadmap';
import { WeekCard } from './WeekCard';

interface MonthSectionProps {
  month: Month;
  trackColor: string;
  isWeekComplete: (weekId: string) => boolean;
  getWeekProgress: (weekId: string) => number;
  onWeekToggle: (weekId: string) => void;
  onGoalToggle: (weekId: string, goalIndex: number) => void;
  weekGoals: Map<string, Set<number>>;
}

export const MonthSection = ({
  month,
  trackColor,
  isWeekComplete,
  getWeekProgress,
  onWeekToggle,
  onGoalToggle,
  weekGoals
}: MonthSectionProps) => {
  return (
    <div className="mb-12">
      <div className="mb-6">
        <div className={`inline-block px-4 py-1 rounded-full text-xs font-bold mb-2 ${trackColor}`}>
          Month {month.monthNumber}
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">{month.title}</h2>
        <p className="text-slate-400">{month.goal}</p>
      </div>

      <div className="grid gap-6">
        {month.weeks.map(week => (
          <WeekCard
            key={week.id}
            week={week}
            isComplete={isWeekComplete(week.id)}
            weekProgress={getWeekProgress(week.id)}
            onToggleComplete={() => onWeekToggle(week.id)}
            onGoalToggle={(goalIndex) => onGoalToggle(week.id, goalIndex)}
            completedGoals={weekGoals.get(week.id) || new Set()}
          />
        ))}
      </div>
    </div>
  );
};
