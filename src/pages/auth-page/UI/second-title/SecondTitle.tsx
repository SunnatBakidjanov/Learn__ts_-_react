import { useTranslation } from 'react-i18next';

import styles from './styles/second-title.module.scss';
import classNames from 'classnames';

export const SecondTitle = () => {
	const { t } = useTranslation('auth');

	return <h2 className={classNames(styles.root)}>{t('secondTitle')}</h2>;
};
