import classNames from 'classnames';
import styles from './styles/main-title.module.scss';

type MainTitleProps = {
	text?: string;
	styleUsePlace?: string;
};

export const MainTitle = ({ text, styleUsePlace }: MainTitleProps) => {
	return (
		<h1
			className={classNames(styles.root, {
				[styles.auth]: styleUsePlace === 'auth',
			})}
		>
			{text}
		</h1>
	);
};
