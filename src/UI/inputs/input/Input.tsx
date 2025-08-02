import type { InputProps } from '../types/InputTypes';
import classNames from 'classnames';

export const Input = ({
	type,
	value,
	name,
	titleText,
	autoComplete = 'on',
	onChange,
	renderUnderline = true,
	placeholder,
	className = {},
	children,
}: InputProps) => {
	return (
		<div className={classNames(className.container)}>
			<p className={classNames(className.text)}>{titleText}</p>
			<label className={classNames('relative', className.label)}>
				<input
					className={classNames(className.input)}
					name={name}
					placeholder={placeholder}
					value={value}
					type={type}
					autoComplete={autoComplete}
					onChange={onChange}
					required={true}
				/>

				{renderUnderline && (
					<span className={classNames('absolute', className.underline)}></span>
				)}

				{children}
			</label>
		</div>
	);
};
