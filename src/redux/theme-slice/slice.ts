import { createSlice } from '@reduxjs/toolkit';

type ThemeState = {
	currentTheme: 'light' | 'dark';
};

const initialState: ThemeState = {
	currentTheme:
		(sessionStorage.getItem('theme') as 'light' | 'dark') ||
		(localStorage.getItem('theme') as 'light' | 'dark') ||
		'light',
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme(state) {
			state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', state.currentTheme);
		},
		setTheme(state) {
			const now = Date.now();
			const lastUpdateStr = localStorage.getItem('theme_last_update');
			const lastUpdate = lastUpdateStr ? parseInt(lastUpdateStr) : 0;
			const lifetime = 3600000;

			const lifeTimePassed = now - lastUpdate > lifetime;

			if (lifeTimePassed) {
				const hours = new Date().getHours();
				const nextTheme = hours >= 7 && hours < 19 ? 'light' : 'dark';

				localStorage.setItem('theme', nextTheme);
				localStorage.setItem('theme_last_update', now.toString());

				state.currentTheme = nextTheme;
			} else {
				const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
				if (savedTheme === 'light' || savedTheme === 'dark') {
					state.currentTheme = savedTheme;
				} else {
					state.currentTheme = 'light';
				}
			}
		},
	},
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice;
