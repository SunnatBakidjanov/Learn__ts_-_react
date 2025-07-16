import { useState, useEffect, useRef } from 'react';

export const useToolbar = () => {
	const [open, setOpen] = useState(false);
	const wrapperRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			const target = e.target as Node;
			if (wrapperRef.current && !wrapperRef.current.contains(target)) {
				setOpen(false);
			}
		}

		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	}, []);

	const toggleToolbar = () => {
		setOpen(prev => !prev);
	};

	return { open, toggleToolbar, wrapperRef };
};
