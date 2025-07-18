import { useShowPassword } from '../../../hooks/useShowPassword';
import type { ShowPasswordBtnProps } from './types/types';
import { FaEye } from 'react-icons/fa';

export const ShowPasswordBtn = ({ ariaLabel, onClick }: ShowPasswordBtnProps) => {
	return (
		<button type="button" aria-label={ariaLabel} onClick={onClick}>
			<FaEye />
		</button>
	);
};
