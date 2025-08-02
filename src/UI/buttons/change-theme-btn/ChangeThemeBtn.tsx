import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { changeTheme } from '../../../redux/theme-slice/slice';
import { useSetDisabled } from '../../../hooks/useSetDisabled';

type ChangeThemeBtnProps = {
	text?: string;
	className?: string;
	children?: React.ReactNode;
};

export const ChangeThemeBtn = ({ text, children, className }: ChangeThemeBtnProps) => {
	const dispatch = useAppDispatch();
	const { toggleDisabled, isDisabled } = useSetDisabled();

	return (
		<button
			type="button"
			aria-label="text"
			className={classNames(className)}
			onClick={() => {
				toggleDisabled();
				dispatch(changeTheme());
			}}
			disabled={isDisabled}
		>
			{text}
			{children}
		</button>
	);
};
