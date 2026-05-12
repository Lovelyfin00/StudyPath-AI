import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold">Page not found</h1>
        <p className="text-sm text-gray-600 mt-2">The page you requested does not exist.</p>
        <div className="mt-5">
          <Link to="/login" className="inline-flex rounded-xl bg-blue-700 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-800">
            Go to login
          </Link>
        </div>
      </div>
    </div>
  )
}
