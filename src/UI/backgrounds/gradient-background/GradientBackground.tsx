import { useAppSelector } from '../../../redux/store';
import styles from './main-background.module.css';
import classNames from 'classnames';

export const GradientBackground = () => {
	const theme = useAppSelector(state => state.theme.currentTheme);

	const rootClassName =
		'fixed z-[var(--gradient-bg-color-index)] rounded-full inset-0 blur-[350px] overflow-hidden';

	return (
		<>
			<div
				className={classNames(
					rootClassName,
					styles.darkTheme,
					theme === 'dark' ? 'opacity-100' : 'opacity-0'
				)}
			></div>

			<div
				className={classNames(
					rootClassName,
					styles.lightTheme,
					theme === 'light' ? 'opacity-100' : 'opacity-0'
				)}
			></div>
		</>
	);
};
