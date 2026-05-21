/**
 * mockData.js — Central mock data store
 * 
 * This mirrors exactly what the real API will return.
 * When backend is ready, replace these with real API calls
 * in the service files — the components won't need to change.
 */

export const mockUser = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex.j@email.com',
  joinedDate: 'May 4, 2024',
  avatar: null, // will be a URL when real
  plan: 'free',
  usagePercent: 85,
};

export const mockStats = {
  totalModules: 12,
  quizzesCompleted: 24,
  studyStreakDays: 12,
  totalStudyTime: '18h 42min',
  flashcardsReviewed: 348,
};

export const mockModules = [
  { id: '1', title: 'Biology: Cell Structure',  subject: 'Biology',    lessons: 8,  progress: 75, lastUpdated: '2 hours ago',  status: 'in_progress' },
  { id: '2', title: 'Psychology 101',           subject: 'Psychology', lessons: 10, progress: 80, lastUpdated: '1 day ago',    status: 'in_progress' },
  { id: '3', title: 'Marketing Principles',     subject: 'Marketing',  lessons: 6,  progress: 30, lastUpdated: '3 days ago',   status: 'in_progress' },
  { id: '4', title: 'Physics: Atoms',           subject: 'Physics',    lessons: 12, progress: 20, lastUpdated: '5 days ago',   status: 'in_progress' },
  { id: '5', title: 'Economics Basics',         subject: 'Economics',  lessons: 7,  progress: 100, lastUpdated: '1 week ago',  status: 'completed'   },
  { id: '6', title: 'Chemistry: Bonds',         subject: 'Chemistry',  lessons: 9,  progress: 0,  lastUpdated: 'Never',        status: 'not_started' },
];

export const mockQuizzes = [
  { id: '1', title: 'Cell Structure: Basics',    subject: 'Biology',    questions: 40, score: 85,  status: 'completed', saved: true  },
  { id: '2', title: 'Psychology: Memory',        subject: 'Psychology', questions: 30, score: 92,  status: 'completed', saved: false },
  { id: '3', title: 'Marketing Basics',          subject: 'Marketing',  questions: 25, score: null, status: 'not_taken', saved: false },
  { id: '4', title: 'Physics: Motion',           subject: 'Physics',    questions: 35, score: null, status: 'not_taken', saved: false },
  { id: '5', title: 'Cell Structure: Advanced',  subject: 'Biology',    questions: 40, score: 100, status: 'completed', saved: true  },
];

export const mockFlashcardDecks = [
  { id: '1', title: 'Biology Cell Structure', subject: 'Science',    cards: 120, progress: 75, lastStudied: '2 hours ago', studiedCards: 32  },
  { id: '2', title: 'Psychology Terms',       subject: 'Psychology', cards: 80,  progress: 85, lastStudied: '1 day ago',   studiedCards: 68  },
  { id: '3', title: 'Marketing Concepts',     subject: 'Marketing',  cards: 60,  progress: 30, lastStudied: '3 days ago',  studiedCards: 18  },
  { id: '4', title: 'Physics Formulas',       subject: 'Physics',    cards: 45,  progress: 20, lastStudied: '1 week ago',  studiedCards: 9   },
];

export const mockFlashcards = [
  { id: '1', front: 'What is the powerhouse of the cell?',         back: 'The Mitochondria'                                         },
  { id: '2', front: 'What is the function of the cell membrane?',  back: 'Controls what enters and exits the cell'                   },
  { id: '3', front: 'What is the nucleus?',                        back: 'The control center of the cell containing DNA'             },
  { id: '4', front: 'What is photosynthesis?',                     back: 'Process by which plants convert sunlight into food'        },
  { id: '5', front: 'What is osmosis?',                            back: 'Movement of water through a semipermeable membrane'        },
];

export const mockNotes = [
  { id: '1', title: 'Cell Structure - Key Points',   subject: 'Biology',    createdAt: '2 hours ago', content: 'The cell is the basic unit of life. Key organelles include the nucleus (control center), mitochondria (energy production), and ribosomes (protein synthesis). The cell membrane regulates what enters and exits the cell.' },
  { id: '2', title: 'Psychology - Memory Models',    subject: 'Psychology', createdAt: '1 day ago',   content: 'Atkinson-Shiffrin model: Sensory memory → Short-term memory → Long-term memory. Working memory has limited capacity (7±2 items). Long-term memory includes episodic, semantic, and procedural memory types.' },
  { id: '3', title: 'Marketing Principles Summary',  subject: 'Marketing',  createdAt: 'Yesterday',   content: 'The 4 Ps of Marketing: Product, Price, Place, Promotion. Market segmentation divides consumers into groups. Target marketing selects the most attractive segments.' },
  { id: '4', title: 'Physics - Atomic Structure',    subject: 'Physics',    createdAt: '5 days ago',  content: 'Atoms consist of protons, neutrons, and electrons. Protons and neutrons form the nucleus. Electrons orbit in energy shells. Atomic number = number of protons.' },
];

