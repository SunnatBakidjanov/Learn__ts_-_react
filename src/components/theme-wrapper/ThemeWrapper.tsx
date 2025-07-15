import { useEffect } from 'react';
import { useAppSelector } from '../../redux/store';

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
	const theme = useAppSelector(state => state.theme.currentTheme);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	return <>{children}</>;
};
