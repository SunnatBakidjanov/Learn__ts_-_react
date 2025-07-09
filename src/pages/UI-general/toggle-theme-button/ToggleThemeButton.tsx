import { useSetDisabled } from '../../../hooks/useSetDisabled';
import { useToggleTheme } from './hooks/useToggleTheme';

export const ToggleThemeButton = () => {
	const toggleTheme = useToggleTheme();
	const { isDisabled, toggleDisabled } = useSetDisabled();

	return (
		<button
			type="button"
			onClick={() => {
				toggleTheme();
				toggleDisabled();
			}}
			disabled={isDisabled}
		>
			Нажми что бы цвет изменился
		</button>
	);
};
