import { useState, useEffect, useRef } from "react";

// ─── Asset imports ────────────────────────────────────────────────────────────
import icon1 from "../../assets/icon for number 1.png";
import icon2 from "../../assets/icon for number 2.png";
import icon3 from "../../assets/icon for number 3.png";
import icon4 from "../../assets/icon for number 4.png";

const features = [
  {
    id: 1,
    tag: "AI-Generated Study Materials",
    headline: "Turn Any Content Into Smart Study Tools",
    body: "From PDFs to lecture notes, generate clear summaries, flashcards, and quizzes in seconds—designed to help you understand and retain more.",
    image: icon1,
    flip: false,
  },
  {
    id: 2,
    tag: "Smart Flashcards",
    headline: "Learn faster with AI-powered revision cards tailored to your study needs.",
    body: "Turn your notes into powerful flashcards that help you understand, retain, and revise effortlessly.",
    image: icon2,
    flip: true,
  },
  {
    id: 3,
    tag: "Quizzes & Practice Tests",
    headline: "Test your knowledge with interactive quizzes designed to strengthen your understanding.",
    body: "Practice regularly, track your progress, and improve your mastery over time.",
    image: icon4,
    flip: false,
  },
  {
    id: 4,
    tag: "Progress Tracking",
    headline: "Understand how well you're performing with real-time learning progress insights.",
    body: "Stay motivated by visualizing your progress and identifying areas to improve.",
    image: icon3,
    flip: true,
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

// ─── Feature Row ─────────────────────────────────────────────────────────────

function FeatureRow({ feature, index }) {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center py-14 md:py-20 transition-all duration-700
        ${index < features.length - 1 ? "border-b border-purple-100" : ""}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Text — always first on mobile, alternates on desktop */}
      <div className={`${feature.flip ? "md:order-2" : "md:order-1"} order-1`}>
        <div className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-4 py-1.5 mb-4">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            {feature.id}
          </div>
          <span className="text-xs font-semibold text-purple-600">{feature.tag}</span>
        </div>

        <h2
          className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3 md:mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}
        >
          {feature.headline}
        </h2>

        <p className="text-gray-500 text-sm leading-relaxed max-w-md">{feature.body}</p>

        <button className="mt-6 inline-flex items-center gap-2 border-2 border-purple-600 text-purple-600 rounded-xl px-5 py-2.5 text-sm font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200">
          Try it out <span className="text-base">→</span>
        </button>
      </div>

      {/* Image — always second on mobile, alternates on desktop */}
      <div className={`${feature.flip ? "md:order-1" : "md:order-2"} order-2 flex items-center justify-center`}>
        <img
          src={feature.image}
          alt={feature.tag}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain drop-shadow-md"
        />
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function FeaturesPage() {
  return (
    <div className="font-sans bg-white min-h-screen">

      {/* Hero */}
      <section className="text-center px-4 sm:px-8 md:px-12 pt-16 md:pt-20 pb-10 bg-gradient-to-b from-purple-50/60 to-white">
        <div className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-4 py-1.5 mb-5 text-xs font-semibold text-purple-600 tracking-wide">
          ✦ Built for students, powered by AI
        </div>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.03em" }}
        >
          Explore StudyPath AI's
        </h1>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 bg-gradient-to-r from-purple-600 via-purple-400 to-blue-400 bg-clip-text text-transparent"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.03em" }}
        >
          Powerful Features
        </h1>
        <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-8 px-4">
          Everything you need to study smarter—not harder. Upload, generate, practice, and track all in one place.
        </p>
        <div className="flex gap-2 justify-center flex-wrap px-4">
          {["AI Study Materials", "Smart Flashcards", "Practice Quizzes", "Progress Tracking"].map((f, i) => (
            <div key={i} className="bg-white border-2 border-purple-100 rounded-full px-4 py-1.5 text-xs font-medium text-purple-600 shadow-sm">
              <span className="mr-1">{"①②③④"[i]}</span>{f}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 md:px-12">
        {features.map((feature, i) => (
          <FeatureRow key={feature.id} feature={feature} index={i} />
        ))}
      </section>

      {/* CTA */}
      <section className="mx-4 sm:mx-8 md:mx-12 mb-16 md:mb-20 rounded-3xl bg-gradient-to-br from-purple-900 via-purple-600 to-purple-400 p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 md:w-48 md:h-48 rounded-full bg-white/5" />
        <div className="absolute -bottom-16 -left-5 w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/5" />
        <p className="text-xs font-bold tracking-widest text-purple-200 uppercase mb-3">Ready to get started?</p>
        <h2
          className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}
        >
          Start learning smarter today.
        </h2>
        <p className="text-purple-200 text-sm md:text-base mb-7 max-w-sm mx-auto leading-relaxed">
          Join thousands of students already using StudyPath AI to ace their courses.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="bg-white text-purple-600 font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-purple-50 transition-colors">
            Get Started Free
          </button>
          <button className="bg-white/15 text-white font-semibold text-sm px-7 py-3.5 rounded-xl border border-white/30 hover:bg-white/25 transition-colors backdrop-blur-sm">
            See how it works
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-100 px-4 sm:px-8 md:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
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
        <div className="col-span-2 md:col-span-1">
          <p className="font-bold text-xs text-gray-900 mb-4">Subscribe</p>
          <div className="flex gap-2">
            <input
              placeholder="Email address"
              className="flex-1 min-w-0 px-3 py-2.5 rounded-lg border-2 border-purple-100 text-xs outline-none focus:border-purple-400 transition-colors text-gray-800"
            />
            <button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-3 py-2.5 rounded-lg text-sm flex-shrink-0">→</button>
          </div>
          <p className="text-xs text-purple-400 mt-3 leading-relaxed">
            Hello, we are StudyPath AI, trying to make an effort to put the right people for you to get the best results.
          </p>
        </div>
      </footer>

      {/* Bottom bar */}
      <div className="border-t border-purple-100 px-4 sm:px-8 md:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center flex-shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
          </div>
          <span className="font-bold text-sm text-gray-900">StudyPath AI</span>
        </div>
        <div className="flex gap-5">
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