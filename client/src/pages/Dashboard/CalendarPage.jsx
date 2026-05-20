import { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import { mockCalendarEvents } from '../../services/mockData';

/**
 * CalendarPage — Schedule and manage your study sessions
 */

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const eventTypeStyle = (type) => {
  const map = {
    quiz:     'bg-purple-100 text-purple-700 border-purple-200',
    deadline: 'bg-red-100 text-red-700 border-red-200',
    study:    'bg-blue-100 text-blue-700 border-blue-200',
  };
  return map[type] || 'bg-gray-100 text-gray-700 border-gray-200';
};

const eventTypeIcon = (type) => {
  const map = { quiz: '📝', deadline: '⏰', study: '📚' };
  return map[type] || '📅';
};

const CalendarPage = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  // Days grid: empty slots + actual days
  const cells = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  const selectedEvents = mockCalendarEvents.filter((e) =>
    e.date.includes(`${MONTHS[month].slice(0, 3)} ${selectedDay}`)
  );

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
        <p className="text-sm text-gray-500 mt-1">Schedule and manage your study sessions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Calendar grid */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

          {/* Month navigation */}
          <div className="flex items-center justify-between mb-6">
            <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500">
              ←
            </button>
            <h2 className="text-base font-bold text-gray-900">
              {MONTHS[month]} {year}
            </h2>
            <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500">
              →
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 mb-2">
            {DAYS.map((d) => (
              <div key={d} className="text-center text-xs font-semibold text-gray-400 py-2">{d}</div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7 gap-1">
            {cells.map((day, i) => {
              if (!day) return <div key={`empty-${i}`} />;
              const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
              const isSelected = day === selectedDay;
              const hasEvent = mockCalendarEvents.some((e) =>
                e.date.includes(`${MONTHS[month].slice(0, 3)} ${day}`)
              );

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`aspect-square flex flex-col items-center justify-center rounded-xl text-sm font-medium transition-all relative
                    ${isSelected ? 'bg-purple-600 text-white' : isToday ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-50 text-gray-700'}
                  `}
                >
                  {day}
                  {hasEvent && (
                    <span className={`absolute bottom-1 w-1 h-1 rounded-full ${isSelected ? 'bg-white' : 'bg-purple-500'}`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Events panel */}
        <div className="flex flex-col gap-4">

          {/* Selected day events */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-sm font-bold text-gray-900 mb-4">
              {MONTHS[month]} {selectedDay}, {year}
            </h3>
            {selectedEvents.length > 0 ? (
              <div className="flex flex-col gap-3">
                {selectedEvents.map((event) => (
                  <div
                    key={event.id}
                    className={`p-3 rounded-xl border text-xs ${eventTypeStyle(event.type)}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span>{eventTypeIcon(event.type)}</span>
                      <span className="font-semibold">{event.title}</span>
                    </div>
                    <p className="opacity-70">{event.time}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-gray-400">
                <p className="text-2xl mb-2">📭</p>
                <p className="text-xs">No events this day</p>
              </div>
            )}

            <button className="w-full mt-4 py-2.5 border border-purple-200 text-purple-600 text-xs font-semibold rounded-xl hover:bg-purple-50 transition-colors">
              + Add Event
            </button>
          </div>

          {/* Upcoming events */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-sm font-bold text-gray-900 mb-4">Upcoming Events</h3>
            <div className="flex flex-col gap-3">
              {mockCalendarEvents.map((event) => (
                <div key={event.id} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 text-sm">
                    {eventTypeIcon(event.type)}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">{event.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{event.date} · {event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default CalendarPage;
