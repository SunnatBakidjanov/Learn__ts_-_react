import { useLayoutEffect } from 'react';
import { THEME_CONSTANTS } from '../constants/theme-constant';

export const useSetCurrentTheme = () => {
	useLayoutEffect(() => {
		const hour = new Date().getHours();
		const theme = hour >= 7 && hour < 20 ? THEME_CONSTANTS.LIGHT_THEME : THEME_CONSTANTS.DARK_THEME;
		document.documentElement.setAttribute('data-theme', theme);

		document.documentElement.classList.remove('no-theme-transition');
	}, []);
};
