import { useTranslation } from 'react-i18next';
import type { ErrorMessages } from '../types/types';

export const useErrorMessages = (errorMessage: ErrorMessages) => {
	const { t } = useTranslation('auth');

	const nameErrors: Partial<Record<ErrorMessages, string>> = {
		INVALID_NAME: t('form.errorsMessages.invalidName'),
		LOW_NAME_LENGTH: t('form.errorsMessages.lowNameLength'),
	};

	const lastNameErrors: Partial<Record<ErrorMessages, string>> = {
		INVALID_LASTNAME: t('form.errorsMessages.invalidLastName'),
	};

	const passwordErrors: Partial<Record<ErrorMessages, string>> = {
		LOW_PASSWORD_LENGTH: t('form.errorsMessages.lowPasswordLength'),
	};

	const passwordRepeatErrors: Partial<Record<ErrorMessages, string>> = {
		PASSWORD_DO_NOT_MATCH: t('form.errorsMessages.passwrodDoNotMatch'),
	};

	const unknownError: Partial<Record<ErrorMessages, string>> = {
		UNKNOW_ERROR: 'Неизвастная ошибка',
	};

	const nameErrorMessages = errorMessage && nameErrors[errorMessage as keyof typeof nameErrors];

	const passwordErrorMessage =
		errorMessage && passwordErrors[errorMessage as keyof typeof passwordErrors];

	const passwordRepeatErrorMessage =
		errorMessage && passwordRepeatErrors[errorMessage as keyof typeof passwordRepeatErrors];

	const lastNameErrorMessage =
		errorMessage && lastNameErrors[errorMessage as keyof typeof lastNameErrors];

	const unknownErrorMessage =
		errorMessage && unknownError[errorMessage as keyof typeof unknownError];

	return {
		passwordErrorMessage,
		passwordRepeatErrorMessage,
		nameErrorMessages,
		lastNameErrorMessage,
		unknownErrorMessage,
	};
};
