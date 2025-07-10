import type { ReactNode } from 'react';

import classNames from 'classnames';
import styles from './styles/submit-btn.module.scss';

type SubmitBtnProps = {
	type?: 'button' | 'submit' | 'reset';
	text?: string;
	ariaLabel: string;
	children?: ReactNode;
	styleUsePlace: string;
};

export const SubmitBtn = ({
	type = 'button',
	ariaLabel,
	text,
	children,
	styleUsePlace,
}: SubmitBtnProps) => {
	return (
		<button
			className={classNames(styles.root, {
				[styles.auth]: styleUsePlace === 'auth',
			})}
			type={type}
			aria-label={ariaLabel}
		>
			{children ?? text}
		</button>
	);
};
