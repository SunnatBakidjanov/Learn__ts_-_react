import { useReducer } from 'react';
import type { AuthFormState, ReducerAction, AllowedFields, RegisterResponse } from '../types/types';
import { validateAuthForm } from '../scripts/validateAuthForm';
import { ACTIONS } from '../scripts/actionConstants';
import axios from 'axios';

const initialState: AuthFormState = {
	name: '',
	email: '',
	lastName: '',
	password: '',
	repeatPassword: '',
	errorMessage: undefined,
	isLoading: false,
};

const reducer: React.Reducer<AuthFormState, ReducerAction> = (state, action) => {
	switch (action.type) {
		case ACTIONS.SET_FIELD:
			return { ...state, [action.field]: action.payload };

		case ACTIONS.SET_LOADER:
			return { ...state, isLoading: action.payload };

		case ACTIONS.CLEAR_FORM:
			return { ...initialState };

		case ACTIONS.SHOW_ERRORS:
			return {
				...state,
				errorMessage: action.payload,
			};

		default:
			return state;
	}
};

export const useAuthform = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const setField = (field: AllowedFields, payload: string) => {
		dispatch({ type: ACTIONS.SET_FIELD, field, payload });
		dispatch({ type: ACTIONS.SHOW_ERRORS, payload: 'SUCCESS' });
	};

	const handleSubmit = async () => {
		const error = validateAuthForm(state);

		dispatch({ type: ACTIONS.SHOW_ERRORS, payload: error || 'SUCCESS' });

		if (error !== undefined) {
			return { sucess: false };
		}

		dispatch({ type: ACTIONS.SET_LOADER, payload: true });

		try {
			const { data } = await axios.post<RegisterResponse>(
				'http://localhost:3000/api/users/register',
				{
					email: state.email,
					name: state.name,
					lastName: state.lastName,
					password: state.password,
				}
			);

			dispatch({ type: ACTIONS.CLEAR_FORM });
		} catch (error) {
			const err = error as Error;
			console.error(err.message);
		} finally {
			dispatch({ type: ACTIONS.SET_LOADER, payload: false });
		}
	};

	return {
		handleSubmit,
		setField,
		dispatch,
		state,
	};
};
