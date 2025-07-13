import { ACTIONS } from '../scripts/actionConstants';

type AuthFormState = {
	name: string;
	email: string;
	lastName: string;
	password: string;
	repeatPassword?: string;
	isLoading: boolean;
};

type AllowedFields = 'name' | 'lastName' | 'email' | 'password' | 'repeatPassword';

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
	| { type: typeof ACTIONS.SET_LOADER; payload: boolean };

export type { ReducerAction, AuthFormState, AllowedFields, RegisterResponse };
