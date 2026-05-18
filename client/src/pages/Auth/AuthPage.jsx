import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import studypathLogo from '../../assets/studypathailogo.png';

/**
 * AuthPage — Handles all authentication screens in one component
 * Screens: signin | signup | forgot | otp | reset
 *
 * Usage in App.jsx:
 *   <Route path="/signin" element={<AuthPage initialScreen="signin" />} />
 *   <Route path="/signup" element={<AuthPage initialScreen="signup" />} />
 */

/* ─── Fade animation ─── */
const FadeStyle = () => (
  <style>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fade-in { animation: fadeIn 0.6s ease; }
  `}</style>
);

/* ─── Carousel quotes ─── */
const SLIDES = [
  {
    quote: "The beautiful thing about learning is that nobody can take it away from you.",
    author: "B.B. King",
  },
  {
    quote: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
  },
  {
    quote: "The more that you read, the more things you will know. The more that you learn, the more places you will go.",
    author: "Dr. Seuss",
  },
];

/* ─── Shared input component ─── */
const Input = ({ label, type = 'text', placeholder, value, onChange, rightEl }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm text-gray-500">{label}</label>
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder:text-gray-400"
      />
      {rightEl && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
          {rightEl}
        </span>
      )}
    </div>
  </div>
);

/* ─── Google button ─── */
const GoogleBtn = () => (
  <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg py-3 bg-white hover:bg-gray-50 transition-colors">
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      <path fill="none" d="M0 0h48v48H0z"/>
    </svg>
    <span className="text-sm font-semibold text-gray-700">Continue with Google</span>
  </button>
);

/* ─── Or divider ─── */
const OrDivider = () => (
  <div className="flex items-center gap-3">
    <div className="flex-1 h-px bg-gray-200" />
    <span className="text-sm text-gray-400">Or</span>
    <div className="flex-1 h-px bg-gray-200" />
  </div>
);

/* ─── Eye icon ─── */
const EyeIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
    <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

/* ─── Purple right panel with quote carousel ─── */
const PurplePanel = ({ slide, slideIndex, total, onPrev, onNext }) => (
  <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 p-12 relative overflow-hidden">
    {/* Background blobs */}
    <div className="absolute top-0 right-0 w-80 h-80 bg-purple-400 opacity-30 rounded-full -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-800 opacity-40 rounded-full translate-y-1/2 -translate-x-1/2" />

    {/* Quote card — key forces re-render + fade on slide change */}
    <div className="flex-1 flex items-center justify-center relative z-10">
      <div key={slideIndex} className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-sm fade-in">
        <p className="text-white/50 text-6xl font-serif leading-none mb-2">"</p>
        <p className="text-white font-semibold text-xl leading-snug mb-6">
          {slide.quote}
        </p>
        <p className="text-purple-200 text-sm font-medium">— {slide.author}</p>
      </div>
    </div>

    {/* Navigation */}
    <div className="relative z-10">
      <div className="flex items-center justify-between">
        <button onClick={onPrev} className="text-white text-2xl hover:opacity-70 transition-opacity">‹</button>
        <div className="flex gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${i === slideIndex ? 'bg-white' : 'bg-white/40'}`}
            />
          ))}
        </div>
        <button onClick={onNext} className="text-white text-2xl hover:opacity-70 transition-opacity">›</button>
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════
   MAIN AUTH PAGE COMPONENT
