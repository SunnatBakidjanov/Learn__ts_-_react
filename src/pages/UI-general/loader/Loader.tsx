import type { LoaderProps } from './types/types';
import classNames from 'classnames';
import styles from './styles/loader.module.scss';

export const Loader = ({ loaderType }: LoaderProps) => {
	return (
		<span
			className={classNames({
				[styles.shadowRollong]: loaderType === 'shadowRolling',
			})}
		></span>
	);
};
