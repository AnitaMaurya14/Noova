import { useState } from 'react';
import { Rocket, Map, FolderGit2, BookOpen, LogOut, Menu } from 'lucide-react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { WelcomePage } from './components/WelcomePage';
import { AuthForm } from './components/AuthForm';
import { RoadmapTracker } from './components/RoadmapTracker';
import { ProjectsSection } from './components/ProjectsSection';
import { JournalSection } from './components/JournalSection';

type View = 'welcome' | 'roadmap' | 'projects' | 'journal';

function AppContent() {
  const { user, loading, signOut } = useAuth();
  const [currentView, setCurrentView] = useState<View>('welcome');
  const [showWelcome, setShowWelcome] = useState(true);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <AuthForm />;
  }

  if (showWelcome && currentView === 'welcome') {
    return (
      <WelcomePage
        onGetStarted={() => {
          setShowWelcome(false);
          setCurrentView('roadmap');
        }}
      />
    );
  }

  const navItems = [
    { id: 'roadmap', label: 'Roadmap', icon: Map },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'journal', label: 'Journal', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative">
        <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">AI Engineer Roadmap</h1>
                  <p className="text-slate-400 text-xs">Nov 2025 - Apr 2026</p>
                </div>
              </div>

              <nav className="hidden md:flex items-center gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentView(item.id as View)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                        currentView === item.id
                          ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-red-900/20 transition-all ml-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="font-medium">Logout</span>
                </button>
              </nav>

              <div className="md:hidden">
                <button className="p-2 text-slate-400 hover:text-white">
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>

            <nav className="md:hidden flex gap-2 mt-4 overflow-x-auto pb-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentView(item.id as View)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                      currentView === item.id
                        ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white'
                        : 'text-slate-400 hover:text-white bg-slate-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium text-sm">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {currentView === 'roadmap' && <RoadmapTracker />}
          {currentView === 'projects' && <ProjectsSection />}
          {currentView === 'journal' && <JournalSection />}
        </main>

        <footer className="border-t border-slate-800 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-slate-500 text-sm">
              Your code and live demos will do the talking. Show, don't tell.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
