import type { AuthFormState } from '../types/types';
import { ERRORS } from './errorConstants';

export const validateAuthForm = (state: AuthFormState) => {
	const regExpLatinCyrilic = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;

	if (!regExpLatinCyrilic.test(state.name)) {
		return ERRORS.INVALID_NAME;
	}

	if (state.name.length < 2) {
		return ERRORS.LOW_NAME_LENGTH;
	}

	if (!regExpLatinCyrilic.test(state.lastName)) {
		return ERRORS.INVALID_LASTNAME;
	}

	if (state.password.length < 6) {
		return ERRORS.LOW_PASSWORD_LENGTH;
	}

	if (state.password !== state.repeatPassword) {
		return ERRORS.PASSWORD_DO_NOT_MATCH;
	}
};
