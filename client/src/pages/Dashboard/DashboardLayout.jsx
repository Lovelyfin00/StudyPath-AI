import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import studypathLogo from '../../assets/studypathailogo.png';

/**
 * DashboardLayout — Shared layout for all dashboard pages
 * Includes: left sidebar, top bar, main content area
 * Wrap every dashboard page with this component
 *
 * Usage:
 *   <DashboardLayout>
 *     <YourPageContent />
 *   </DashboardLayout>
 */

const NAV_ITEMS = [
  { label: 'Dashboard',  href: '/dashboard',            icon: '🏠' },
  { label: 'Modules',    href: '/dashboard/modules',     icon: '📚' },
  { label: 'Quizzes',    href: '/dashboard/quizzes',     icon: '📝' },
  { label: 'Flashcards', href: '/dashboard/flashcards',  icon: '🃏' },
  { label: 'Notes',      href: '/dashboard/notes',       icon: '📄' },
  { label: 'Progress',   href: '/dashboard/progress',    icon: '📈' },
  { label: 'Calendar',   href: '/dashboard/calendar',    icon: '📅' },
  { label: 'Bookmarks',  href: '/dashboard/bookmarks',   icon: '🔖' },
];

const DashboardLayout = ({ children }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [uploadOpen, setUploadOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* ── Sidebar ── */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-56 bg-white border-r border-gray-100 flex flex-col
        transform transition-transform duration-200
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0 lg:flex
      `}>

        {/* Logo */}
        <div className="p-5 border-b border-gray-100">
          <Link to="/">
            <img src={studypathLogo} alt="StudyPath AI" className="h-9 object-contain" />
          </Link>
        </div>

        {/* Upload button */}
        <div className="p-4">
          <button
            onClick={() => setUploadOpen(true)}
            className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-colors"
          >
            <span className="text-base">+</span> Upload Material
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 pb-4 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const active = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium mb-1 transition-colors
                  ${active
                    ? 'bg-purple-50 text-purple-700 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Upgrade to Pro banner */}
        <div className="m-4 bg-purple-50 border border-purple-100 rounded-2xl p-4">
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
            <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: '85%' }} />
          </div>
          <p className="text-xs text-gray-600 font-medium mb-1">85% of free plan used</p>
          <p className="text-xs text-gray-500 mb-3">Unlock unlimited uploads, AI summaries, and more.</p>
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold py-2 rounded-lg transition-colors">
            Upgrade Now
          </button>
        </div>

        {/* User profile */}
        <div className="p-4 border-t border-gray-100 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold text-sm flex-shrink-0">
            A
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-800 truncate">Alex Johnson</p>
            <p className="text-xs text-gray-500 truncate">alex.j@email.com</p>
          </div>
        </div>

      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Main area ── */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top bar */}
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center gap-4 sticky top-0 z-20">

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-gray-500 hover:text-gray-800"
            onClick={() => setSidebarOpen(true)}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          </button>

          {/* Search bar */}
          <div className="flex-1 relative max-w-lg">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder:text-gray-400"
            />
          </div>

          {/* Right: notification + avatar */}
          <div className="flex items-center gap-3 ml-auto">
            <button className="relative text-gray-500 hover:text-gray-800">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-600 rounded-full" />
            </button>
            <Link to="/dashboard/profile">
              <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold text-sm">
                A
              </div>
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>

      </div>

      {/* ── Upload Modal ── */}
      {uploadOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Upload Material</h2>
            <p className="text-sm text-gray-500 mb-6">Add your file and let AI work its magic</p>

            {/* Drop zone */}
            <div className="border-2 border-dashed border-purple-300 rounded-2xl p-10 text-center bg-purple-50 mb-4 cursor-pointer hover:bg-purple-100 transition-colors">
              <p className="text-3xl mb-2">📂</p>
              <p className="text-sm font-medium text-gray-700">Drag and drop your files here or <span className="text-purple-600 underline">browse</span></p>
              <p className="text-xs text-gray-400 mt-1">Support PDF, DOCX, PPT, TXT</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setUploadOpen(false)}
                className="flex-1 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-semibold transition-colors">
                Upload
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default DashboardLayout;
