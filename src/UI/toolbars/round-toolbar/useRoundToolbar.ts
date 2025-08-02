import { useState, useRef, useEffect } from 'react';
import { useSetDisabled } from '../../../hooks/useSetDisabled';

export const useRoundToolbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { isDisabled, toggleDisabled } = useSetDisabled();
	const toolbarRef = useRef<HTMLDivElement | null>(null);

	const toggleOpen = () => setIsOpen(prev => !prev);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			const target = event.target as Node;
			if (toolbarRef.current && !toolbarRef.current.contains(target)) {
				setIsOpen(false);
			}
		}

		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	}, []);

	return { isOpen, isDisabled, toggleDisabled, toolbarRef, toggleOpen };
};
