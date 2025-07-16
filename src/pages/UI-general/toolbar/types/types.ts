import type { JSX } from 'react';

type Tool = {
	id: string;
	element?: JSX.Element;
};

type ToolbarProps = {
	styleUsePlace: 'auth';
};

export type { Tool, ToolbarProps };
