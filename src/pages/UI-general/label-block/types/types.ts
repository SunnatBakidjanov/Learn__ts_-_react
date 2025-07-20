import type {
	ChangeEventHandler,
	HTMLInputTypeAttribute,
	MouseEventHandler,
	ReactNode,
} from 'react';

type LabelBlockProps = {
	placeholder: string;
	type: HTMLInputTypeAttribute | undefined;
	children?: ReactNode;
	styleSize: '400';
	inputName: string | undefined;
	isRenderText?: boolean;
	text?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	value?: string;
	isRequired?: boolean;
	autocomplete?: React.InputHTMLAttributes<HTMLInputElement>['autoComplete'];
};

export type { LabelBlockProps };
