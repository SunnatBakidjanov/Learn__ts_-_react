import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthPage } from '../../pages/auth-page/AuthPage';
import { LoginPage } from '../../pages/login-page/LoginPage';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/auth" replace />} />

			<Route path="/auth" element={<AuthPage />} />
			<Route path="/login" element={<LoginPage />} />
		</Routes>
	);
};
