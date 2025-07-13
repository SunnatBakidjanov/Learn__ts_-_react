import type { SubmitBtnProps } from './types/types';
import classNames from 'classnames';
import styles from './styles/submit-btn.module.scss';

export const SubmitBtn = ({
	type = 'button',
	ariaLabel,
	text,
	children,
	styleUsePlace,
	isDisabled = false,
}: SubmitBtnProps) => {
	return (
		<button
			className={classNames(styles.root, {
				[styles.auth]: styleUsePlace === 'auth',
			})}
			type={type}
			aria-label={ariaLabel}
			disabled={isDisabled}
		>
			{children ?? text}
		</button>
	);
};
