import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import studypathLogo from '../../assets/studypathailogo.png';

/**
 * OnboardingPage — Collects user profile info after signup
 * Steps:
 *  1. Course name
 *  2. Academic level
 *  3. Age
 *
 * Route: /onboarding
 *
 * After completion → redirects to /dashboard
 * When backend is ready → POST /api/user/onboarding with collected data
 */

const ACADEMIC_LEVELS = [
  { value: 'secondary',     label: 'Secondary School',  icon: '🏫', desc: 'High school or equivalent'           },
  { value: 'undergraduate', label: 'Undergraduate',     icon: '🎓', desc: "Bachelor's degree student"           },
  { value: 'postgraduate',  label: 'Postgraduate',      icon: '📚', desc: "Master's or PhD student"             },
  { value: 'professional',  label: 'Professional',      icon: '💼', desc: 'Working professional or self-learner' },
];

const TOTAL_STEPS = 3;

/* ── Step indicator ── */
const StepIndicator = ({ current }) => (
  <div className="flex items-center gap-2 mb-8">
    {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
      <div key={i} className="flex items-center gap-2">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all
            ${i < current
              ? 'bg-purple-600 text-white'
              : i === current
              ? 'bg-purple-600 text-white ring-4 ring-purple-100'
              : 'bg-gray-100 text-gray-400'
            }`}
        >
          {i < current ? '✓' : i + 1}
        </div>
        {i < TOTAL_STEPS - 1 && (
          <div className={`h-0.5 w-12 rounded-full transition-all ${i < current ? 'bg-purple-600' : 'bg-gray-100'}`} />
        )}
      </div>
    ))}
  </div>
);

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    courseName:    '',
    academicLevel: '',
    age:           '',
  });
  const [error, setError] = useState('');

  const updateData = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setError('');
  };

  const handleNext = () => {
    // Validate current step
    if (step === 0 && !data.courseName.trim()) {
      setError('Please enter your course name');
      return;
    }
    if (step === 1 && !data.academicLevel) {
      setError('Please select your academic level');
      return;
    }
    if (step === 2) {
      const age = parseInt(data.age);
      if (!data.age || isNaN(age) || age < 10 || age > 100) {
        setError('Please enter a valid age');
        return;
      }
    }

    if (step < TOTAL_STEPS - 1) {
      setStep((s) => s + 1);
      setError('');
    } else {
      handleFinish();
    }
  };

  const handleFinish = () => {
    /**
     * TODO: When backend is ready, replace this with:
     *
     * await fetch('/api/user/onboarding', {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify(data),
     * });
     */
    console.log('Onboarding data:', data);
    navigate('/dashboard');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleNext();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">

      {/* Card */}
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={studypathLogo} alt="StudyPath AI" className="h-10 object-contain" />
        </div>

        {/* Step indicator */}
        <div className="flex justify-center">
          <StepIndicator current={step} />
        </div>

        {/* ── Step 1: Course name ── */}
        {step === 0 && (
          <div className="flex flex-col gap-4">
            <div className="text-center mb-2">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {"What's your course called?"}
              </h1>
              <p className="text-sm text-gray-500">
                Tell us what you are studying so we can personalise your experience
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700">Course Name</label>
              <input
                type="text"
                value={data.courseName}
                onChange={(e) => updateData('courseName', e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g. Computer Science, Medicine, Law..."
                autoFocus
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder:text-gray-400"
              />
            </div>
          </div>
        )}

        {/* ── Step 2: Academic level ── */}
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <div className="text-center mb-2">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {"What's your academic level?"}
              </h1>
              <p className="text-sm text-gray-500">
                This helps us tailor the content to your level
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ACADEMIC_LEVELS.map((level) => (
                <button
                  key={level.value}
                  onClick={() => updateData('academicLevel', level.value)}
                  className={`flex items-center gap-3 p-4 rounded-2xl border-2 text-left transition-all
                    ${data.academicLevel === level.value
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-100 bg-white hover:border-purple-200 hover:bg-purple-50/50'
                    }`}
                >
                  <span className="text-2xl flex-shrink-0">{level.icon}</span>
                  <div>
                    <p className={`text-sm font-bold ${data.academicLevel === level.value ? 'text-purple-700' : 'text-gray-900'}`}>
                      {level.label}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{level.desc}</p>
                  </div>
                  {data.academicLevel === level.value && (
                    <span className="ml-auto text-purple-600 font-bold flex-shrink-0">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Step 3: Age ── */}
        {step === 2 && (
          <div className="flex flex-col gap-4">
            <div className="text-center mb-2">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                How old are you?
              </h1>
              <p className="text-sm text-gray-500">
                Your age helps us make sure content is appropriate for you
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700">Age</label>
              <input
                type="number"
                value={data.age}
                onChange={(e) => updateData('age', e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g. 20"
                min={10}
                max={100}
                autoFocus
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder:text-gray-400"
              />
            </div>

            {/* Summary of previous answers */}
            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4 mt-2">
              <p className="text-xs font-bold text-purple-700 mb-2 uppercase tracking-wide">Your Profile So Far</p>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Course</span>
                  <span className="text-xs font-semibold text-gray-800">{data.courseName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Level</span>
                  <span className="text-xs font-semibold text-gray-800 capitalize">{data.academicLevel}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Error message */}
        {error && (
          <p className="text-sm text-red-500 text-center mt-2">{error}</p>
        )}

        {/* Navigation buttons */}
        <div className="flex items-center gap-3 mt-6">
          {step > 0 && (
            <button
              onClick={() => { setStep((s) => s - 1); setError(''); }}
              className="flex-1 py-3.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
            >
              ← Back
            </button>
          )}
          <button
            onClick={handleNext}
            className="flex-1 py-3.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-semibold transition-colors"
          >
            {step === TOTAL_STEPS - 1 ? "Let's Go 🚀" : 'Continue →'}
          </button>
        </div>

        {/* Step text */}
        <p className="text-center text-xs text-gray-400 mt-4">
          Step {step + 1} of {TOTAL_STEPS}
        </p>

      </div>
    </div>
  );
};

export default OnboardingPage;
