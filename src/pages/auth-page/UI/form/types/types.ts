type ErrorMessages =
	| 'INVALID_NAME'
	| 'INVALID_LASTNAME'
	| 'PASSWORD_DO_NOT_MATCH'
	| 'LOW_PASSWORD_LENGTH'
	| 'LOW_NAME_LENGTH'
	| 'UNKNOW_ERROR'
	| 'EMAIL_EXISTS';

type AuthFileds =
	| 'NAME_FIELD'
	| 'PASSWORD_FIELD'
	| 'PASSWORD_REPEAT_FIELD'
	| 'LAST_NAME_FIELD'
	| 'UNKNOWN_ERROR_FIELD'
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

type RegisterResponse = {
	success: boolean;
	message: ErrorMessages;
	user: {
		email: string;
		name: string;
		lastName: string;
	};
};

type ReducerAction =
	| { type: 'SET_FIELD'; field: AllowedFields; payload: string }
	| { type: 'CLEAR_FORM' }
	| { type: 'SET_LOADER'; payload: boolean }
	| { type: 'SHOW_ERRORS'; payload: ErrorMessages | undefined };

export type {
	ReducerAction,
	AuthFormState,
	AllowedFields,
	RegisterResponse,
	ErrorMessages,
	AuthFileds,
};
