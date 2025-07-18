import type { ChangeEventHandler, HTMLInputTypeAttribute, MouseEventHandler } from 'react';

type LabelBlockProps = {
	placeholder: string;
	type: HTMLInputTypeAttribute | undefined;
	styleSize: '400';
	inputName: string | undefined;
	isRenderText?: boolean;
	text?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	value?: string;
	isShowPasswordEye?: boolean;
	isRequired?: boolean;
	autocomplete?: React.InputHTMLAttributes<HTMLInputElement>['autoComplete'];
};

export type { LabelBlockProps };
