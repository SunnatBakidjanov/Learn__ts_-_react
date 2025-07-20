import type { JSX } from 'react';

type Tool = {
	id: string;
	element?: JSX.Element;
};

type ToolbarProps = {
	styleUsePlace: 'auth';
	InitialDegree: number;
};

export type { Tool, ToolbarProps };
