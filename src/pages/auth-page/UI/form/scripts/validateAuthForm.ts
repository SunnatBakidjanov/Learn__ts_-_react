import type { AuthFormState, ErrorMessages } from '../types/types';

export const validateAuthForm = (state: AuthFormState): ErrorMessages | undefined => {
	const regExpLatinCyrilic = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;

	if (!regExpLatinCyrilic.test(state.name)) {
		return 'INVALID_NAME';
	}

	if (state.name.length < 2) {
		return 'LOW_NAME_LENGTH';
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

	return undefined;
};
