import { Rocket, Target, BookOpen, FolderGit2 } from 'lucide-react';

interface WelcomePageProps {
  onGetStarted: () => void;
}

export const WelcomePage = ({ onGetStarted }: WelcomePageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex p-4 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl mb-8 animate-pulse">
          <Rocket className="w-16 h-16 text-white" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Your 6-Month Journey to
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
            AI Engineer
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform from web developer to AI engineer with a structured roadmap,
          project tracking, and daily journaling to land your dream ₹10-15 LPA role
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 transform hover:scale-105 transition-all duration-300">
            <Target className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Track Progress</h3>
            <p className="text-slate-400 text-sm">
              Monitor your weekly goals across AI engineering and DSA tracks
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 transform hover:scale-105 transition-all duration-300">
            <FolderGit2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Manage Projects</h3>
            <p className="text-slate-400 text-sm">
              Upload and showcase your killer projects and resume
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 transform hover:scale-105 transition-all duration-300">
            <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Daily Journal</h3>
            <p className="text-slate-400 text-sm">
              Document your learnings, tasks, and activities every day
            </p>
          </div>
        </div>

        <button
          onClick={onGetStarted}
          className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-lg font-bold rounded-xl hover:from-emerald-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/50"
        >
          Get Started
        </button>

        <p className="text-slate-500 text-sm mt-8">
          Nov 2025 - Apr 2026 | Your journey starts now
        </p>
      </div>
    </div>
  );
};