export const mockProgress = {
  weeklyStudyTime: [
    { day: 'Mon', hours: 2 },
    { day: 'Tue', hours: 3.5 },
    { day: 'Wed', hours: 1 },
    { day: 'Thu', hours: 4 },
    { day: 'Fri', hours: 2.5 },
    { day: 'Sat', hours: 3 },
    { day: 'Sun', hours: 2.75 },
  ],
  modulesCompleted: { done: 26, total: 36 },
  quizzesCompleted: { done: 24, total: 40 },
  flashcardsReviewed: 348,
  overallProgress: 75,
  achievements: [
    { id: '1', title: '7 Days Streak',      desc: 'Keep it up!',           icon: '🔥', earned: true  },
    { id: '2', title: 'Quiz Master',        desc: 'Completed 50 quizzes',  icon: '🏆', earned: true  },
    { id: '3', title: 'Note Taker',         desc: 'Created 10 notes',      icon: '📝', earned: true  },
    { id: '4', title: 'Week Warrior',       desc: 'Maintain a 7-day streak',icon: '⚔️', earned: false },
    { id: '5', title: 'Dedicated',          desc: 'Study for 10 hours',    icon: '💪', earned: false },
    { id: '6', title: 'Scholar',            desc: 'Perfect 20 flashcards', icon: '🎓', earned: false },
  ],
  topSubjects: [
    { name: 'Biology',    percent: 45 },
    { name: 'Psychology', percent: 25 },
    { name: 'Physics',    percent: 20 },
    { name: 'Economics',  percent: 10 },
  ],
};

export const mockCalendarEvents = [
  { id: '1', title: 'Psychology Quiz',          date: 'May 16, 2026', time: '10:00 AM', type: 'quiz'    },
  { id: '2', title: 'Physics Assignment Due',   date: 'May 16, 2026', time: '10:00 AM', type: 'deadline'},
  { id: '3', title: 'Study Session: Biology',   date: 'May 20, 2026', time: '2:00 PM',  type: 'study'   },
];

export const mockBookmarks = [
  { id: '1', title: 'Photosynthesis Process',  subject: 'Biology',    module: 'Cell Structure', type: 'flashcard' },
  { id: '2', title: 'Memory Models Overview',  subject: 'Psychology', module: 'Chapter 3',      type: 'note'      },
  { id: '3', title: 'Market Segmentation',     subject: 'Marketing',  module: 'Module 2',       type: 'quiz'      },
  { id: '4', title: 'Atomic Structure Notes',  subject: 'Physics',    module: 'Atoms',          type: 'note'      },
  { id: '5', title: 'Cell Membrane Function',  subject: 'Biology',    module: 'Cell Structure', type: 'flashcard' },
];

export const mockModuleDetail = {
  id: '1',
  title: 'Biology: Cell Structure',
  subject: 'Biology',
  progress: 75,
  totalLessons: 8,
  completedLessons: 6,
  lastUpdated: '2 hours ago',
  description: 'A comprehensive study of cell structure and function, covering all major organelles, their roles, and how they work together to keep the cell alive.',
  subtopics: [
    { id: '1', title: 'Introduction to Cells',         completed: true,  duration: '15 min' },
    { id: '2', title: 'Cell Membrane & Transport',     completed: true,  duration: '20 min' },
    { id: '3', title: 'The Nucleus & DNA',             completed: true,  duration: '25 min' },
    { id: '4', title: 'Mitochondria & Energy',         completed: true,  duration: '20 min' },
    { id: '5', title: 'Ribosomes & Protein Synthesis', completed: true,  duration: '20 min' },
    { id: '6', title: 'Golgi Apparatus & Vesicles',    completed: true,  duration: '15 min' },
    { id: '7', title: 'Cell Division: Mitosis',        completed: false, duration: '30 min' },
    { id: '8', title: 'Cell Division: Meiosis',        completed: false, duration: '30 min' },
  ],
  keyConcepts: [
    'Cell membrane controls what enters and exits the cell',
    'Mitochondria is the powerhouse of the cell — produces ATP',
    'The nucleus contains DNA and controls cell activities',
    'Ribosomes synthesise proteins from amino acids',
    'The Golgi apparatus packages and ships proteins',
  ],
  quizCount: 3,
  flashcardCount: 120,
  noteCount: 2,
};
