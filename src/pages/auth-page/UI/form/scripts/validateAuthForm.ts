import type { AuthFormState } from '../types/types';

export const validateAuthForm = (state: AuthFormState) => {
	const regExpLatinCyrilic = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;

	if (!regExpLatinCyrilic.test(state.name)) {
		return 'INVALID_NAME';
	}

	if (!regExpLatinCyrilic.test(state.lastName)) {
		return 'INVALID_LASTNAME';
	}

	if (state.password.length < 6) {
		return 'LOW_PASSWORD_LENGTH';
	}

	if (state.password !== state.repeatPassword) {
		return 'PASSWORD_DO_NOT_MATCH';
	}
};
