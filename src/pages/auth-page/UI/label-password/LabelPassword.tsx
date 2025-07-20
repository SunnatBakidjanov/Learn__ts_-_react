import { useShowPassword } from '../../../../hooks/useShowPassword';
import { LabelBlock } from '../../../UI-general/label-block/LabelBlock';
import { ShowPasswordBtn } from '../../../UI-general/show-password-btn/ShowPasswordBtn';
import type { LabelPasswordProps } from './types/types';

export const LabelPassword = ({
	text,
	placeholder,
	onChange,
	value,
	inputName,
	styleSize,
}: LabelPasswordProps) => {
	const { showPassword, handleShowPassword } = useShowPassword();
	const inputType = showPassword ? 'text' : 'password';

	return (
		<>
			<LabelBlock
				placeholder={placeholder}
				type={inputType}
				isRenderText={true}
				text={text}
				styleSize={styleSize}
				inputName={inputName}
				value={value}
				onChange={onChange}
				autocomplete="new-password"
			>
				<ShowPasswordBtn
					styleUsePlace="labelBlockBtn"
					ariaLabel={text}
					showPassword={showPassword}
					onClick={handleShowPassword}
				/>
			</LabelBlock>
		</>
	);
};
