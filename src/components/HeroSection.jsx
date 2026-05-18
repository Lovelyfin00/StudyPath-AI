export default function HeroSection() {
  return (
    <section id="use-cases" className="relative pt-32 pb-16 overflow-hidden">
      {/* Decorative background illustration */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {/* Faint grid dots */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#7c3aed" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* Soft glowing orbs */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-purple-200 rounded-full blur-2xl opacity-20" />
        <div className="absolute top-12 left-1/4 w-32 h-32 bg-violet-200 rounded-full blur-2xl opacity-20" />

        {/* Faint person silhouette illustration */}
        <svg
          className="absolute top-6 left-1/2 -translate-x-1/2 opacity-[0.05] w-64 h-40"
          viewBox="0 0 260 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="130" cy="80" rx="120" ry="70" stroke="#7c3aed" strokeWidth="1"/>
          <circle cx="100" cy="55" r="18" stroke="#7c3aed" strokeWidth="1.5"/>
          <path d="M75 110 Q100 88 125 100 Q145 110 160 95" stroke="#7c3aed" strokeWidth="1.5"/>
          <circle cx="165" cy="50" r="12" stroke="#7c3aed" strokeWidth="1.5"/>
          <path d="M150 90 Q165 72 180 85" stroke="#7c3aed" strokeWidth="1.5"/>
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center fade-in-up">
        <h1 className="text-4xl sm:text-5xl font-bold text-purple-600 mb-4 tracking-tight">
          Use Cases
        </h1>
        <p className="text-gray-500 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
          StudyPath AI helps students, educators, and professionals learn and create more efficiently.
        </p>
      </div>
    </section>
  )
}
