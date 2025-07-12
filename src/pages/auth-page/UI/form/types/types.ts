import { ACTIONS } from '../scripts/actionConstants';

type AuthFormState = {
	name: string;
	email: string;
	lastName: string;
	password: string;
	repeatPassword?: string;
	isLoading?: boolean;
};

type AllowedFields = 'name' | 'lastName' | 'email' | 'password' | 'repeatPassword';

type SetFieldAction = {
	type: typeof ACTIONS.SET_FIELD;
	field: AllowedFields;
	payload: string;
};

type ClearFormAction = {
	type: typeof ACTIONS.CLEAR_FORM;
};

type SetLoaderAction = {
	type: typeof ACTIONS.SET_LOADER;
	payload: boolean;
};

type ReducerAction = SetFieldAction | ClearFormAction | SetLoaderAction;

export type { ReducerAction, AuthFormState, AllowedFields };
