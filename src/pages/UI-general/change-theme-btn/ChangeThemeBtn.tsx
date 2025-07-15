import sunImg from '../../../assets/imgs/webp/changeThemeSun.webp';
import moonImg from '../../../assets/imgs/webp/changeThemeMoon.webp';
import style from './styles/change-theme-btn.module.scss';
import classNames from 'classnames';
import { useSetDisabled } from '../../../hooks/useSetDisabled';
import { useAppDispatch } from '../../../redux/store';
import { toggleTheme } from '../../../redux/theme-slice/themeSlice';

export const ChangeThemeBtn = () => {
	const dispatch = useAppDispatch();
	const { isDisabled, toggleDisabled } = useSetDisabled();

	return (
		<button
			type="button"
			className={classNames(style.button)}
			onClick={() => {
				toggleDisabled(250);
				dispatch(toggleTheme());
			}}
			disabled={isDisabled}
		>
			<img src={sunImg} alt="" className={classNames(style.imgSun)} />
			<img src={moonImg} alt="" className={classNames(style.imgMoon)} />
		</button>
	);
};
