export default function CTASection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="fade-in-up stagger-7 relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-purple-600 to-violet-700 px-8 py-12 sm:px-12 sm:py-14">
        {/* Decorative background circles */}
        <div className="absolute -top-8 -right-8 w-48 h-48 bg-white/10 rounded-full blur-xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-violet-500/30 rounded-full blur-xl pointer-events-none" aria-hidden="true" />

        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Text */}
          <div className="max-w-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
              See how StudyPath AI can work for you
            </h2>
            <p className="text-purple-200 text-sm">
              Join thousands of learners already using StudyPath AI to achieve their goals.
            </p>
          </div>

          {/* Button */}
          <a
            href="/register"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-purple-700 text-sm font-bold hover:bg-purple-50 transition-colors duration-200 shadow-md group"
          >
            Get Started Free
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
