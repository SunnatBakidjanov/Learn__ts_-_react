import { useEffect, useRef, useState } from 'react';

export const useSetDisabled = () => {
	const [isDisabled, setDisabled] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const toggleDisabled = (time: 400 | number = 400) => {
		setDisabled(prev => !prev);

		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}

		timerRef.current = setTimeout(() => {
			setDisabled(prev => !prev);
		}, time);
	};

	useEffect(() => {
		return () => {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}
		};
	}, []);

	return { isDisabled, toggleDisabled };
};
