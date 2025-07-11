import { Form } from './UI/form/Form';
import { useSetCurrentTheme } from '../../hooks/useSetCurrentTheme';
import { SecondTitle } from './UI/second-title/SecondTitle';

import styles from './styles/auth-root.module.scss';
import classNames from 'classnames';

export const Auth = () => {
	useSetCurrentTheme();

	return (
		<section className={classNames(styles.section)}>
			<div className={classNames(styles.wrapper)}>
				<div className={classNames(styles.innerTitle)}>
					<SecondTitle />

					<span className={styles.blink}></span>
				</div>

				<div className={classNames(styles.innerForm)}>
					<Form />
				</div>
			</div>
		</section>
	);
};
