import classNames from 'classnames';
import type { ValidationMessageProps } from './types/types';
import styles from './styles/validation-message.module.scss';

export const ValidatinoMessage = ({ styleUsePlace, text }: ValidationMessageProps) => {
	return (
		<p
			className={classNames({
				[styles.authMessages]: styleUsePlace === 'auth',
			})}
		>
			{text}
		</p>
	);
};
