import { useState, useEffect, useRef } from "react";

const features = [
  {
    id: 1,
    tag: "AI-Generated Study Materials",
    headline: "Turn Any Content Into Smart Study Tools",
    body: "From PDFs to lecture notes, generate clear summaries, flashcards, and quizzes in seconds—designed to help you understand and retain more.",
    visual: "upload",
    flip: false,
  },
  {
    id: 2,
    tag: "Smart Flashcards",
    headline: "Learn faster with AI-powered revision cards tailored to your study needs.",
    body: "Turn your notes into powerful flashcards that help you understand, retain, and revise effortlessly.",
    visual: "flashcards",
    flip: true,
  },
  {
    id: 3,
    tag: "Quizzes & Practice Tests",
    headline: "Test your knowledge with interactive quizzes designed to strengthen your understanding.",
    body: "Practice regularly, track your progress, and improve your mastery over time.",
    visual: "quiz",
    flip: false,
  },
  {
    id: 4,
    tag: "Progress Tracking",
    headline: "Understand how well you're performing with real-time learning progress insights.",
    body: "Stay motivated by visualizing your progress and identifying areas to improve.",
    visual: "progress",
    flip: true,
  },
];

// ─── Visuals ─────────────────────────────────────────────────────────────────

function UploadVisual() {
  const [active, setActive] = useState(false);
  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`rounded-3xl p-8 flex flex-col items-center gap-5 cursor-pointer border-2 border-dashed transition-all duration-300 min-h-64 justify-center
        bg-gradient-to-br from-purple-50 to-blue-50
        ${active ? "border-purple-500" : "border-purple-200"}`}
    >
      <div
        className={`rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${active ? "bg-purple-600" : "bg-white"}`}
        style={{ width: 72, height: 72 }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
          stroke={active ? "#fff" : "#7c3aed"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="12" y1="18" x2="12" y2="12"/>
          <line x1="9" y1="15" x2="15" y2="15"/>
        </svg>
      </div>

      <div className="text-center">
        <p className="font-semibold text-purple-900 text-sm mb-1">
          {active ? "Drop your PDF here" : "Upload your PDF"}
        </p>
        <p className="text-purple-400 text-xs">Drag & drop or click to browse</p>
      </div>

      <div className="flex gap-2 mt-1">
        {["Summary", "Flashcards", "Quiz"].map((label, i) => (
          <div
            key={i}
            className="bg-white rounded-lg px-3 py-1.5 text-xs font-semibold text-purple-600 shadow-md transition-transform duration-300"
            style={{ transform: active ? `translateY(${-i * 3}px)` : "none", transitionDelay: `${i * 50}ms` }}
          >
            ✦ {label}
          </div>
        ))}
      </div>
    </div>
  );
}

function FlashcardVisual() {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        onClick={() => setFlipped(f => !f)}
        className="w-full cursor-pointer"
        style={{ perspective: 1000, minHeight: 200 }}
      >
        <div style={{
          position: "relative", width: "100%", height: 200,
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
        }}>
          {/* Front */}
          <div
            className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-7 gap-3 shadow-xl"
            style={{ backfaceVisibility: "hidden", background: "linear-gradient(135deg, #7c3aed, #a78bfa)" }}
          >
            <span className="text-xs font-bold tracking-widest text-purple-200 uppercase">Question</span>
            <p className="text-lg font-semibold text-white text-center leading-relaxed">
              What is the powerhouse of the cell?
            </p>
            <span className="text-xs text-purple-300 mt-2">Tap to reveal answer →</span>
          </div>
          {/* Back */}
          <div
            className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-7 gap-3 bg-white border-2 border-purple-100 shadow-xl"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <span className="text-xs font-bold tracking-widest text-purple-400 uppercase">Answer</span>
            <p className="text-2xl font-bold text-purple-900 text-center">The Mitochondria</p>
            <p className="text-sm text-purple-400 text-center leading-relaxed">
              Mitochondria produce ATP through cellular respiration
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-1.5">
        {[true, false, false].map((a, i) => (
          <div key={i} className={`h-2 rounded-full transition-all duration-300 ${a ? "w-6 bg-purple-600" : "w-2 bg-purple-200"}`} />
        ))}
      </div>
      <p className="text-xs text-purple-400">12 cards in this deck</p>
    </div>
  );
}

