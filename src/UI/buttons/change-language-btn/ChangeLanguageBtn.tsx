import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

type ChangeLanguageBtnProps = {
	ariaLabel?: string;
	className?: string;
	children?: React.ReactNode;
};

export const ChangeLanguageBtn = ({ ariaLabel, children, className }: ChangeLanguageBtnProps) => {
	const { i18n } = useTranslation();
	const changeLanguage = () => {
		const currentLang = i18n.language;
		const lang = currentLang === 'ru' ? 'en' : 'ru';
		i18n.changeLanguage(lang);
	};

	return (
		<button
			type="button"
			aria-label={ariaLabel}
			onClick={changeLanguage}
			className={classNames(className)}
		>
			{children}
		</button>
	);
};
