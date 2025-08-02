import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { validateAuthForm } from '../scripts/validateAuthForm';
import type {
	State,
	ActionTypes,
	Action,
	ErrorsMessages,
	ErrorKey,
	ServerErrorResponse,
	RegisterSuccessResponse,
} from '../types/authFormTypes';
import type { AxiosError } from 'axios';

const initialState: State = {
	name: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
	isLoading: false,
	errors: {},
};

const ACTIONS: ActionTypes = {
	SET_FIELD: 'SET_FIELD',
	RESET_FORM: 'RESET_FORM',
	SET_LOADER: 'SET_LOADER',
	SET_ERROR: 'SET_ERROR',
};

const reducer: React.Reducer<State, Action> = (state, action) => {
	switch (action.type) {
		case ACTIONS.SET_FIELD:
			return {
				...state,
				[action.field]: action.value,
			};

		case ACTIONS.SET_LOADER:
			return {
				...state,
				isLoading: action.payload,
			};

		case ACTIONS.RESET_FORM:
			return {
				...state,
				name: '',
				lastName: '',
				email: '',
				password: '',
				confirmPassword: '',
			};

		case ACTIONS.SET_ERROR:
			return {
				...state,
				errors: action.payload,
			};

		default:
			return state;
	}
};

export const useAuthForm = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const validateErrors = validateAuthForm(state);

	const setField = (field: keyof State, value: string) => {
		dispatch({ type: ACTIONS.SET_FIELD, field, value });
	};

	const setLoader = (isLoading: boolean) => {
		dispatch({ type: ACTIONS.SET_LOADER, payload: isLoading });
	};

	const resetForm = () => {
		dispatch({ type: ACTIONS.RESET_FORM });
	};

	const setError = (errors: ErrorsMessages | {}) => {
		dispatch({ type: ACTIONS.SET_ERROR, payload: errors });
	};

	const getFirstError = (...keys: ErrorKey[]): ErrorKey | undefined => {
		return keys.find(key => state.errors[key]);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setError(validateErrors);
		}, 1000);

		return () => clearTimeout(timer);
	}, [state.name, state.lastName, state.password, state.confirmPassword]);

	const submitForm = async () => {
		setLoader(true);

		if (Object.keys(validateErrors).length > 0) {
			setError(validateErrors);
			setLoader(false);
			return { success: false };
		} else {
			setError({});
		}

		try {
			const res = await axios.post<RegisterSuccessResponse>(
				'http://localhost:3000/api/users/register',
				{
					name: state.name,
					lastName: state.lastName,
					email: state.email,
					password: state.password,
				}
			);

			resetForm();
			return { success: true };
		} catch (error) {
			const err = error as AxiosError<ServerErrorResponse>;
			const errors = err.response?.data?.errors;

			if (Array.isArray(errors) && errors.every(e => typeof e === 'string')) {
				setError(Object.fromEntries(errors.map(key => [key, true])));
			} else {
				setError({ SERVER_ERROR: true });
			}

			return { success: false };
		} finally {
			setLoader(false);
		}
	};

	return { state, setField, submitForm, getFirstError };
};
10;
