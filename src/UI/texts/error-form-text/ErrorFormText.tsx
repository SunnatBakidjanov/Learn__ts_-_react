import classNames from 'classnames';
import styles from './error-form-text.module.css';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { ConstmessagesType } from '../../../constants/constMessages';
import { useAppSelector } from '../../../redux/store';

type ErrorKey = {
	[K in keyof ConstmessagesType]: ConstmessagesType[K][keyof ConstmessagesType[K]];
}[keyof ConstmessagesType];

type ErrorFormTextProps = {
	errorKey?: ErrorKey;
	className?: string;
};

export const ErrorFormText = ({ errorKey, className }: ErrorFormTextProps) => {
	const { t } = useTranslation('auth');
	const refEl = useRef<HTMLParagraphElement | null>(null);
	const theme = useAppSelector(state => state.theme.currentTheme);
	const [height, setHeight] = useState(0);

	const translatedText = errorKey ? t(`form.errorsMessages.${errorKey}`) : '';

	useEffect(() => {
		if (refEl.current && translatedText.length > 0) {
			const scrollHeight = refEl.current.scrollHeight;
			setHeight(scrollHeight);
		} else {
			setHeight(0);
		}
	}, [translatedText]);

	return (
		<p
			ref={refEl}
			className={classNames(
				'relative left-2 tracking-[0.7px] overflow-hidden furore-regular',
				theme === 'light' ? 'text-red-600' : 'text-amber-500',
				className,
				styles.root
			)}
			style={{ height: `${height}px`, marginTop: height === 0 ? '0' : '0.3rem' }}
		>
			{translatedText}
		</p>
	);
};
