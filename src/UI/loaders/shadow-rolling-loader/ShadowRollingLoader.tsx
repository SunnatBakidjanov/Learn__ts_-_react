import classNames from 'classnames';
import styles from './shadow-rolling-loader.module.css';

export const ShadowRoallingLoader = ({ className }: { className?: string }) => {
	return <span className={classNames(styles.shadowRollong, className)}></span>;
};
