import { Calendar, Target, TrendingUp, Clock } from 'lucide-react';

interface ProgressDashboardProps {
  totalWeeks: number;
  completedWeeks: number;
  daysUntilEnd: number;
  percentComplete: number;
  currentWeekTitle: string;
}

export const ProgressDashboard = ({
  totalWeeks,
  completedWeeks,
  daysUntilEnd,
  percentComplete,
  currentWeekTitle
}: ProgressDashboardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <Target className="w-8 h-8 text-emerald-400" />
          <span className="text-3xl font-bold text-emerald-400">
            {completedWeeks}/{totalWeeks}
          </span>
        </div>
        <p className="text-slate-400 text-sm">Weeks Completed</p>
      </div>

      <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <TrendingUp className="w-8 h-8 text-blue-400" />
          <span className="text-3xl font-bold text-blue-400">
            {percentComplete.toFixed(0)}%
          </span>
        </div>
        <p className="text-slate-400 text-sm">Overall Progress</p>
      </div>

      <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <Clock className="w-8 h-8 text-amber-400" />
          <span className="text-3xl font-bold text-amber-400">
            {daysUntilEnd}
          </span>
        </div>
        <p className="text-slate-400 text-sm">Days Remaining</p>
      </div>

      <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <Calendar className="w-8 h-8 text-purple-400" />
        </div>
        <p className="text-slate-400 text-xs mb-1">Current Week</p>
        <p className="text-white text-sm font-semibold line-clamp-2">{currentWeekTitle}</p>
      </div>
    </div>
  );
};
