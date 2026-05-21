import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import { mockModuleDetail } from '../../services/mockData';

/**
 * ModuleDetailPage — Full detail view for a single module
 * Shows: progress, subtopics list, key concepts, quick actions
 *
 * Route: /dashboard/modules/:id
 *
 * When backend is ready:
 *  const module = await fetch(`/api/modules/${id}`).then(r => r.json());
 */

const TABS = ['Overview', 'Subtopics', 'Key Concepts', 'Notes'];

const ModuleDetailPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Overview');
  const [expandedSubtopic, setExpandedSubtopic] = useState(null);

  // TODO: Replace with real API call using `id`
  const module = mockModuleDetail;

  const completedCount = module.subtopics.filter((s) => s.completed).length;
  const totalDuration = module.subtopics.reduce((acc, s) => {
    return acc + parseInt(s.duration);
  }, 0);

  return (
    <DashboardLayout>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link to="/dashboard" className="hover:text-purple-600 transition-colors">Dashboard</Link>
        <span>›</span>
        <Link to="/dashboard/modules" className="hover:text-purple-600 transition-colors">Modules</Link>
        <span>›</span>
        <span className="text-gray-700 font-medium truncate">{module.title}</span>
      </div>

      {/* Header card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">

          {/* Left: title + meta */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded-full">
                {module.subject}
              </span>
              <span className="text-xs text-gray-400">Updated {module.lastUpdated}</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{module.title}</h1>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xl">{module.description}</p>
          </div>

          {/* Right: circular progress */}
          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="32" stroke="#F3F4F6" strokeWidth="8" fill="none" />
                <circle
                  cx="40" cy="40" r="32"
                  stroke="#7C3AED" strokeWidth="8" fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 32}`}
                  strokeDashoffset={`${2 * Math.PI * 32 * (1 - module.progress / 100)}`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-base font-bold text-gray-900">{module.progress}%</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center">
              {completedCount}/{module.totalLessons} lessons
            </p>
          </div>

        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-gray-50">
          {[
            { label: 'Total Lessons',   value: module.totalLessons,     icon: '📚' },
            { label: 'Est. Duration',   value: `${totalDuration} mins`, icon: '⏱️' },
            { label: 'Quizzes',         value: module.quizCount,        icon: '📝' },
            { label: 'Flashcard Decks', value: module.flashcardCount,   icon: '🃏' },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <span className="text-lg">{s.icon}</span>
              <div>
                <p className="text-sm font-bold text-gray-900">{s.value}</p>
                <p className="text-xs text-gray-500">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick action buttons */}
        <div className="flex flex-wrap gap-3 mt-5">
          <Link
            to={`/dashboard/quizzes`}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            📝 Take Quiz
          </Link>
          <Link
            to={`/dashboard/flashcards`}
            className="flex items-center gap-2 border border-purple-200 text-purple-600 hover:bg-purple-50 text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            🃏 Study Flashcards
          </Link>
          <Link
            to={`/dashboard/notes`}
            className="flex items-center gap-2 border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            📄 View Notes
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl w-fit mb-6">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${activeTab === tab
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── Tab: Overview ── */}
      {activeTab === 'Overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Progress breakdown */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-base font-bold text-gray-900 mb-5">Lesson Progress</h2>
            <div className="flex flex-col gap-3">
              {module.subtopics.map((subtopic, i) => (
                <div
                  key={subtopic.id}
                  className={`flex items-center gap-4 p-3 rounded-xl transition-colors
                    ${subtopic.completed ? 'bg-green-50' : 'bg-gray-50'}`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0
                    ${subtopic.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}
                  >
                    {subtopic.completed ? '✓' : i + 1}
                  </div>
                  <p className={`flex-1 text-sm font-medium truncate
                    ${subtopic.completed ? 'text-gray-700 line-through opacity-60' : 'text-gray-900'}`}
                  >
                    {subtopic.title}
                  </p>
                  <span className="text-xs text-gray-400 flex-shrink-0">{subtopic.duration}</span>
                  {!subtopic.completed && (
                    <button className="text-xs font-semibold text-purple-600 hover:underline flex-shrink-0">
                      Start
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: key concepts + continue */}
          <div className="flex flex-col gap-5">

            {/* Next lesson */}
            {module.subtopics.find((s) => !s.completed) && (
              <div className="bg-purple-600 rounded-2xl p-5 text-white">
                <p className="text-xs font-semibold opacity-75 mb-1 uppercase tracking-wide">Up Next</p>
                <p className="text-sm font-bold mb-3">
                  {module.subtopics.find((s) => !s.completed)?.title}
                </p>
                <button className="w-full py-2.5 bg-white text-purple-600 text-sm font-bold rounded-xl hover:bg-purple-50 transition-colors">
                  Continue Learning →
                </button>
              </div>
            )}

            {/* Key concepts preview */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="text-sm font-bold text-gray-900 mb-3">Key Concepts</h3>
              <div className="flex flex-col gap-2">
                {module.keyConcepts.slice(0, 3).map((concept, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0 mt-1.5" />
                    <p className="text-xs text-gray-600 leading-relaxed">{concept}</p>
                  </div>
                ))}
                {module.keyConcepts.length > 3 && (
                  <button
                    onClick={() => setActiveTab('Key Concepts')}
                    className="text-xs text-purple-600 font-semibold hover:underline text-left mt-1"
                  >
                    +{module.keyConcepts.length - 3} more →
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ── Tab: Subtopics ── */}
      {activeTab === 'Subtopics' && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {module.subtopics.map((subtopic, i) => (
            <div key={subtopic.id}>
              <button
                onClick={() => setExpandedSubtopic(expandedSubtopic === subtopic.id ? null : subtopic.id)}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors text-left"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0
                  ${subtopic.completed ? 'bg-green-500 text-white' : 'bg-purple-100 text-purple-700'}`}
                >
                  {subtopic.completed ? '✓' : i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold ${subtopic.completed ? 'text-gray-500' : 'text-gray-900'}`}>
                    {subtopic.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{subtopic.duration}</p>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0
                  ${subtopic.completed ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}`}
                >
                  {subtopic.completed ? 'Completed' : 'Pending'}
                </span>
                <span className="text-gray-400 text-sm flex-shrink-0">
                  {expandedSubtopic === subtopic.id ? '▲' : '▼'}
                </span>
              </button>

              {expandedSubtopic === subtopic.id && (
                <div className="px-5 pb-5 bg-gray-50 border-t border-gray-100">
                  <p className="text-sm text-gray-600 leading-relaxed pt-4 mb-4">
                    This lesson covers {subtopic.title.toLowerCase()} in depth. AI-generated content will appear here once you upload your study materials.
                  </p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">
                    {subtopic.completed ? 'Review Lesson' : 'Start Lesson'}
                  </button>
                </div>
              )}

              {i < module.subtopics.length - 1 && <div className="border-b border-gray-50" />}
            </div>
          ))}
        </div>
      )}

      {/* ── Tab: Key Concepts ── */}
      {activeTab === 'Key Concepts' && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-base font-bold text-gray-900 mb-5">Key Concepts</h2>
          <div className="flex flex-col gap-4">
            {module.keyConcepts.map((concept, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-purple-50 rounded-2xl border border-purple-100">
                <div className="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{concept}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Tab: Notes ── */}
      {activeTab === 'Notes' && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-bold text-gray-900">Module Notes</h2>
            <Link
              to="/dashboard/notes"
              className="text-sm text-purple-600 font-semibold hover:underline"
            >
              View All Notes →
            </Link>
          </div>
          <div className="text-center py-12 text-gray-400">
            <p className="text-4xl mb-3">📄</p>
            <p className="font-medium text-gray-600">No notes for this module yet</p>
            <p className="text-sm mt-1">Your AI-generated notes will appear here</p>
            <Link
              to="/dashboard/notes"
              className="inline-block mt-4 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
            >
              Create Note
            </Link>
          </div>
        </div>
      )}

    </DashboardLayout>
  );
};

export default ModuleDetailPage;
