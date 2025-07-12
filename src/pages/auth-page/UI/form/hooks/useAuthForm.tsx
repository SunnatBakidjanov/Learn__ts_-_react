import { useReducer } from 'react';
import type { AuthFormState, ReducerAction, AllowedFields } from '../types/types';
import { ACTIONS } from '../scripts/actionConstants';
import axios from 'axios';

const initialState: AuthFormState = {
	name: '',
	email: '',
	lastName: '',
	password: '',
	repeatPassword: '',
	isLoading: false,
};

const reducer = (state: AuthFormState, action: ReducerAction) => {
	switch (action.type) {
		case ACTIONS.SET_FIELD:
			return { ...state, [action.field]: action.payload };

		case ACTIONS.SET_LOADER:
			return { ...state, isLoading: action.payload };

		case ACTIONS.CLEAR_FORM:
			return { ...initialState };

		default:
			return state;
	}
};

export const useAuthform = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const setField = (field: AllowedFields, payload: string) => {
		dispatch({ type: ACTIONS.SET_FIELD, field, payload });
	};

	const handleSubmit = async () => {
		dispatch({ type: ACTIONS.SET_LOADER, payload: true });

		try {
			const res = await axios.post('http://localhost:3000/api/users/register', {
				email: state.email,
				name: state.name,
				lastName: state.lastName,
				password: state.password,
			});

			dispatch({ type: ACTIONS.CLEAR_FORM });
		} catch (error) {
			const err = error as Error;
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
