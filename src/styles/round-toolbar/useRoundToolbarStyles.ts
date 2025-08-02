import { useAppSelector } from '../../redux/store';
import classNames from 'classnames';
import styles from './round-toolbar-styles.module.css';

export const useRoundToolbarStyles = ({ isOpen }: { isOpen: boolean }) => {
	const toolbarImgClassName = classNames(
		'w-1/2 h-1/2 text-[var(--same-white)] transition-all duration-400 ease-out',
		isOpen ? styles.toolbarOpen : styles.toolbar
	);

	const toolbarBtnClassName = classNames(
		'w-12 h-12 rounded-full flex items-center justify-center relative bg-[var(--accent-color)] hover:bg-[var(--accent-secondary-color)] transition-all duration-400',
		!isOpen ? styles.waveAnimation : '',
		styles.hoverShadow
	);

	const toolClassName = classNames(
		'w-12 h-12 rounded-full flex items-center justify-center relative overflow-hidden bg-[var(--accent-color)] hover:bg-[var(--accent-secondary-color)] transition-all duration-400',
		!isOpen ? 'opacity-0 pointer-events-none' : '',
		styles.hoverShadow
	);

	const toolImgClassName = 'text-[var(--same-white)] w-1/2 h-1/2';

	return { toolClassName, toolImgClassName, toolbarImgClassName, toolbarBtnClassName };
};