function QuizVisual() {
  const [selected, setSelected] = useState(null);
  const options = [
    { label: "Mitochondria", correct: true },
    { label: "Nucleus", correct: false },
    { label: "Ribosome", correct: false },
    { label: "Golgi apparatus", correct: false },
  ];

  return (
    <div className="bg-white rounded-2xl p-7 shadow-lg border border-purple-50">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          ?
        </div>
        <span className="text-sm font-semibold text-purple-900">Question 2 of 10</span>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed mb-5">
        Which organelle is responsible for energy production in eukaryotic cells?
      </p>

      <div className="flex flex-col gap-2.5">
        {options.map((opt, i) => {
          const isSelected = selected === i;
          const showResult = selected !== null;
          let cls = "border-purple-100 bg-purple-50 text-gray-700";
          if (showResult && isSelected && opt.correct)      cls = "border-emerald-400 bg-emerald-50 text-emerald-800 font-semibold";
          else if (showResult && isSelected && !opt.correct) cls = "border-red-400 bg-red-50 text-red-800 font-semibold";
          else if (showResult && opt.correct)               cls = "border-emerald-400 bg-emerald-50 text-emerald-800";

          return (
            <div
              key={i}
              onClick={() => selected === null && setSelected(i)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-sm transition-all duration-200 ${cls}
                ${selected === null ? "cursor-pointer hover:border-purple-300" : "cursor-default"}`}
            >
              <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center
                ${showResult && (isSelected || opt.correct) ? "border-current bg-current" : "border-current"}`}>
                {showResult && opt.correct && (
                  <svg width="10" height="10" viewBox="0 0 10 10">
                    <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  </svg>
                )}
                {showResult && isSelected && !opt.correct && (
                  <span className="text-white text-xs font-bold leading-none">✕</span>
                )}
              </div>
              {opt.label}
            </div>
          );
        })}
      </div>

      {selected !== null && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => setSelected(null)}
            className="bg-gradient-to-r from-purple-600 to-purple-400 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            Next question →
          </button>
        </div>
      )}
    </div>
  );
}

