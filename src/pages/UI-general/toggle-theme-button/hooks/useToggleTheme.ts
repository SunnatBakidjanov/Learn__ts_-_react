import { useLayoutEffect } from 'react';

export const useToggleTheme = () => {
	const LIGHT_THEME = 'light';
	const DARK_THEME = 'dark';

	useLayoutEffect(() => {
		const hour = new Date().getHours();
		const theme = hour >= 8 && hour < 17 ? LIGHT_THEME : DARK_THEME;
		document.documentElement.setAttribute('data-theme', theme);

		document.documentElement.classList.remove('no-theme-transition');
	}, []);

	const toggleTheme = () => {
		const current = document.documentElement.getAttribute('data-theme');
		const next = current === DARK_THEME ? LIGHT_THEME : DARK_THEME;
		document.documentElement.setAttribute('data-theme', next);
	};

	return toggleTheme;
};