══════════════════════════════════════════ */
const AuthPage = ({ initialScreen = 'signin' }) => {
  const [screen, setScreen] = useState(initialScreen);
  const [slideIndex, setSlideIndex] = useState(0);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpRefs = [useRef(), useRef(), useRef(), useRef()];

  const slide = SLIDES[slideIndex];
  const prevSlide = () => setSlideIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const nextSlide = () => setSlideIndex((i) => (i + 1) % SLIDES.length);

  // Auto-advance slides every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((i) => (i + 1) % SLIDES.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  // OTP input — auto jumps to next box
  const handleOtp = (val, i) => {
    const digits = [...otp];
    digits[i] = val.slice(-1);
    setOtp(digits);
    if (val && i < 3) otpRefs[i + 1].current.focus();
  };

  const isCentered = ['forgot', 'otp', 'reset'].includes(screen);

  /* ── Centered card screens (forgot / otp / reset) ── */
  if (isCentered) {
    return (
      <>
        <FadeStyle />
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-purple-50 rounded-3xl p-10 flex flex-col gap-6">

            {/* Logo */}
            <div className="flex justify-center">
              <img src={studypathLogo} alt="StudyPath AI" className="h-14 object-contain" />
            </div>

            {/* ── Forgot: enter email ── */}
            {screen === 'forgot' && (
              <>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Password reset</h2>
                  <p className="text-sm text-gray-500">Kindly fill in your registered email below to reset password</p>
                </div>
                <Input label="Email Address" type="email" placeholder="Johndoe@gmail.com" />
                <button
                  onClick={() => setScreen('otp')}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3.5 rounded-xl transition-colors"
                >
                  Send code
                </button>
                <p className="text-center text-sm text-gray-600">
                  {"Don't have an account? "}
                  <button onClick={() => setScreen('signup')} className="text-purple-600 font-semibold hover:underline">Sign up</button>
                </p>
                <OrDivider />
                <GoogleBtn />
              </>
            )}

            {/* ── OTP: 4-digit code ── */}
            {screen === 'otp' && (
              <>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Password reset</h2>
                  <p className="text-sm text-gray-500">Kindly put in the 4-digit code sent to your email</p>
                </div>
                <div className="flex gap-4 justify-center">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      ref={otpRefs[i]}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtp(e.target.value, i)}
                      className="w-16 h-16 text-center text-2xl font-bold border-0 rounded-2xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-800"
                    />
                  ))}
                </div>
                <button
                  onClick={() => setScreen('reset')}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3.5 rounded-xl transition-colors"
                >
                  Next
                </button>
                <button
                  onClick={() => setScreen('forgot')}
                  className="text-center text-purple-600 font-semibold text-sm underline hover:opacity-70"
                >
                  Resend
                </button>
              </>
            )}

            {/* ── Reset: new password ── */}
            {screen === 'reset' && (
              <>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Password reset</h2>
                  <p className="text-sm text-gray-500">Kindly create a new password</p>
                </div>
                <Input
                  label="Password"
                  type={showPass ? 'text' : 'password'}
                  placeholder="••••••••••••••••••••••••"
                  rightEl={<span onClick={() => setShowPass(!showPass)}><EyeIcon /></span>}
                />
                <Input
                  label="Confirm Password"
                  type={showConfirmPass ? 'text' : 'password'}
                  placeholder="••••••••••••••••••••••••"
                  rightEl={<span onClick={() => setShowConfirmPass(!showConfirmPass)}><EyeIcon /></span>}
                />
                <button
                  onClick={() => setScreen('signin')}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3.5 rounded-xl transition-colors"
                >
                  Confirm
                </button>
                <p className="text-center text-sm text-gray-600">
                  {"Don't have an account? "}
                  <button onClick={() => setScreen('signup')} className="text-purple-600 font-semibold hover:underline">Sign up</button>
                </p>
                <OrDivider />
                <GoogleBtn />
              </>
            )}

          </div>
        </div>
      </>
    );
  }

  /* ── Split screens (signin / signup) ── */
  return (
    <>
      <FadeStyle />
      <div className="min-h-screen grid lg:grid-cols-2">

        {/* Left: form */}
        <div className="flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-sm flex flex-col gap-5">

            {/* Logo */}
            <img src={studypathLogo} alt="StudyPath AI" className="h-14 object-contain self-start" />

            {/* ── Sign In ── */}
            {screen === 'signin' && (
              <>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome Back 👋</h2>
                  <p className="text-sm text-gray-500">Kindly fill in your details below to log in</p>
                </div>
                <Input label="Email Address" type="email" placeholder="Johndoe@gmail.com" />
                <Input
                  label="Password"
                  type={showPass ? 'text' : 'password'}
                  placeholder="••••••••••••••••"
                  rightEl={<span onClick={() => setShowPass(!showPass)}><EyeIcon /></span>}
                />
                <div className="text-right">
                  <button onClick={() => setScreen('forgot')} className="text-purple-600 text-sm font-medium hover:underline">
                    Forgot password?
                  </button>
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3.5 rounded-xl transition-colors">
                  Log in
                </button>
                <p className="text-center text-sm text-gray-600">
                  {"Don't have an account? "}
                  <button onClick={() => setScreen('signup')} className="text-purple-600 font-semibold hover:underline">Sign up</button>
                </p>
                <OrDivider />
                <GoogleBtn />
              </>
            )}

            {/* ── Sign Up ── */}
            {screen === 'signup' && (
              <>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    Welcome to <span className="text-purple-600">StudyPath AI</span> 👋
                  </h2>
                  <p className="text-sm text-gray-500">Kindly fill in your details below to create an account</p>
                </div>
                <Input label="Email Address" type="email" placeholder="Johndoe@gmail.com" />
                <Input
                  label="Password"
                  type={showPass ? 'text' : 'password'}
                  placeholder="••••••••••••••••"
                  rightEl={<span onClick={() => setShowPass(!showPass)}><EyeIcon /></span>}
                />
                <Input
                  label="Confirm Password"
                  type={showConfirmPass ? 'text' : 'password'}
                  placeholder="••••••••••••••••"
                  rightEl={<span onClick={() => setShowConfirmPass(!showConfirmPass)}><EyeIcon /></span>}
                />
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3.5 rounded-xl transition-colors">
                  Continue
                </button>
                <p className="text-center text-sm text-gray-600">
                  {"Already have an account? "}
                  <button onClick={() => setScreen('signin')} className="text-purple-600 font-semibold hover:underline">Login</button>
                </p>
                <OrDivider />
                <GoogleBtn />
              </>
            )}

          </div>
        </div>

        {/* Right: purple panel */}
        <PurplePanel
          slide={slide}
          slideIndex={slideIndex}
          total={SLIDES.length}
          onPrev={prevSlide}
          onNext={nextSlide}
        />

      </div>
    </>
  );
};

export default AuthPage;