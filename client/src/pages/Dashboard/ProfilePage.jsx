import DashboardLayout from './DashboardLayout';
import { mockUser, mockStats, mockProgress } from '../../services/mockData';

/**
 * ProfilePage — User profile and achievements
 */

const ProfilePage = () => {
  const { achievements } = mockProgress;

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
        <p className="text-sm text-gray-500 mt-1">Your learning profile and achievements</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Profile card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center gap-4">
          <div className="w-20 h-20 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold text-3xl">
            A
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">{mockUser.name}</h2>
            <p className="text-sm text-gray-500">{mockUser.email}</p>
            <p className="text-xs text-gray-400 mt-1">Joined {mockUser.joinedDate}</p>
          </div>
          <div className="w-full pt-4 border-t border-gray-100">
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Modules',    value: mockStats.totalModules      },
                { label: 'Quizzes',    value: mockStats.quizzesCompleted  },
                { label: 'Streak',     value: `${mockStats.studyStreakDays}d` },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-lg font-bold text-gray-900">{s.value}</p>
                  <p className="text-xs text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="w-full py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
            Edit Profile
          </button>
        </div>

        {/* Stats + achievements */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Learning stats */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-base font-bold text-gray-900 mb-5">Learning Stats</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Total Study Time',     value: mockStats.totalStudyTime,        icon: '⏱️' },
                { label: 'Modules Completed',    value: mockStats.totalModules,           icon: '📚' },
                { label: 'Quizzes Completed',    value: mockStats.quizzesCompleted,       icon: '📝' },
                { label: 'Flashcards Reviewed',  value: mockStats.flashcardsReviewed,     icon: '🃏' },
              ].map((s) => (
                <div key={s.label} className="bg-gray-50 rounded-2xl p-4 text-center">
                  <p className="text-2xl mb-1">{s.icon}</p>
                  <p className="text-xl font-bold text-gray-900">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-base font-bold text-gray-900 mb-5">Achievements</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {achievements.map((a) => (
                <div
                  key={a.id}
                  className={`flex items-center gap-3 p-4 rounded-2xl border transition-all
                    ${a.earned
                      ? 'bg-purple-50 border-purple-100'
                      : 'bg-gray-50 border-gray-100 opacity-40'
                    }`}
                >
                  <span className="text-2xl flex-shrink-0">{a.icon}</span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-900 truncate">{a.title}</p>
                    <p className="text-xs text-gray-500 truncate">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
