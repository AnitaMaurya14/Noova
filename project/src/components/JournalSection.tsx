import { useState, useEffect } from 'react';
import { Plus, X, Calendar, Smile, Meh, Frown, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase, DailyJournal } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

const MOODS = [
  { value: 'great', label: 'Great', icon: Smile, color: 'text-green-400' },
  { value: 'okay', label: 'Okay', icon: Meh, color: 'text-yellow-400' },
  { value: 'bad', label: 'Bad', icon: Frown, color: 'text-red-400' },
];

export const JournalSection = () => {
  const { user } = useAuth();
  const [journals, setJournals] = useState<DailyJournal[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [currentPage, setCurrentPage] = useState(0);
  const entriesPerPage = 5;

  const [formData, setFormData] = useState({
    completed_tasks: [''],
    learnings: [''],
    activities: [''],
    notes: '',
    mood: 'okay'
  });

  useEffect(() => {
    if (user) {
      fetchJournals();
    }
  }, [user]);

  const fetchJournals = async () => {
    const { data, error } = await supabase
      .from('daily_journals')
      .select('*')
      .order('entry_date', { ascending: false });

    if (!error && data) {
      setJournals(data);
    }
  };

  const handleAddItem = (field: 'completed_tasks' | 'learnings' | 'activities') => {
    setFormData({
      ...formData,
      [field]: [...formData[field], '']
    });
  };

  const handleRemoveItem = (field: 'completed_tasks' | 'learnings' | 'activities', index: number) => {
    setFormData({
      ...formData,
      [field]: formData[field].filter((_, i) => i !== index)
    });
  };

  const handleUpdateItem = (field: 'completed_tasks' | 'learnings' | 'activities', index: number, value: string) => {
    const newItems = [...formData[field]];
    newItems[index] = value;
    setFormData({
      ...formData,
      [field]: newItems
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const completed_tasks = formData.completed_tasks.filter(t => t.trim().length > 0);
    const learnings = formData.learnings.filter(l => l.trim().length > 0);
    const activities = formData.activities.filter(a => a.trim().length > 0);

    const { error } = await supabase.from('daily_journals').upsert({
      entry_date: selectedDate,
      completed_tasks,
      learnings,
      activities,
      notes: formData.notes,
      mood: formData.mood,
      user_id: user!.id
    }, {
      onConflict: 'user_id,entry_date'
    });

    setLoading(false);

    if (!error) {
      setIsModalOpen(false);
      setFormData({
        completed_tasks: [''],
        learnings: [''],
        activities: [''],
        notes: '',
        mood: 'okay'
      });
      fetchJournals();
    }
  };

  const openModal = (journal?: DailyJournal) => {
    if (journal) {
      setSelectedDate(journal.entry_date);
      setFormData({
        completed_tasks: journal.completed_tasks.length > 0 ? journal.completed_tasks : [''],
        learnings: journal.learnings.length > 0 ? journal.learnings : [''],
        activities: journal.activities.length > 0 ? journal.activities : [''],
        notes: journal.notes,
        mood: journal.mood || 'okay'
      });
    } else {
      setSelectedDate(new Date().toISOString().split('T')[0]);
      setFormData({
        completed_tasks: [''],
        learnings: [''],
        activities: [''],
        notes: '',
        mood: 'okay'
      });
    }
    setIsModalOpen(true);
  };

  const getMoodIcon = (mood?: string) => {
    const moodObj = MOODS.find(m => m.value === mood) || MOODS[1];
    const Icon = moodObj.icon;
    return <Icon className={`w-5 h-5 ${moodObj.color}`} />;
  };

  const paginatedJournals = journals.slice(
    currentPage * entriesPerPage,
    (currentPage + 1) * entriesPerPage
  );
  const totalPages = Math.ceil(journals.length / entriesPerPage);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Daily Journal</h2>
          <p className="text-slate-400">Track your progress, learnings, and activities</p>
        </div>
        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300"
        >
          <Plus className="w-5 h-5" />
          New Entry
        </button>
      </div>

      <div className="space-y-4">
        {paginatedJournals.map((journal) => (
          <div
            key={journal.id}
            onClick={() => openModal(journal)}
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <span className="text-white font-semibold">
                  {new Date(journal.entry_date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              {getMoodIcon(journal.mood)}
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-sm font-semibold text-emerald-400 mb-2">Completed Tasks</h4>
                <ul className="space-y-1">
                  {journal.completed_tasks.slice(0, 2).map((task, idx) => (
                    <li key={idx} className="text-slate-300 text-sm truncate">• {task}</li>
                  ))}
                  {journal.completed_tasks.length > 2 && (
                    <li className="text-slate-500 text-xs">+{journal.completed_tasks.length - 2} more</li>
                  )}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Learnings</h4>
                <ul className="space-y-1">
                  {journal.learnings.slice(0, 2).map((learning, idx) => (
                    <li key={idx} className="text-slate-300 text-sm truncate">• {learning}</li>
                  ))}
                  {journal.learnings.length > 2 && (
                    <li className="text-slate-500 text-xs">+{journal.learnings.length - 2} more</li>
                  )}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Activities</h4>
                <ul className="space-y-1">
                  {journal.activities.slice(0, 2).map((activity, idx) => (
                    <li key={idx} className="text-slate-300 text-sm truncate">• {activity}</li>
                  ))}
                  {journal.activities.length > 2 && (
                    <li className="text-slate-500 text-xs">+{journal.activities.length - 2} more</li>
                  )}
                </ul>
              </div>
            </div>

            {journal.notes && (
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-slate-400 text-sm line-clamp-2">{journal.notes}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="p-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-slate-400 text-sm">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
            className="p-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Daily Journal Entry</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    How was your day?
                  </label>
                  <div className="flex gap-2">
                    {MOODS.map((mood) => {
                      const Icon = mood.icon;
                      return (
                        <button
                          key={mood.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, mood: mood.value })}
                          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
                            formData.mood === mood.value
                              ? 'border-emerald-500 bg-emerald-500/20'
                              : 'border-slate-700 bg-slate-900 hover:border-slate-600'
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${mood.color}`} />
                          <span className="text-white text-sm">{mood.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-emerald-400">
                    What did you complete today?
                  </label>
                  <button
                    type="button"
                    onClick={() => handleAddItem('completed_tasks')}
                    className="text-emerald-400 hover:text-emerald-300 text-sm"
                  >
                    + Add
                  </button>
                </div>
                <div className="space-y-2">
                  {formData.completed_tasks.map((task, idx) => (
                    <div key={idx} className="flex gap-2">
                      <input
                        type="text"
                        value={task}
                        onChange={(e) => handleUpdateItem('completed_tasks', idx, e.target.value)}
                        className="flex-1 px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Completed Python tutorial"
                      />
                      {formData.completed_tasks.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveItem('completed_tasks', idx)}
                          className="p-2 text-red-400 hover:text-red-300"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-blue-400">
                    What did you learn today?
                  </label>
                  <button
                    type="button"
                    onClick={() => handleAddItem('learnings')}
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    + Add
                  </button>
                </div>
                <div className="space-y-2">
                  {formData.learnings.map((learning, idx) => (
                    <div key={idx} className="flex gap-2">
                      <input
                        type="text"
                        value={learning}
                        onChange={(e) => handleUpdateItem('learnings', idx, e.target.value)}
                        className="flex-1 px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Learned about async/await in Python"
                      />
                      {formData.learnings.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveItem('learnings', idx)}
                          className="p-2 text-red-400 hover:text-red-300"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-purple-400">
                    What activities did you do?
                  </label>
                  <button
                    type="button"
                    onClick={() => handleAddItem('activities')}
                    className="text-purple-400 hover:text-purple-300 text-sm"
                  >
                    + Add
                  </button>
                </div>
                <div className="space-y-2">
                  {formData.activities.map((activity, idx) => (
                    <div key={idx} className="flex gap-2">
                      <input
                        type="text"
                        value={activity}
                        onChange={(e) => handleUpdateItem('activities', idx, e.target.value)}
                        className="flex-1 px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Solved 3 LeetCode problems"
                      />
                      {formData.activities.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveItem('activities', idx)}
                          className="p-2 text-red-400 hover:text-red-300"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Additional Notes
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Any other thoughts or reflections..."
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-bold rounded-lg hover:from-emerald-600 hover:to-blue-600 disabled:opacity-50 transition-all"
                >
                  {loading ? 'Saving...' : 'Save Entry'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
