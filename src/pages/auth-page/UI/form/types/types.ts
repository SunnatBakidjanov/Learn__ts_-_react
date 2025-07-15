import { ACTIONS } from '../scripts/actionConstants';

type ErrorMessages =
	| 'INVALID_NAME'
	| 'INVALID_LASTNAME'
	| 'PASSWORD_DO_NOT_MATCH'
	| 'LOW_PASSWORD_LENGTH'
	| 'SUCCESS';

type AuthFileds =
	| 'NAME_FIELD'
	| 'PASSWORD_FIELD'
	| 'PASSWORD_REPEAT_FIELD'
	| 'LAST_NAME_FIELD'
	| 'EMAIL_FIELD';

type AllowedFields = 'name' | 'lastName' | 'email' | 'password' | 'repeatPassword';

type AuthFormState = {
	name: string;
	email: string;
	lastName: string;
	password: string;
	repeatPassword?: string;
	errorMessage?: ErrorMessages;
	isLoading: boolean;
};

interface RegisterResponse {
	success: boolean;
	message: string;
	user: {
		email: string;
		name: string;
		lastName: string;
	};
}

type ReducerAction =
	| { type: typeof ACTIONS.SET_FIELD; field: AllowedFields; payload: string }
	| { type: typeof ACTIONS.CLEAR_FORM }
	| { type: typeof ACTIONS.SET_LOADER; payload: boolean }
	| { type: typeof ACTIONS.SHOW_ERRORS; payload: ErrorMessages };

export type {
	ReducerAction,
	AuthFormState,
	AllowedFields,
	RegisterResponse,
	ErrorMessages,
	AuthFileds,
};
