import { ChangeThemeBtn } from '../../../../buttons/change-theme-btn/ChangeThemeBtn';
import { useAppSelector } from '../../../../../redux/store';
import { GiMoonBats } from 'react-icons/gi';
import { CgSun } from 'react-icons/cg';
import classNames from 'classnames';

type classNameMap = {
	btn?: string;
	img?: string;
};

type Props = {
	isOpen: boolean;
	className?: classNameMap;
};

export const RoundToolbarChangeThemeBtn = ({ isOpen, className }: Props) => {
	const theme = useAppSelector(state => state.theme.currentTheme);

	return (
		<ChangeThemeBtn
			className={classNames(
				'w-12 h-12 rounded-full flex items-center justify-center relative overflow-hidden bg-[var(--accent-color)] hover:bg-[var(--accent-secondary-color)] transition-all duration-400',
				!isOpen ? 'opacity-0' : '',
				className?.btn
			)}
		>
			<CgSun
				className={classNames(
					className?.img,
					'absolute transition-transform duration-300 ease-out',
					theme === 'light' ? 'delay-200' : 'transform translate-x-[150%]'
				)}
			/>
			<GiMoonBats
				className={classNames(
					className?.img,
					'absolute transition-transform duration-300 ease-out',
					theme === 'light' ? 'transform translate-x-[-150%]' : 'delay-200'
				)}
			/>
		</ChangeThemeBtn>
	);
};
