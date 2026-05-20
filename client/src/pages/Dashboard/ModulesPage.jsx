import { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import { mockModules } from '../../services/mockData';

/**
 * ModulesPage — All study modules in one place
 * Tabs: All | In Progress | Completed | Archived
 */

const TABS = ['All', 'In Progress', 'Completed', 'Archived'];

const statusColor = (progress) => {
  if (progress === 100) return 'bg-green-500';
  if (progress > 50)   return 'bg-blue-500';
  if (progress > 0)    return 'bg-purple-500';
  return 'bg-gray-300';
};

const ModuleCard = ({ module }) => (
  <Link
    to={`/dashboard/modules/${module.id}`}
    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-3"
  >
    {/* Header */}
    <div className="flex items-start justify-between gap-2">
      <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-lg flex-shrink-0">
        📚
      </div>
      {module.status === 'completed' && (
        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
          Completed
        </span>
      )}
      {module.status === 'not_started' && (
        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
          Not Started
        </span>
      )}
    </div>

    {/* Title + meta */}
    <div>
      <h3 className="text-sm font-bold text-gray-900 mb-1">{module.title}</h3>
      <p className="text-xs text-gray-400">{module.lessons} Lessons · Last update {module.lastUpdated}</p>
    </div>

    {/* Progress bar */}
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-500">Progress</span>
        <span className="text-xs font-semibold text-gray-700">{module.progress}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-1.5">
        <div
          className={`${statusColor(module.progress)} h-1.5 rounded-full transition-all`}
          style={{ width: `${module.progress}%` }}
        />
      </div>
    </div>
  </Link>
);

const ModulesPage = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = mockModules.filter((m) => {
    if (activeTab === 'All')         return true;
    if (activeTab === 'In Progress') return m.status === 'in_progress';
    if (activeTab === 'Completed')   return m.status === 'completed';
    if (activeTab === 'Archived')    return m.status === 'archived';
    return true;
  });

  return (
    <DashboardLayout>

      {/* Page header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Modules</h1>
          <p className="text-sm text-gray-500 mt-1">All your study materials in one place</p>
        </div>
        <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors">
          <span>+</span> New Module
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl w-fit mb-6">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${activeTab === tab
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Modules grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-3">📭</p>
          <p className="font-medium">No modules here yet</p>
          <p className="text-sm mt-1">Upload a PDF to get started</p>
        </div>
      )}

    </DashboardLayout>
  );
};

export default ModulesPage;
