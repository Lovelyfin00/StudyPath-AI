import { Link } from 'react-router-dom';

// Icons — make sure these filenames match exactly in your assets folder
import studentsIcon from '../../assets/Students.png';
import educatorsIcon from '../../assets/Educators.png';
import professionalsIcon from '../../assets/Professionals.png';
import researchersIcon from '../../assets/Researchers.png';
import lifelongIcon from '../../assets/Lifelong learners.png';
import teamsIcon from '../../assets/Teams.png';
import studypathLogo from '../../assets/studypathailogo.png';

/**
 * UseCasesPage — Standalone Use Cases page
 * Route: /use-cases
 * Built with Tailwind CSS
 */

const USE_CASES = [
  {
    icon: studentsIcon,
    title: 'Students',
    description: 'Summarize notes, create flashcards and ace your exams.',
  },
  {
    icon: educatorsIcon,
    title: 'Educators',
    description: 'Creates quizzes, notes and teaching materials in seconds.',
  },
  {
    icon: professionalsIcon,
    title: 'Professionals',
    description: 'Organizes knowledge, prepare reports, and upskill faster.',
  },
  {
    icon: researchersIcon,
    title: 'Researchers',
    description: 'Analyze documents and extract key insights instantly.',
  },
  {
    icon: lifelongIcon,
    title: 'Lifelong learners',
    description: 'Learn new topics and track your progress.',
  },
  {
    icon: teamsIcon,
    title: 'Teams',
    description: 'Collaborate and share knowledge with your team.',
  },
];

const UseCasesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero header */}
      <div className="py-16 text-center">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">
          Use Cases
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
          StudyPath AI helps students, educators, and professionals
          learn and create more efficiently.
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-default"
            >
              {/* Icon */}
              <div className="mb-5">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-purple-700 rounded-2xl px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="text-white font-bold text-xl sm:text-2xl">
            See how StudyPath AI can work for you
          </h2>
          <Link
            to="/"
            className="flex items-center gap-2 bg-white text-purple-700 font-bold text-sm px-6 py-3 rounded-full hover:bg-purple-50 transition-colors whitespace-nowrap"
          >
            Get Started Free →
          </Link>
        </div>
      </div>

    </div>
  );
};

export default UseCasesPage;
