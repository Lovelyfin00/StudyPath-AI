import { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import { mockUser } from '../../services/mockData';

/**
 * SettingsPage — Account preferences and configuration
 * Tabs: Account | Preferences | Notifications | Appearance | Privacy | Billing
 */

const TABS = ['Account', 'Notifications', 'Appearance', 'Privacy', 'Billing'];

const Toggle = ({ enabled, onChange }) => (
  <button
    onClick={() => onChange(!enabled)}
    className={`relative inline-flex w-11 h-6 rounded-full transition-colors
      ${enabled ? 'bg-purple-600' : 'bg-gray-200'}`}
  >
    <span
      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform
        ${enabled ? 'translate-x-5' : 'translate-x-0'}`}
    />
  </button>
);

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('Account');

  // Account fields
  const [name, setName] = useState(mockUser.name);
  const [email, setEmail] = useState(mockUser.email);

  // Notification toggles
  const [notifications, setNotifications] = useState({
    studyReminders:    true,
    quizResults:       true,
    weeklyProgress:    true,
    newFeatures:       false,
    emailNotifications:true,
  });

  // Appearance
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('medium');

  // Privacy
  const [privacy, setPrivacy] = useState({
    shareProgress:  false,
    publicProfile:  false,
    dataCollection: true,
  });

  const toggleNotif = (key) => setNotifications((p) => ({ ...p, [key]: !p[key] }));
  const togglePrivacy = (key) => setPrivacy((p) => ({ ...p, [key]: !p[key] }));

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your account preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Sidebar tabs */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 h-fit">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium mb-1 transition-colors
                ${activeTab === tab
                  ? 'bg-purple-50 text-purple-700 font-semibold'
                  : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

          {/* ── Account ── */}
          {activeTab === 'Account' && (
            <div className="flex flex-col gap-6">
              <h2 className="text-base font-bold text-gray-900">Account Information</h2>

              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold text-2xl flex-shrink-0">
                  A
                </div>
                <div>
                  <button className="text-sm text-purple-600 font-semibold hover:underline">
                    Change Photo
                  </button>
                  <p className="text-xs text-gray-400 mt-0.5">JPG, PNG or GIF · Max 2MB</p>
                </div>
              </div>

              {/* Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Change Password</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Current Password', 'New Password'].map((label) => (
                    <div key={label} className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* ── Notifications ── */}
          {activeTab === 'Notifications' && (
            <div className="flex flex-col gap-6">
              <h2 className="text-base font-bold text-gray-900">Notification Preferences</h2>
              <div className="flex flex-col gap-4">
                {[
                  { key: 'studyReminders',     label: 'Study Reminders',      desc: 'Get reminded to study at your scheduled times'    },
                  { key: 'quizResults',        label: 'Quiz Results',          desc: 'Receive notifications when quiz results are ready'  },
                  { key: 'weeklyProgress',     label: 'Weekly Progress',       desc: 'Get a weekly summary of your learning progress'     },
                  { key: 'newFeatures',        label: 'New Features',          desc: 'Be the first to know about new StudyPath features'  },
                  { key: 'emailNotifications', label: 'Email Notifications',   desc: 'Receive notifications via email'                    },
                ].map(({ key, label, desc }) => (
                  <div key={key} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                    </div>
                    <Toggle enabled={notifications[key]} onChange={() => toggleNotif(key)} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Appearance ── */}
          {activeTab === 'Appearance' && (
            <div className="flex flex-col gap-6">
              <h2 className="text-base font-bold text-gray-900">Appearance</h2>

              {/* Theme */}
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-3">Theme</p>
                <div className="grid grid-cols-3 gap-3">
                  {['light', 'dark', 'system'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTheme(t)}
                      className={`py-3 rounded-xl border text-sm font-medium capitalize transition-all
                        ${theme === t
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                    >
                      {t === 'light' ? '☀️' : t === 'dark' ? '🌙' : '💻'} {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Font size */}
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-3">Font Size</p>
                <div className="grid grid-cols-3 gap-3">
                  {['small', 'medium', 'large'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setFontSize(s)}
                      className={`py-3 rounded-xl border text-sm font-medium capitalize transition-all
                        ${fontSize === s
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── Privacy ── */}
          {activeTab === 'Privacy' && (
            <div className="flex flex-col gap-6">
              <h2 className="text-base font-bold text-gray-900">Privacy Settings</h2>
              <div className="flex flex-col gap-4">
                {[
                  { key: 'shareProgress',  label: 'Share Progress',   desc: 'Allow others to see your learning progress'         },
                  { key: 'publicProfile',  label: 'Public Profile',   desc: 'Make your profile visible to other users'           },
                  { key: 'dataCollection', label: 'Data Collection',  desc: 'Help improve StudyPath AI with anonymous usage data' },
                ].map(({ key, label, desc }) => (
                  <div key={key} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                    </div>
                    <Toggle enabled={privacy[key]} onChange={() => togglePrivacy(key)} />
                  </div>
                ))}
              </div>

              {/* Danger zone */}
              <div className="pt-4 border-t border-red-100">
                <h3 className="text-sm font-bold text-red-600 mb-3">Danger Zone</h3>
                <button className="text-sm text-red-500 border border-red-200 px-4 py-2.5 rounded-xl hover:bg-red-50 transition-colors font-semibold">
                  Delete Account
                </button>
              </div>
            </div>
          )}

          {/* ── Billing ── */}
          {activeTab === 'Billing' && (
            <div className="flex flex-col gap-6">
              <h2 className="text-base font-bold text-gray-900">Billing & Plan</h2>

              {/* Current plan */}
              <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-gray-900">Free Plan</p>
                  <p className="text-xs text-gray-500 mt-0.5">85% of storage used · 5 uploads remaining</p>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors">
                  Upgrade to Pro
                </button>
              </div>

              {/* Plan comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Pro',     price: '$9.99/mo',  features: ['Unlimited uploads', 'Advanced AI', 'Priority support'] },
                  { name: 'Premium', price: '$19.99/mo', features: ['Everything in Pro', 'Team features', 'Dedicated support'] },
                ].map((plan) => (
                  <div key={plan.name} className="border border-gray-200 rounded-2xl p-5">
                    <p className="text-base font-bold text-gray-900">{plan.name}</p>
                    <p className="text-xl font-bold text-purple-600 my-2">{plan.price}</p>
                    <ul className="flex flex-col gap-2 mb-4">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                          <span className="text-green-500 font-bold">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-2.5 border border-purple-500 text-purple-600 text-sm font-semibold rounded-xl hover:bg-purple-50 transition-colors">
                      Choose {plan.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
