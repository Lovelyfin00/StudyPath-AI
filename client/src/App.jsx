import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/common/ProtectedRoute.jsx'
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/app" replace />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />

			<Route element={<ProtectedRoute />}>
				<Route path="/app" element={<Dashboard />} />
			</Route>

			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}
