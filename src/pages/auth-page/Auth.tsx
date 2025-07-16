import { Form } from './UI/form/Form';
import { SecondTitle } from './UI/second-title/SecondTitle';
import { Title } from './UI/title/Title';
import { BackgroundAccent } from '../UI-general/background-accent/BackgroundAccent';

import styles from './styles/auth-root.module.scss';
import classNames from 'classnames';
import { Toolbar } from '../UI-general/toolbar/Toolbar';

export const Auth = () => {
	return (
		<div className={styles.page}>
			<main className={classNames(styles.main)}>
				<section className={classNames(styles.section)}>
					<div className={classNames(styles.wrapper)}>
						<div className={classNames(styles.innerTitle)}>
							<SecondTitle />

							<span className={styles.blink}></span>
						</div>

						<div className={classNames(styles.innerForm)}>
							<Title />

							<Form />
						</div>
					</div>
				</section>
			</main>

			<Toolbar styleUsePlace="auth" />
			<BackgroundAccent styleUsePlace="auth" />
		</div>
	);
};
