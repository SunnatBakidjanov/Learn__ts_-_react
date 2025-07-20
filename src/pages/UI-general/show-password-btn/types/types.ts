import type { MouseEventHandler } from 'react';

type StyleUsePlace = 'labelBlockBtn';

type ShowPasswordBtnProps = {
	ariaLabel: string;
	styleUsePlace: StyleUsePlace;
	showPassword: boolean;
	onClick: MouseEventHandler<HTMLButtonElement>;
};

export type { ShowPasswordBtnProps };
