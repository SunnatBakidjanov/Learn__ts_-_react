import { useTranslation } from 'react-i18next';
import { MainTitle } from '../UI-general/main-title/MainTitle';
import { ToggleThemeButton } from '../UI-general/toggle-theme-button/ToggleThemeButton';

import styles from './styles/auth-root.module.scss';
import classNames from 'classnames';

export const Auth = () => {
	const { t } = useTranslation('auth');

	return (
		<section className={classNames(styles.section)}>
			<div className={classNames(styles.wrapper)}>
				<div className={classNames(styles.innerTitle)}>
					<MainTitle text={t('mainTitle')} styleUsePlace="auth" />

					<span className={styles.blink}></span>
				</div>

				<ToggleThemeButton />
			</div>
		</section>
	);
};
