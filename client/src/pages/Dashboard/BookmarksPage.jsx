import { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import { mockBookmarks } from '../../services/mockData';

/**
 * BookmarksPage — All your saved content in one place
 */

const FILTERS = ['All', 'Flashcards', 'Notes', 'Quizzes'];

const typeStyle = (type) => {
  const map = {
    flashcard: 'bg-purple-100 text-purple-700',
    note:      'bg-blue-100 text-blue-700',
    quiz:      'bg-green-100 text-green-700',
  };
  return map[type] || 'bg-gray-100 text-gray-700';
};

const typeIcon = (type) => {
  const map = { flashcard: '🃏', note: '📄', quiz: '📝' };
  return map[type] || '🔖';
};

const BookmarksPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = mockBookmarks.filter((b) => {
    const matchesFilter = activeFilter === 'All' || b.type === activeFilter.toLowerCase().slice(0, -1);
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase()) ||
                          b.subject.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Bookmarks</h1>
          <p className="text-sm text-gray-500 mt-1">All your saved content in one place</p>
        </div>
      </div>

      {/* Search + filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
          <input
            type="text"
            placeholder="Search bookmarks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>
        <div className="flex gap-1 bg-gray-100 p-1 rounded-xl">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors
                ${activeFilter === f
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Bookmarks grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((bookmark) => (
            <div
              key={bookmark.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow flex flex-col gap-3"
            >
              {/* Icon + type */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-lg">
                  {typeIcon(bookmark.type)}
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeStyle(bookmark.type)}`}>
                  {bookmark.type}
                </span>
              </div>

              {/* Title + meta */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{bookmark.title}</h3>
                <p className="text-xs text-gray-400">{bookmark.subject} · {bookmark.module}</p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-1 border-t border-gray-50">
                <button className="flex-1 py-2 text-xs font-semibold text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                  Open
                </button>
                <button className="flex-1 py-2 text-xs font-semibold text-red-400 hover:bg-red-50 rounded-lg transition-colors">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-3">🔖</p>
          <p className="font-medium">No bookmarks found</p>
          <p className="text-sm mt-1">Save items while studying to see them here</p>
        </div>
      )}
    </DashboardLayout>
  );
};

export default BookmarksPage;
