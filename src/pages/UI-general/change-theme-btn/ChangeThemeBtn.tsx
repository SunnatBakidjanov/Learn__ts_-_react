import sunImg from '../../../assets/imgs/webp/changeThemeSun.webp';
import moonImg from '../../../assets/imgs/webp/changeThemeMoon.webp';
import { handleChangeTheme } from './scripts/handleChangeTheme';
import style from './styles/change-theme-btn.module.scss';
import classNames from 'classnames';
import { useSetDisabled } from '../../../hooks/useSetDisabled';

export const ChangeThemeBtn = () => {
	const { isDisabled, toggleDisabled } = useSetDisabled();

	return (
		<button
			type="button"
			className={classNames(style.button)}
			onClick={() => {
				handleChangeTheme();
				toggleDisabled(250);
			}}
			disabled={isDisabled}
		>
			<img src={sunImg} alt="" className={classNames(style.imgSun)} />
			<img src={moonImg} alt="" className={classNames(style.imgMoon)} />
		</button>
	);
};
