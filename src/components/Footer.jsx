import Logo from './Logo'

const footerLinks = {
  Product: ['Subscription', 'Data Governance', 'Integrations', 'Virtual Exams', 'Behavioral Analytics', 'Careers'],
  Explore: ['Resources', 'Blog', 'Documents'],
  Company: ['About us', 'Partners', 'Customers', 'Contact us'],
}

const SocialIcon = ({ children, href }) => (
  <a
    href={href}
    className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-purple-600 hover:border-purple-300 transition-colors duration-200"
    aria-label="Social link"
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pb-10">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-purple-600 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Subscribe column */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">Subscribe</h4>
            <p className="text-sm text-gray-500 mb-3 leading-relaxed">
              Follow us on AI to receive updates to help you get the most results, Just magic!
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 min-w-0 px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
              />
              <button
                className="flex-shrink-0 w-9 h-9 rounded-lg bg-purple-600 flex items-center justify-center hover:bg-purple-700 transition-colors duration-200"
                aria-label="Subscribe"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo />

          <div className="flex items-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-purple-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Cookies</a>
          </div>

          <div className="flex items-center gap-2">
            {/* LinkedIn */}
            <SocialIcon href="#">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                <path d="M3.3 5.4H.7V16H3.3V5.4ZM2 3.9C2.9 3.9 3.6 3.2 3.6 2.3C3.6 1.4 2.9 .7 2 .7C1.1 .7 .4 1.4 .4 2.3C.4 3.2 1.1 3.9 2 3.9ZM16 16H13.4V10.8C13.4 9.4 13.4 7.6 11.5 7.6C9.5 7.6 9.2 9.1 9.2 10.7V16H6.6V5.4H9.1V6.9H9.2C9.6 6.1 10.6 5.3 12.2 5.3C14.9 5.3 16 7.1 16 9.5V16Z"/>
              </svg>
            </SocialIcon>
            {/* Twitter/X */}
            <SocialIcon href="#">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                <path d="M12.6 0H15L9.9 6.1L16 16H11.1L7.2 10.4L2.8 16H.4L5.9 9.5L0 0H5.1L8.6 5.1L12.6 0ZM11.8 14.4H13.1L4.3 1.3H2.9L11.8 14.4Z"/>
              </svg>
            </SocialIcon>
            {/* Facebook */}
            <SocialIcon href="#">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                <path d="M16 8A8 8 0 1 0 6.7 15.9V10.3H4.7V8H6.7V6.2C6.7 4.2 7.9 3.1 9.7 3.1C10.6 3.1 11.5 3.3 11.5 3.3V5.3H10.5C9.5 5.3 9.2 5.9 9.2 6.5V8H11.4L11.1 10.3H9.2V15.9C13 15.2 16 11.9 16 8Z"/>
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  )
}
