import DashboardLayout from './DashboardLayout';
import { mockProgress } from '../../services/mockData';

/**
 * ProgressPage — Track your learning journey
 * Shows: weekly study chart, overall stats, achievements, top subjects
 */

const ProgressPage = () => {
  const { weeklyStudyTime, modulesCompleted, quizzesCompleted,
          flashcardsReviewed, overallProgress, achievements, topSubjects } = mockProgress;

  const maxHours = Math.max(...weeklyStudyTime.map((d) => d.hours));

  return (
    <DashboardLayout>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Progress</h1>
        <p className="text-sm text-gray-500 mt-1">Track your learning journey</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Study Time',          value: '18h 45 mins',                                                icon: '⏱️' },
          { label: 'Modules Completed',   value: `${modulesCompleted.done}/${modulesCompleted.total}`,         icon: '📚' },
          { label: 'Quizzes Completed',   value: `${quizzesCompleted.done}/${quizzesCompleted.total}`,         icon: '📝' },
          { label: 'Flashcards Reviewed', value: flashcardsReviewed,                                           icon: '🃏' },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <p className="text-2xl mb-1">{s.icon}</p>
            <p className="text-xl font-bold text-gray-900">{s.value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Weekly study chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-base font-bold text-gray-900">Study Time</h2>
            <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-lg">This Week</span>
          </div>

          {/* Bar chart */}
          <div className="flex items-end justify-between gap-2 h-40">
            {weeklyStudyTime.map((d) => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-xs text-gray-500">{d.hours}h</span>
                <div className="w-full flex items-end justify-center" style={{ height: '100px' }}>
                  <div
                    className="w-full bg-purple-500 rounded-t-lg transition-all hover:bg-purple-600"
                    style={{ height: `${(d.hours / maxHours) * 100}%`, minHeight: '4px' }}
                  />
                </div>
                <span className="text-xs text-gray-400">{d.day}</span>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 mt-6 flex-wrap">
            {[
              { label: 'Modules Completed',   color: 'bg-purple-500' },
              { label: 'Quizzes Completed',   color: 'bg-blue-400'   },
              { label: 'Flashcards Reviewed', color: 'bg-green-400'  },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-1.5">
                <div className={`w-2.5 h-2.5 rounded-full ${l.color}`} />
                <span className="text-xs text-gray-500">{l.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">

          {/* Overall progress */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-sm font-bold text-gray-900 mb-4">Overall Progress</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-28 h-28">
                <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="#F3F4F6" strokeWidth="10" fill="none" />
                  <circle
                    cx="50" cy="50" r="40"
                    stroke="#7C3AED" strokeWidth="10" fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - overallProgress / 100)}`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">{overallProgress}%</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-center text-gray-500">Complete</p>
          </div>

          {/* Top subjects */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-sm font-bold text-gray-900 mb-4">Top Subjects</h2>
            <div className="flex flex-col gap-3">
              {topSubjects.map((s) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-gray-700">{s.name}</span>
                    <span className="text-xs font-semibold text-gray-500">{s.percent}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: `${s.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Achievements */}
      <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-base font-bold text-gray-900 mb-5">Recent Achievements</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {achievements.map((a) => (
            <div
              key={a.id}
              className={`flex flex-col items-center text-center p-4 rounded-2xl border transition-all
                ${a.earned
                  ? 'bg-purple-50 border-purple-100'
                  : 'bg-gray-50 border-gray-100 opacity-50'
                }`}
            >
              <span className="text-3xl mb-2">{a.icon}</span>
              <p className="text-xs font-bold text-gray-900 mb-0.5">{a.title}</p>
              <p className="text-xs text-gray-500">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </DashboardLayout>
  );
};

export default ProgressPage;
