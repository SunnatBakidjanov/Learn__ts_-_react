import type { ConstmessagesType } from '../../../constants/constMessages';

type ErrorKey = {
	[K in keyof ConstmessagesType]: ConstmessagesType[K][keyof ConstmessagesType[K]];
}[keyof ConstmessagesType];
type ErrorsMessages = Partial<Record<ErrorKey, true>>;

type State = {
	name: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
	isLoading: boolean;
	errors: ErrorsMessages;
};

type Action =
	| { type: 'SET_FIELD'; field: keyof State; value: string }
	| { type: 'RESET_FORM' }
	| { type: 'SET_LOADER'; payload: boolean }
	| { type: 'SET_ERROR'; payload: ErrorsMessages };

type ActionTypes = {
	[K in Action['type']]: K;
};

type ServerErrorResponse = {
	message: string;
	errors?: ErrorKey[];
};

type RegisterSuccessResponse = {
	message: ErrorKey;
	user: {
		name: string;
		lastName: string;
		email: string;
	};
};

export type {
	State,
	Action,
	ActionTypes,
	ErrorsMessages,
	ErrorKey,
	ServerErrorResponse,
	RegisterSuccessResponse,
};
