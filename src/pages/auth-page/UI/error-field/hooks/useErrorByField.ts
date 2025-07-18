import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { ErrorMessages, AuthFileds } from '../../form/types/types';

const errorToField: Partial<Record<ErrorMessages, AuthFileds>> = {
	INVALID_NAME: 'NAME_FIELD',
	LOW_NAME_LENGTH: 'NAME_FIELD',
	INVALID_LASTNAME: 'LAST_NAME_FIELD',
	EMAIL_EXISTS: 'EMAIL_FIELD',
	LOW_PASSWORD_LENGTH: 'PASSWORD_FIELD',
	PASSWORD_DO_NOT_MATCH: 'PASSWORD_REPEAT_FIELD',
	UNKNOW_ERROR: 'UNKNOWN_ERROR_FIELD',
};

export const useErrorByField = (errorMessage: ErrorMessages | null) => {
	const { t } = useTranslation('auth');

	const nodes = useRef<Record<AuthFileds, HTMLDivElement | null>>({} as any);
	const [heights, setHeights] = useState<Record<AuthFileds, number>>({} as any);

	const errorTextMap: Record<ErrorMessages, string> = {
		INVALID_NAME: t('form.errorsMessages.invalidName'),
		LOW_NAME_LENGTH: t('form.errorsMessages.lowNameLength'),
		INVALID_LASTNAME: t('form.errorsMessages.invalidLastName'),
		EMAIL_EXISTS: t('form.errorsMessages.emailExist'),
		LOW_PASSWORD_LENGTH: t('form.errorsMessages.lowPasswordLength'),
		PASSWORD_DO_NOT_MATCH: t('form.errorsMessages.passwrodDoNotMatch'),
		UNKNOW_ERROR: t('form.errorsMessages.unknownError'),
	};

	const setErrorRef = (field: AuthFileds) => (el: HTMLDivElement | null) => {
		nodes.current[field] = el;
	};

	const getErrorText = (field: AuthFileds): string => {
		if (!errorMessage) return '';
		const errorField = errorToField[errorMessage];
		return errorField === field ? errorTextMap[errorMessage] : '';
	};

	const getErrorHeight = (field: AuthFileds): number => {
		return heights[field] ?? 0;
	};

	useEffect(() => {
		if (!errorMessage) {
			setHeights({} as any);
			return;
		}

		const field = errorToField[errorMessage];
		if (!field) return;

		const el = nodes.current[field];
		if (!el) return;

		const height = el.scrollHeight;
		setHeights(prev => ({ ...prev, [field]: height }));
	}, [errorMessage]);

	return {
		getErrorText,
		getErrorHeight,
		setErrorRef,
	};
};
