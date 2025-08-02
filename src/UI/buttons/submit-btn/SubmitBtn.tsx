import classNames from 'classnames';

type SubmitBtnProps = {
	text?: string | boolean;
	children?: React.ReactNode;
	className?: string;
	disabled?: boolean;
};

export const SubmitBtn = ({ text, children, className, disabled }: SubmitBtnProps) => {
	return (
		<button type="submit" disabled={disabled} className={classNames(className)}>
			{text}
			{children}
		</button>
	);
};
