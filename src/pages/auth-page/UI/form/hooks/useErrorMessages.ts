import { useTranslation } from 'react-i18next';

export const useErrorMessages = () => {
	const { t } = useTranslation('auth');

	const passwordErrors = {
		LOW_PASSWORD_LENGTH: t('form.errorsMessages.lowPasswordLength'),
	};

	const passwordRepeatErrors = {
		PASSWORD_DO_NOT_MATCH: t('form.errorsMessages.passwrodDoNotMatch'),
	};

	return { passwordErrors, passwordRepeatErrors };
};
