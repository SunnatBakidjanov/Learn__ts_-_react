import type { InputProps } from '../types/InputTypes';
import { useSubmitFormStyles } from '../../../styles/submit-form/useSubmitFormStyles';
import { Input } from '../input/Input';
import { FaEye } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import { useSetDisabled } from '../../../hooks/useSetDisabled';

export const PasswordInput = ({
	autoComplete = 'on',
	value,
	name,
	renderUnderline,
	placeholder,
	titleText,
	onChange,
	className = {},
}: InputProps) => {
	const [showPassword, setShowPassword] = useState(false);
	const { isDisabled, toggleDisabled } = useSetDisabled();

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowPassword(false);
		}, 10000);

		return () => clearTimeout(timer);
	}, [showPassword]);

	return (
		<Input
			autoComplete={autoComplete}
			value={value}
			name={name}
			renderUnderline={renderUnderline}
			placeholder={placeholder}
			titleText={titleText}
			type={showPassword ? 'text' : 'password'}
			onChange={onChange}
			className={className}
		>
			<button
				className={
					'relative h-full w-[calc(20px+1rem)] object-cover text-[var(--primary-color)] opacity-50 flex items-center justify-center transition-color'
				}
				type="button"
				onClick={() => {
					setShowPassword(prev => !prev);
					toggleDisabled(200);
				}}
				disabled={isDisabled}
			>
				<FaEye className="w-[20px] h-[20px]" />
				<span
					className={classNames(
						'absolute h-[3px] bg-[var(--primary-color)] rotate-45 transition-all duration-400 ease-out',
						showPassword ? 'w-[0]' : 'w-[75%]'
					)}
				/>
			</button>
		</Input>
	);
};
