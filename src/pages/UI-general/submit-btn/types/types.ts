import type { ReactNode } from 'react';

type SubmitBtnProps = {
	type?: 'button' | 'submit' | 'reset';
	text?: string;
	ariaLabel: string;
	children?: ReactNode;
	styleUsePlace: string;
	isDisabled: boolean;
};

export type { SubmitBtnProps };
