import UseCaseCard from './UseCaseCard'
import {
  StudentIcon,
  EducatorIcon,
  ProfessionalIcon,
  ResearcherIcon,
  LearnerIcon,
  TeamsIcon,
} from '../assets/icons/UseCaseIcons'

const useCases = [
  {
    icon: StudentIcon,
    title: 'Students',
    description: 'Summarize notes, clarify flashcards, solve problems, and ace your exams easily.',
  },
  {
    icon: EducatorIcon,
    title: 'Educators',
    description: 'Create quizzes, lesson plans, and teaching materials for projects in minutes.',
  },
  {
    icon: ProfessionalIcon,
    title: 'Professionals',
    description: 'Streamline workflows, draft reports, and update faster with AI assistance.',
  },
  {
    icon: ResearcherIcon,
    title: 'Researchers',
    description: 'Analyze documents and get instant insights and knowledge quickly.',
  },
  {
    icon: LearnerIcon,
    title: 'Lifelong learners',
    description: 'Learn new topics and track your progress at your own pace and style.',
  },
  {
    icon: TeamsIcon,
    title: 'Teams',
    description: 'Collaborate and share knowledge efficiently with your team members.',
  },
]

export default function UseCasesGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {useCases.map((item, idx) => (
          <UseCaseCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
            delay={idx + 1}
          />
        ))}
      </div>
    </section>
  )
}
