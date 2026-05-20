import { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import { mockNotes } from '../../services/mockData';

/**
 * NotesPage — All your notes organised in one place
 * Two views: list | note detail
 */

const subjectColor = (subject) => {
  const map = {
    Biology:    'bg-green-100 text-green-700',
    Psychology: 'bg-purple-100 text-purple-700',
    Marketing:  'bg-blue-100 text-blue-700',
    Physics:    'bg-orange-100 text-orange-700',
  };
  return map[subject] || 'bg-gray-100 text-gray-700';
};

const NotesPage = () => {
  const [selectedNote, setSelectedNote] = useState(mockNotes[0]);
  const [search, setSearch] = useState('');

  const filtered = mockNotes.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase()) ||
    n.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notes</h1>
          <p className="text-sm text-gray-500 mt-1">All your notes organised in one place</p>
        </div>
        <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors">
          <span>+</span> New Note
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Notes list */}
        <div className="flex flex-col gap-3">
          {/* Search */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
            <input
              type="text"
              placeholder="Search notes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          {/* Note cards */}
          {filtered.map((note) => (
            <button
              key={note.id}
              onClick={() => setSelectedNote(note)}
              className={`text-left p-4 rounded-2xl border transition-all
                ${selectedNote?.id === note.id
                  ? 'bg-purple-50 border-purple-200'
                  : 'bg-white border-gray-100 hover:border-purple-200'
                }`}
            >
              <h3 className="text-sm font-bold text-gray-900 mb-1">{note.title}</h3>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${subjectColor(note.subject)}`}>
                  {note.subject}
                </span>
                <span className="text-xs text-gray-400">{note.createdAt}</span>
              </div>
            </button>
          ))}

          {filtered.length === 0 && (
            <p className="text-sm text-gray-400 text-center py-8">No notes found</p>
          )}
        </div>

        {/* Note detail */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          {selectedNote ? (
            <>
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-xl font-bold text-gray-900">{selectedNote.title}</h2>
                <button className="text-xs text-gray-400 hover:text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5">
                  Edit
                </button>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${subjectColor(selectedNote.subject)}`}>
                  {selectedNote.subject}
                </span>
                <span className="text-xs text-gray-400">{selectedNote.createdAt}</span>
              </div>
              <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedNote.content}
              </div>
            </>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400">
              <div className="text-center">
                <p className="text-4xl mb-3">📄</p>
                <p className="font-medium">Select a note to read</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </DashboardLayout>
  );
};

export default NotesPage;
