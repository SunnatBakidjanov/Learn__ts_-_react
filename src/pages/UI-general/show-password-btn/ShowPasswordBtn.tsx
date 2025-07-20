import classNames from 'classnames';
import type { ShowPasswordBtnProps } from './types/types';
import { IoEyeOutline } from 'react-icons/io5';
import style from './styles/show-password-btn.module.scss';

export const ShowPasswordBtn = ({
	ariaLabel,
	onClick,
	styleUsePlace,
	showPassword,
}: ShowPasswordBtnProps) => {
	return (
		<button
			className={classNames({
				[style.lableBlockBtn]: styleUsePlace === 'labelBlockBtn',
			})}
			type="button"
			aria-label={ariaLabel}
			onClick={onClick}
		>
			<IoEyeOutline
				className={classNames({
					[style.lableBlockImg]: styleUsePlace === 'labelBlockBtn',
				})}
			/>
			<span
				className={classNames(
					{
						[style.labelBlockLine]: styleUsePlace === 'labelBlockBtn',
					},
					!showPassword && {
						[style.labelBlockLineOpen]: styleUsePlace === 'labelBlockBtn',
					}
				)}
			></span>
		</button>
	);
};
