import { useEffect, useRef, useState } from 'react';

export const useSetDisabled = () => {
	const [isDisabled, setDisabled] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const toggleDisabled = (time = 400) => {
		setDisabled(true);

		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}

		timerRef.current = setTimeout(() => {
			setDisabled(false);
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
