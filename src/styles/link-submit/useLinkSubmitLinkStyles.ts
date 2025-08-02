import styles from './link-sumbit.module.css';
import classNames from 'classnames';

export const useLinkSubmitLinkStyles = () => {
	const submitLinkClassNames = {
		container:
			'transition-bg-color w-full p-2 mt-6 rounded-[0.5rem] bg-[var(--primary-transparent)]',
		block: 'flex gap-x-2.5 gap-y-1.5 items-center justify-center',
		text: 'furore-regular transition-color text-[1.2rem] text-[var(--primary-color)] text-center tracking-wide',
		linkText: classNames(
			'furore-regular relative flex justify-center text-[1.2rem] text-[var(--accent-color)] text-center tracking-wide hover:opacity-60',
			styles.link
		),
		underline: classNames(
			'absolute bottom-0 transition-[width] duration-200 will-change-auto h-0.5 bg-[var(--accent-color)]',
			styles.underline
		),
	};

	return { submitLinkClassNames };
};
