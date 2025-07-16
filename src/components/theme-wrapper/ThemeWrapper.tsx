import { useEffect, useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setTheme } from '../../redux/theme-slice/slice';

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
	const theme = useAppSelector(state => state.theme.currentTheme);
	const dispatch = useAppDispatch();

	useLayoutEffect(() => {
		dispatch(setTheme());
	}, []);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	return <>{children}</>;
};
