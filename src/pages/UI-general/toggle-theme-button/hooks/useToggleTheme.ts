import { LIGHT_THEME, DARK_THEME } from '../../../../constants/theme-constant';

export const useToggleTheme = () => {
	const toggleTheme = () => {
		const current = document.documentElement.getAttribute('data-theme');
		const next = current === DARK_THEME ? LIGHT_THEME : DARK_THEME;
		document.documentElement.setAttribute('data-theme', next);
	};

	return toggleTheme;
};
