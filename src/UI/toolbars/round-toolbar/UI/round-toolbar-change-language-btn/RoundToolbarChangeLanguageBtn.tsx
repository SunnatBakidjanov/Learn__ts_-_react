import { ChangeLanguageBtn } from '../../../../buttons/change-language-btn/ChangeLanguageBtn';
import { IoLanguageSharp } from 'react-icons/io5';
import classNames from 'classnames';

type classNameMap = {
	btn?: string;
	img?: string;
};

type Props = {
	isOpen: boolean;
	className?: classNameMap;
};

export const RoundToolbarChangeLanguageBtn = ({ isOpen, className }: Props) => {
	return (
		<ChangeLanguageBtn
			className={classNames(
				'w-12 h-12 rounded-full flex items-center justify-center relative overflow-hidden bg-[var(--accent-color)] hover:bg-[var(--accent-secondary-color)] transition-all duration-400',
				!isOpen ? 'opacity-0' : '',
				className?.btn
			)}
		>
			<IoLanguageSharp className={className?.img} />
		</ChangeLanguageBtn>
	);
};
