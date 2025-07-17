import type { ErrorMessages, AuthFileds } from '../types/types';
import { useEffect, useRef, useState } from 'react';

const errorToField = new Map<ErrorMessages, AuthFileds>([
	['INVALID_NAME', 'NAME_FIELD'],
	['LOW_NAME_LENGTH', 'NAME_FIELD'],
	['INVALID_LASTNAME', 'LAST_NAME_FIELD'],
	['LOW_PASSWORD_LENGTH', 'PASSWORD_FIELD'],
	['PASSWORD_DO_NOT_MATCH', 'PASSWORD_REPEAT_FIELD'],
	['UNKNOW_ERROR', 'UNKNOW_ERROR_FIELD'],
]);

export const useFieldErrorHeight = (errorMessage: ErrorMessages) => {
	const nodes = useRef<Record<string, HTMLDivElement | null>>({});
	const [heights, setHeights] = useState<Record<string, number>>({});

	const setErrorMessageRef = (key: AuthFileds) => (el: HTMLDivElement | null) => {
		nodes.current[key ?? ''] = el;
	};

	const getHeight = (key: AuthFileds) => heights[key ?? ''] ?? 0;

	useEffect(() => {
		if (!errorMessage) {
			setHeights({});
			return;
		}

		const currentField = errorToField.get(errorMessage);
		if (!currentField) return;

		const el = nodes.current[currentField];
		if (!el) return;

		const height = el.scrollHeight;
		setHeights(prev => ({ ...prev, [currentField]: height }));
	}, [errorMessage]);

	return { setErrorMessageRef, getHeight };
};
