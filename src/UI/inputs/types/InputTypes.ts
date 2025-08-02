type InputClassNamesMap = {
	container?: string;
	label?: string;
	text?: string;
	input?: string;
	underline?: string;
};

type InputProps = {
	type?: React.HTMLInputTypeAttribute;
	value: string;
	name: string;
	titleText?: string;
	placeholder?: string;
	autoComplete?: React.HTMLInputAutoCompleteAttribute;
	className?: InputClassNamesMap;
	children?: React.ReactNode;
	renderUnderline?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type { InputClassNamesMap, InputProps };
