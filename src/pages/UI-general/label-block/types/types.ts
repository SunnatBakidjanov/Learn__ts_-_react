import type { ChangeEventHandler } from 'react';

type LabelBlockProps = {
	placeholder: string;
	type: string;
	styleSize: string;
	inputName: string;
	isRenderText?: boolean;
	text?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	value?: string;
	isRequired?: boolean;
	autocomplete?: React.InputHTMLAttributes<HTMLInputElement>['autoComplete'];
};

export type { LabelBlockProps };
