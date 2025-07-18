import type { ChangeEventHandler } from 'react';

type LabelPasswordProps = {
	text: string;
	value?: string;
	placeholder: string;
	inputName: string;
	styleSize: '400';
	onChange: ChangeEventHandler<HTMLInputElement>;
};

export type { LabelPasswordProps };
