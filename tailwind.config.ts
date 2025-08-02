import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
	theme: {
		extend: {
			keyframes: {
				wave: {
					'0%': {
						boxShadow: '0 0 0 0 rgba(0, 156, 253, 0.7)',
					},
					'70%': {
						boxShadow: '0 0 0 10px rgba(0, 156, 253, 0)',
					},
					'100%': {
						boxShadow: '0 0 0 0 rgba(0, 156, 253, 0)',
					},
				},
			},
			animation: {
				wave: 'wave 1.5s infinite',
			},
		},
	},
	plugins: [],
};

export default config;
