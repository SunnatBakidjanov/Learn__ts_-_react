import { THEME_CONSTANTS } from '../constants/theme-constant';

export const handleChangeTheme = () => {
	const theme = document.documentElement.getAttribute('data-theme');
	const next: 'dark' | 'light' =
		theme === THEME_CONSTANTS.DARK_THEME ? THEME_CONSTANTS.LIGHT_THEME : THEME_CONSTANTS.DARK_THEME;
	document.documentElement.setAttribute('data-theme', next);
};
