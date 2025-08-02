import { useEffect, useState, useRef } from 'react';
import type { State } from '../../types/authFormTypes';

const calculateStrength = (password: string): number => {
	if (!password || password.trim().length === 0) return 0;

	let score = 0;
	const length = password.length;

	const hasUpperCase = /[A-Z]/.test(password);
	const hasLowerCase = /[a-z]/.test(password);
	const hasDigit = /\d/.test(password);
	const hasSymbol = /[\W_]/.test(password);

	const variationCount = [hasUpperCase, hasLowerCase, hasDigit, hasSymbol].filter(Boolean).length;

	score += Math.min(40, length * 4);

	score += variationCount * 15;

	return Math.min(score, 100);
};

export const PasswordStrengthMeter = ({ password }: Pick<State, 'password'>) => {
	const [progress, setProgress] = useState(0);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		const strength = calculateStrength(password);
		setProgress(strength);
		setHeight(password.trim().length === 0 ? 0 : 5);
	}, [password]);

	const getGradient = (progress: number) => {
		if (progress <= 33)
			return `linear-gradient(to left, rgb(250, 250, 0) ${progress / 2}%, rgb(255, 0, 0) ${progress}%)`;
		if (progress < 60)
			return `linear-gradient(to left, rgb(250, 250, 0) ${progress / 2}%, rgb(255, 0, 0) ${progress}%)`;
		return `linear-gradient(to left, rgb(33, 163, 0) 0%, rgb(250, 250, 0) ${progress / 2}%, rgb(255, 0, 0) ${progress}%)`;
	};

	return (
		<div
			className="w-full flex justify-center mt-1 transition-all duration-300 ease-out"
			style={{ marginTop: progress === 0 ? '0' : '0.5rem' }}
		>
			<div
				className="w-[calc(100%-0.7rem)] rounded-2xl bg-[var(--primary-transparent)] overflow-hidden transition-all duration-400 ease-out"
				style={{ height: `${height}px` }}
			>
				<div
					className="h-full rounded-2xl transition-all duration-500 ease-out"
					style={{
						width: `${progress}%`,
						background: getGradient(progress),
					}}
				/>
			</div>
		</div>
	);
};
