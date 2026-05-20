import { Link } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';

/**
 * DashboardPage — Main dashboard overview
 * Shows: welcome, stats, continue studying, recent activity, upcoming events
 */

const STATS = [
  { label: 'Total Modules',    value: '12',      icon: '📚', color: 'bg-blue-50 text-blue-600'   },
  { label: 'Quizzes Completed',value: '24',      icon: '📝', color: 'bg-green-50 text-green-600' },
  { label: 'Study Streak',     value: '12 Days', icon: '🔥', color: 'bg-orange-50 text-orange-600'},
  { label: 'Total Study Time', value: '18h 42m', icon: '⏱️', color: 'bg-purple-50 text-purple-600'},
];

const COURSES = [
  { title: 'Biology: Cell Structure',  progress: 75, color: 'bg-blue-500'   },
  { title: 'Psychology 101',           progress: 80, color: 'bg-purple-500' },
  { title: 'Marketing Principles',     progress: 30, color: 'bg-green-500'  },
  { title: 'Physics: Atoms',           progress: 20, color: 'bg-orange-500' },
];

const RECENT_ACTIVITY = [
  { text: 'Completed quiz: Cell structure basics', time: '2 hours ago',  icon: '✅' },
  { text: 'Study Psychology Chapter 2',            time: '2 hours ago',  icon: '📖' },
  { text: 'Reviewed Flashcards: Psychology Ch. 2', time: '5 hours ago',  icon: '🃏' },
  { text: 'Take Quiz: Marketing basics',           time: '5 hours ago',  icon: '📝' },
  { text: 'Created notes: Marketing Principles',   time: 'Yesterday',    icon: '📄' },
  { text: 'Review Flashcards: Cell structure',     time: 'May 29, 2pm',  icon: '🃏' },
  { text: 'Uploaded file: Lecture_notes.pdf',      time: 'Yesterday',    icon: '📤' },
];

const UPCOMING = [
  { title: 'Review Flashcards: Cell structure', date: 'May 29th, 2:00 PM' },
  { title: 'Study Psychology Chapter 2',        date: '2 hours ago'        },
];

const DashboardPage = () => {
  return (
    <DashboardLayout>

      {/* Welcome header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, Alex! 👋
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          {"Let's keep up the momentum."}
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center text-lg mb-3`}>
              {stat.icon}
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main grid: continue studying + activity + upcoming */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Continue studying */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-bold text-gray-900">Continue studying</h2>
            <Link to="/dashboard/modules" className="text-xs text-purple-600 font-semibold hover:underline">
              View all
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {COURSES.map((course) => (
              <div key={course.title} className="flex items-center gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-sm font-medium text-gray-800 truncate">{course.title}</p>
                    <span className="text-xs font-semibold text-gray-500 ml-2 flex-shrink-0">
                      {course.progress}% Complete
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className={`${course.color} h-2 rounded-full transition-all`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: activity + upcoming */}
        <div className="flex flex-col gap-6">

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-base font-bold text-gray-900 mb-4">Recent Activity</h2>
            <div className="flex flex-col gap-3">
              {RECENT_ACTIVITY.slice(0, 4).map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-gray-700 leading-snug">{item.text}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-gray-900">Upcoming</h2>
              <Link to="/dashboard/calendar" className="text-xs text-purple-600 font-semibold hover:underline">
                View Calendar
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              {UPCOMING.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-purple-50 rounded-xl">
                  <span className="text-base flex-shrink-0">📅</span>
                  <div>
                    <p className="text-xs font-semibold text-gray-800 leading-snug">{item.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.date}</p>
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

export default DashboardPage;
