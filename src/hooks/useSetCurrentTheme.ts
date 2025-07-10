import { useLayoutEffect } from 'react';
import { LIGHT_THEME, DARK_THEME } from '../constants/theme-constant';

export const useSetCurrentTheme = () => {
	useLayoutEffect(() => {
		const hour = new Date().getHours();
		const theme = hour >= 7 && hour < 20 ? LIGHT_THEME : LIGHT_THEME;
		document.documentElement.setAttribute('data-theme', theme);

		document.documentElement.classList.remove('no-theme-transition');
	}, []);
};
