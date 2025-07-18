import type { ValidationMessageProps } from '../../../../UI-general/validation-message/types/types';
import type { AuthFileds, ErrorMessages } from '../../form/types/types';

type ErrorFieldProps = {
	errorMessage: ErrorMessages | undefined;
	className: string;
	fieldName: AuthFileds;
	styleUsePlace: 'auth' | 'authPrimary';
};

export type { ErrorFieldProps };
