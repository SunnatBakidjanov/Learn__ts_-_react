import classNames from 'classnames';
import styles from './submit-form-styles.module.css';
import type { InputClassNamesMap } from '../../UI/inputs/types/InputTypes';

export const useSubmitFormStyles = () => {
	const inputClasses: InputClassNamesMap = {
		container: 'flex flex-col gap-y-[0.3rem]',
		text: 'transition-color furore-regular text-[var(--primary-color)] text-[1.3rem] pl-[0.5rem]',
		label: classNames(
			styles.label,
			'transition-bg-color h-[45px] tinos-regular flex justify-center items-center w-full bg-[var(--primary-transparent)] rounded-[0.5rem] cursor-text'
		),
		input: classNames(
			'tinos-regular w-full px-[0.8rem] h-full text-[1.1rem] text-[var(--primary-color)] opacity-100 rounded-[0.5rem]',
			styles.input
		),
		underline: styles.inputUnderline,
	};

	const formClasses = classNames(
		'flex flex-col w-full rounded-xl py-10 px-8 gap-y-4 bg-[var(--primary-transparent)]',
		styles.form
	);

	const mainTitleClasses =
		'furore-regular transition-color text-[2.25rem] mb-[0.5rem] text-[var(--primary-color)]';

	const submitBtnClasses = classNames(
		'furore-regular h-10 rounded-lg text-[1.2rem] text-[var(--same-white)] tracking-wide hover:tracking-widest overflow-hidden flex justify-center items-center bg-[var(--accent-color)] hover:bg-[var(--accent-secondary-color)]',
		styles.submitBtn
	);

	const inputContainerClasses = 'flex flex-col';

	const imgClassName =
		'pointer-events-none w-[20px] h-full object-cover text-[var(--primary-color)] opacity-50 transition-all duration-400 mr-[0.5rem]';

	return {
		inputClasses,
		formClasses,
		mainTitleClasses,
		submitBtnClasses,
		inputContainerClasses,
		imgClassName,
	};
};
