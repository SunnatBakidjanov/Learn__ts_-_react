import style from './styles/change-theme-btn.module.scss';
import classNames from 'classnames';
import { useSetDisabled } from '../../../hooks/useSetDisabled';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { toggleTheme } from '../../../redux/theme-slice/slice';
import { FaSun, FaMoon } from 'react-icons/fa';
import type { ChangeThemeBtnProps } from './types/types';

export const ChangeThemeBtn = ({ className }: ChangeThemeBtnProps) => {
	const dispatch = useAppDispatch();
	const { isDisabled, toggleDisabled } = useSetDisabled();
	const theme = useAppSelector(state => state.theme.currentTheme);

	return (
		<button
			type="button"
			className={classNames(className, style.button)}
			onClick={() => {
				toggleDisabled();
				dispatch(toggleTheme());
			}}
			disabled={isDisabled}
		>
			<FaSun
				className={classNames(
					style.iconRoot,
					style.iconSun,
					theme === 'light' ? style.iconSunOpen : ''
				)}
			/>

			<FaMoon
				className={classNames(
					style.iconRoot,
					style.iconMoon,
					theme === 'dark' ? style.iconMoonOpen : ''
				)}
			/>
		</button>
	);
};
