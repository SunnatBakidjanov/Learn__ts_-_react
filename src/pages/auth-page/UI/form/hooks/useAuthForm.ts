import { useReducer } from 'react';
import type {
	AuthFormState,
	ReducerAction,
	AllowedFields,
	RegisterResponse,
	ErrorMessages,
} from '../types/types';
import { validateAuthForm } from '../scripts/validateAuthForm';
import type { AxiosError } from 'axios';
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
		case 'SET_FIELD':
			return { ...state, [action.field]: action.payload };

		case 'SET_LOADER':
			return { ...state, isLoading: action.payload };

		case 'CLEAR_FORM':
			return { ...initialState };

		case 'SHOW_ERRORS':
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
		dispatch({ type: 'SET_FIELD', field, payload });
		dispatch({ type: 'SHOW_ERRORS', payload: undefined });
	};

	const handleSubmit = async () => {
		const error = validateAuthForm(state);

		dispatch({ type: 'SHOW_ERRORS', payload: error });

		if (error !== undefined) {
			return { sucess: false };
		}

		dispatch({ type: 'SET_LOADER', payload: true });

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

			dispatch({ type: 'CLEAR_FORM' });
			dispatch({ type: 'SHOW_ERRORS', payload: data.message });
		} catch (error) {
			const err = error as AxiosError<{ message: ErrorMessages }>;

			if (err.response?.data?.message) {
				const SERVER_MESSAGES: ErrorMessages[] = ['EMAIL_EXISTS'];
				const serverMessage = err.response.data.message;

				if (SERVER_MESSAGES.includes(serverMessage)) {
					dispatch({ type: 'SHOW_ERRORS', payload: serverMessage });
				} else {
					dispatch({ type: 'SHOW_ERRORS', payload: 'UNKNOW_ERROR' });
				}
			} else {
				dispatch({ type: 'SHOW_ERRORS', payload: 'UNKNOW_ERROR' });
			}
		} finally {
			dispatch({ type: 'SET_LOADER', payload: false });
		}
	};

	return {
		handleSubmit,
		setField,
		state,
	};
};
