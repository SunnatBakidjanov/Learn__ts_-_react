import classNames from 'classnames';
import styles from './styles/background-accent.module.scss';
import type { BackgroundAccentProps } from './types/types';

export const BackgroundAccent = ({ styleUsePlace }: BackgroundAccentProps) => {
	return (
		<div
			className={classNames(styles.root, {
				[styles.auth]: styleUsePlace === 'auth',
			})}
		></div>
	);
};
