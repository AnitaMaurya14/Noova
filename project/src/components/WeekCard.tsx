import { useState } from 'react';
import { CheckCircle2, Circle, ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { Week } from '../types/roadmap';

interface WeekCardProps {
  week: Week;
  isComplete: boolean;
  weekProgress: number;
  onToggleComplete: () => void;
  onGoalToggle: (goalIndex: number) => void;
  completedGoals: Set<number>;
}

export const WeekCard = ({
  week,
  isComplete,
  weekProgress,
  onToggleComplete,
  onGoalToggle,
  completedGoals
}: WeekCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const today = new Date();
  const weekStart = new Date(week.startDate);
  const weekEnd = new Date(week.endDate);
  const isCurrent = today >= weekStart && today <= weekEnd;
  const isPast = today > weekEnd;

  return (
    <div
      className={`
        bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border-2
        transform transition-all duration-300 hover:scale-[1.02]
        ${isCurrent ? 'border-emerald-500 shadow-lg shadow-emerald-500/20' : 'border-slate-700'}
        ${isComplete ? 'opacity-75' : ''}
      `}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <button
                onClick={onToggleComplete}
                className="flex-shrink-0 transition-transform hover:scale-110"
              >
                {isComplete ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                ) : (
                  <Circle className="w-6 h-6 text-slate-500 hover:text-slate-400" />
                )}
              </button>
              <div>
                <span className="text-xs font-semibold text-slate-500">
                  Week {week.weekNumber}
                </span>
                <h3 className="text-xl font-bold text-white">{week.title}</h3>
              </div>
            </div>
            <p className="text-slate-400 text-sm ml-9">{week.description}</p>
          </div>

          {isCurrent && (
            <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full animate-pulse">
              Current
            </span>
          )}
        </div>

        <div className="ml-9 mb-4">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Progress</span>
            <span>{weekProgress.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-400 to-blue-400 h-full transition-all duration-500 ease-out"
              style={{ width: `${weekProgress}%` }}
            />
          </div>
        </div>

        <div className="ml-9 flex items-center gap-2 text-xs text-slate-500 mb-4">
          <Calendar className="w-4 h-4" />
          <span>
            {new Date(week.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            {' - '}
            {new Date(week.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </span>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-9 flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Hide Goals
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Show Goals ({week.goals.length})
            </>
          )}
        </button>

        {isExpanded && (
          <div className="ml-9 mt-4 space-y-2 animate-fadeIn">
            {week.goals.map((goal, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <button
                  onClick={() => onGoalToggle(index)}
                  className="flex-shrink-0 mt-0.5 transition-transform hover:scale-110"
                >
                  {completedGoals.has(index) ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-600 hover:text-slate-500" />
                  )}
                </button>
                <span
                  className={`text-sm ${
                    completedGoals.has(index) ? 'text-slate-500 line-through' : 'text-slate-300'
                  }`}
                >
                  {goal}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