function ProgressVisual() {
  const subjects = [
    { name: "Biology",     pct: 78, bar: "bg-purple-500", label: "text-purple-600" },
    { name: "Chemistry",   pct: 55, bar: "bg-blue-500",   label: "text-blue-600"   },
    { name: "Mathematics", pct: 92, bar: "bg-emerald-500",label: "text-emerald-600"},
    { name: "History",     pct: 41, bar: "bg-amber-500",  label: "text-amber-600"  },
  ];

  return (
    <div className="bg-white rounded-2xl p-7 shadow-lg border border-purple-50">
      <div className="flex justify-between items-center mb-6">
        <span className="font-bold text-purple-900 text-sm">Your progress</span>
        <span className="text-xs font-semibold text-purple-400">This week</span>
      </div>

      <div className="flex flex-col gap-4">
        {subjects.map((s, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1.5">
              <span className="text-sm text-gray-600 font-medium">{s.name}</span>
              <span className={`text-sm font-bold ${s.label}`}>{s.pct}%</span>
            </div>
            <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${s.bar} transition-all duration-1000`} style={{ width: `${s.pct}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        </div>
        <div>
          <p className="text-sm font-bold text-purple-900">7-day streak 🔥</p>
          <p className="text-xs text-purple-400">Keep it up! You're in the top 15%</p>
        </div>
      </div>
    </div>
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const visuals = { upload: UploadVisual, flashcards: FlashcardVisual, quiz: QuizVisual, progress: ProgressVisual };

function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

// ─── Feature Row ─────────────────────────────────────────────────────────────

function FeatureRow({ feature, index }) {
  const ref = useRef(null);
  const visible = useInView(ref);
  const Visual = visuals[feature.visual];

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 gap-16 items-center py-20 transition-all duration-700
        ${index < features.length - 1 ? "border-b border-purple-100" : ""}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Text */}
      <div className={feature.flip ? "order-2" : "order-1"}>
        <div className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-4 py-1.5 mb-5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            {feature.id}
          </div>
          <span className="text-xs font-semibold text-purple-600">{feature.tag}</span>
        </div>

        <h2
          className="text-3xl font-bold text-gray-900 leading-tight mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}
        >
          {feature.headline}
        </h2>

        <p className="text-gray-500 text-sm leading-relaxed max-w-md">{feature.body}</p>

        <button className="mt-7 inline-flex items-center gap-2 border-2 border-purple-600 text-purple-600 rounded-xl px-5 py-2.5 text-sm font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200">
          Try it out <span className="text-base">→</span>
        </button>
      </div>

      {/* Visual */}
      <div className={feature.flip ? "order-1" : "order-2"}>
        <Visual />
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function FeaturesPage() {
  return (
    <div className="font-sans bg-white min-h-screen">

      {/* Hero */}
      <section className="text-center px-12 pt-20 pb-10 bg-gradient-to-b from-purple-50/60 to-white">
        <div className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-5 py-1.5 mb-6 text-xs font-semibold text-purple-600 tracking-wide">
          ✦ Built for students, powered by AI
        </div>
        <h1
          className="text-5xl font-bold text-gray-900 leading-tight mb-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.03em" }}
        >
          Explore StudyPath AI's
        </h1>
        <h1
          className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-purple-600 via-purple-400 to-blue-400 bg-clip-text text-transparent"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.03em" }}
        >
          Powerful Features
        </h1>
        <p className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed mb-10">
          Everything you need to study smarter—not harder. Upload, generate, practice, and track all in one place.
        </p>
        <div className="flex gap-2.5 justify-center flex-wrap">
          {["AI Study Materials", "Smart Flashcards", "Practice Quizzes", "Progress Tracking"].map((f, i) => (
            <div key={i} className="bg-white border-2 border-purple-100 rounded-full px-5 py-2 text-xs font-medium text-purple-600 shadow-sm">
              <span className="mr-1.5">{"①②③④"[i]}</span>{f}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-12">
        {features.map((feature, i) => (
          <FeatureRow key={feature.id} feature={feature} index={i} />
        ))}
      </section>

      {/* CTA */}
      <section className="mx-12 mb-20 rounded-3xl bg-gradient-to-br from-purple-900 via-purple-600 to-purple-400 p-16 text-center relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5" />
        <div className="absolute -bottom-16 -left-5 w-40 h-40 rounded-full bg-white/5" />
        <p className="text-xs font-bold tracking-widest text-purple-200 uppercase mb-4">Ready to get started?</p>
        <h2
          className="text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}
        >
          Start learning smarter today.
        </h2>
        <p className="text-purple-200 text-base mb-8 max-w-sm mx-auto leading-relaxed">
          Join thousands of students already using StudyPath AI to ace their courses.
        </p>
        <div className="flex gap-3 justify-center">
          <button className="bg-white text-purple-600 font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-purple-50 transition-colors">
            Get Started Free
          </button>
          <button className="bg-white/15 text-white font-semibold text-sm px-7 py-3.5 rounded-xl border border-white/30 hover:bg-white/25 transition-colors backdrop-blur-sm">
            See how it works
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-100 px-12 py-12 grid grid-cols-4 gap-10">
        {[
          { title: "Product", links: ["Autocapture", "Data Governance", "Virtual Events", "Virtual Users", "Behavioral Analytics", "Connect"] },
          { title: "Explore",  links: ["Resources", "Blog", "Documents"] },
          { title: "Company", links: ["About us", "Partners", "Customers", "Contact us"] },
        ].map(col => (
          <div key={col.title}>
            <p className="font-bold text-xs text-gray-900 mb-4">{col.title}</p>
            <div className="flex flex-col gap-2.5">
              {col.links.map(l => (
                <a key={l} href="#" className="text-xs text-gray-500 hover:text-gray-800 transition-colors">{l}</a>
              ))}
            </div>
          </div>
        ))}
        <div>
          <p className="font-bold text-xs text-gray-900 mb-4">Subscribe</p>
          <div className="flex gap-2">
            <input
              placeholder="Email address"
              className="flex-1 px-3 py-2.5 rounded-lg border-2 border-purple-100 text-xs outline-none focus:border-purple-400 transition-colors text-gray-800"
            />
            <button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-3 py-2.5 rounded-lg text-sm">→</button>
          </div>
          <p className="text-xs text-purple-400 mt-3 leading-relaxed">
            Hello, we are StudyPath AI, trying to make an effort to put the right people for you to get the best results.
          </p>
        </div>
      </footer>

      {/* Bottom bar */}
      <div className="border-t border-purple-100 px-12 py-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center flex-shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
          </div>
          <span className="font-bold text-sm text-gray-900">StudyPath AI</span>
        </div>
        <div className="flex gap-6">
          {["Terms", "Privacy", "Cookies"].map(l => (
            <a key={l} href="#" className="text-xs text-gray-500 hover:text-gray-800 transition-colors">{l}</a>
          ))}
        </div>
        <div className="flex gap-2">
          {["in", "f"].map(icon => (
            <div key={icon} className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-xs font-bold text-purple-600 cursor-pointer hover:bg-purple-100 transition-colors">
              {icon}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}