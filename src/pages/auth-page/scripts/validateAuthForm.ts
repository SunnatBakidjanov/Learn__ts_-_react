import type { ErrorsMessages, State } from '../types/authFormTypes';
import { constMessages } from '../../../constants/constMessages';

export const validateAuthForm = (state: State) => {
	const errors: ErrorsMessages = {};
	const nameRegex = /^[a-zA-Zа-яА-ЯёЁ_]+$/;

	if (state.name.length !== 0 && state.name.trim().length < 2) {
		errors[constMessages.user.shortName] = true;
	} else if (state.name.length !== 0 && !nameRegex.test(state.name.trim())) {
		errors[constMessages.user.invalidName] = true;
	}

	if (state.lastName.length !== 0 && state.lastName.trim().length < 2) {
		errors[constMessages.user.shortLastName] = true;
	} else if (state.lastName.length !== 0 && !nameRegex.test(state.lastName.trim())) {
		errors[constMessages.user.invalidLastName] = true;
	}

	if (state.password.length !== 0 && state.password.trim().length < 1) {
		errors[constMessages.user.invalidPassword] = true;
	}

	if (state.confirmPassword.length !== 0 && state.password !== state.confirmPassword) {
		errors[constMessages.user.passwordDoNotMatch] = true;
	}

	return errors;
};
