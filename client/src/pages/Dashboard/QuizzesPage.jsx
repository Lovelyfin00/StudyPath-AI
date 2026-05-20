import { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import { mockQuizzes } from '../../services/mockData';

/**
 * QuizzesPage — Test your knowledge and track your progress
 * Tabs: All Quizzes | Completed
 */

const TABS = ['All Quizzes', 'Completed'];

const subjectColor = (subject) => {
  const map = {
    Biology:    'bg-green-100 text-green-700',
    Psychology: 'bg-purple-100 text-purple-700',
    Marketing:  'bg-blue-100 text-blue-700',
    Physics:    'bg-orange-100 text-orange-700',
  };
  return map[subject] || 'bg-gray-100 text-gray-700';
};

const QuizCard = ({ quiz }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-4 hover:shadow-md transition-shadow">

    {/* Top row */}
    <div className="flex items-start justify-between gap-2">
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-bold text-gray-900 mb-1">{quiz.title}</h3>
        <div className="flex items-center gap-2">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${subjectColor(quiz.subject)}`}>
            {quiz.subject}
          </span>
          <span className="text-xs text-gray-400">{quiz.questions} Questions</span>
        </div>
      </div>

      {/* Score badge */}
      {quiz.score !== null && (
        <div className="flex-shrink-0 text-center">
          <p className="text-xl font-bold text-purple-600">{quiz.score}%</p>
          {quiz.saved && (
            <span className="text-xs text-gray-400 flex items-center gap-1">🔖 Saved</span>
          )}
        </div>
      )}
    </div>

    {/* Progress bar (for completed) */}
    {quiz.score !== null && (
      <div className="w-full bg-gray-100 rounded-full h-1.5">
        <div
          className="bg-purple-500 h-1.5 rounded-full"
          style={{ width: `${quiz.score}%` }}
        />
      </div>
    )}

    {/* CTA button */}
    <button className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-colors
      ${quiz.status === 'completed'
        ? 'bg-purple-50 text-purple-600 hover:bg-purple-100'
        : 'bg-purple-600 text-white hover:bg-purple-700'
      }`}
    >
      {quiz.status === 'completed' ? 'Retake Quiz' : 'Start Quiz'}
    </button>
  </div>
);

const QuizzesPage = () => {
  const [activeTab, setActiveTab] = useState('All Quizzes');

  const filtered = mockQuizzes.filter((q) => {
    if (activeTab === 'Completed') return q.status === 'completed';
    return true;
  });

  return (
    <DashboardLayout>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Quizzes</h1>
        <p className="text-sm text-gray-500 mt-1">Test your knowledge and track your progress</p>
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

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>

    </DashboardLayout>
  );
};

export default QuizzesPage;
