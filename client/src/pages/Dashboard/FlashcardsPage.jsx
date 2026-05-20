import { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import { mockFlashcardDecks, mockFlashcards } from '../../services/mockData';

/**
 * FlashcardsPage — Create, organise and master your topics
 * Two views:
 *  1. Decks list
 *  2. Study mode (when a deck is selected)
 */

const RATINGS = [
  { label: 'Hard',   emoji: '😓', color: 'bg-red-100 text-red-600 hover:bg-red-200'    },
  { label: 'Good',   emoji: '🙂', color: 'bg-green-100 text-green-600 hover:bg-green-200'},
  { label: 'Easy',   emoji: '😄', color: 'bg-blue-100 text-blue-600 hover:bg-blue-200'  },
];

/* ── Deck card ── */
const DeckCard = ({ deck, onStudy }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between mb-3">
      <div>
        <h3 className="text-sm font-bold text-gray-900">{deck.title}</h3>
        <p className="text-xs text-gray-400 mt-0.5">{deck.subject}</p>
      </div>
      <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-lg">{deck.cards} Cards</span>
    </div>

    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
      <span>Last studied {deck.lastStudied}</span>
      <span className="font-semibold text-purple-600">{deck.progress}%</span>
    </div>

    <div className="w-full bg-gray-100 rounded-full h-1.5 mb-4">
      <div
        className="bg-purple-500 h-1.5 rounded-full"
        style={{ width: `${deck.progress}%` }}
      />
    </div>

    <button
      onClick={() => onStudy(deck)}
      className="w-full py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-xl transition-colors"
    >
      Study Now
    </button>
  </div>
);

/* ── Study mode ── */
const StudyMode = ({ deck, onBack }) => {
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [studied, setStudied] = useState(0);

  const card = mockFlashcards[cardIndex % mockFlashcards.length];

  const handleRate = () => {
    setFlipped(false);
    setStudied((s) => s + 1);
    setCardIndex((i) => i + 1);
  };

  return (
    <div>
      {/* Back button + progress */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={onBack}
          className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-1"
        >
          ← Back to Decks
        </button>
        <div className="flex-1 bg-gray-100 rounded-full h-1.5">
          <div
            className="bg-purple-500 h-1.5 rounded-full transition-all"
            style={{ width: `${(studied / deck.cards) * 100}%` }}
          />
        </div>
        <span className="text-xs text-gray-500 font-medium">
          {studied} of {deck.cards}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Flashcard */}
        <div className="lg:col-span-2">
          <div
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 min-h-64 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow text-center"
            onClick={() => setFlipped(!flipped)}
          >
            <p className="text-xs text-gray-400 mb-4 uppercase tracking-wide">
              {flipped ? 'Back' : 'Front'} — Click to flip
            </p>
            <p className="text-xl font-semibold text-gray-900 leading-relaxed">
              {flipped ? card.back : card.front}
            </p>
            <p className="text-xs text-gray-400 mt-6">Press Space to flip</p>
          </div>

          {/* Rating buttons */}
          {flipped && (
            <div className="flex gap-3 mt-4">
              {RATINGS.map((r) => (
                <button
                  key={r.label}
                  onClick={handleRate}
                  className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-colors ${r.color}`}
                >
                  {r.emoji} {r.label}
                </button>
              ))}
            </div>
          )}

          {/* Nav */}
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={() => { setCardIndex((i) => Math.max(0, i - 1)); setFlipped(false); }}
              className="text-sm text-gray-500 hover:text-gray-800"
            >
              ← Previous
            </button>
            <span className="text-xs text-gray-400">{cardIndex + 1} of {deck.cards}</span>
            <button
              onClick={() => { setCardIndex((i) => i + 1); setFlipped(false); }}
              className="text-sm text-gray-500 hover:text-gray-800"
            >
              Next →
            </button>
          </div>
        </div>

        {/* Study stats sidebar */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="text-sm font-bold text-gray-900 mb-4">Deck Progress</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Total Cards',  value: deck.cards             },
                { label: 'Studied',      value: studied                 },
                { label: 'Remaining',    value: deck.cards - studied    },
                { label: 'Complete',     value: `${Math.round((studied / deck.cards) * 100)}%` },
              ].map((s) => (
                <div key={s.label} className="bg-gray-50 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-gray-900">{s.value}</p>
                  <p className="text-xs text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="text-sm font-bold text-gray-900 mb-4">Study Stats</h3>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Study Time',       value: '1hr 40mins' },
                { label: 'Cards Reviewed',   value: studied      },
                { label: 'Average Score',    value: '78%'        },
                { label: 'Current Streak',   value: '7 days'     },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{s.label}</span>
                  <span className="text-xs font-bold text-gray-900">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

/* ── Main page ── */
const FlashcardsPage = () => {
  const [studyingDeck, setStudyingDeck] = useState(null);

  return (
    <DashboardLayout>
      {studyingDeck ? (
        <StudyMode deck={studyingDeck} onBack={() => setStudyingDeck(null)} />
      ) : (
        <>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Flashcards</h1>
              <p className="text-sm text-gray-500 mt-1">Create, organise and master your topics</p>
            </div>
            <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors">
              <span>+</span> New Deck
            </button>
          </div>

          {/* Pinned decks */}
          <div className="mb-8">
            <h2 className="text-sm font-bold text-gray-700 mb-4">Pinned Decks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {mockFlashcardDecks.slice(0, 1).map((deck) => (
                <DeckCard key={deck.id} deck={deck} onStudy={setStudyingDeck} />
              ))}
            </div>
          </div>

          {/* All decks table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
              <h2 className="text-sm font-bold text-gray-900">All Decks</h2>
              <select className="text-xs text-gray-500 border border-gray-200 rounded-lg px-2 py-1 focus:outline-none">
                <option>Sort by: Recent</option>
                <option>Sort by: Progress</option>
                <option>Sort by: Name</option>
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-xs text-gray-400 border-b border-gray-50">
                    <th className="text-left px-6 py-3 font-medium">Deck Name</th>
                    <th className="text-left px-6 py-3 font-medium">Subject</th>
                    <th className="text-left px-6 py-3 font-medium">Cards</th>
                    <th className="text-left px-6 py-3 font-medium">Last Studied</th>
                    <th className="text-left px-6 py-3 font-medium">Progress</th>
                    <th className="px-6 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {mockFlashcardDecks.map((deck) => (
                    <tr key={deck.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{deck.title}</td>
                      <td className="px-6 py-4 text-xs text-gray-500">{deck.subject}</td>
                      <td className="px-6 py-4 text-xs text-gray-500">{deck.cards}</td>
                      <td className="px-6 py-4 text-xs text-gray-500">{deck.lastStudied}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-100 rounded-full h-1.5">
                            <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: `${deck.progress}%` }} />
                          </div>
                          <span className="text-xs font-semibold text-gray-700">{deck.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => setStudyingDeck(deck)}
                          className="text-xs text-purple-600 font-semibold hover:underline"
                        >
                          Study
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 px-6 py-3">Showing 1-{mockFlashcardDecks.length} of {mockFlashcardDecks.length} decks</p>
          </div>
        </>
      )}
    </DashboardLayout>
  );
};

export default FlashcardsPage;
