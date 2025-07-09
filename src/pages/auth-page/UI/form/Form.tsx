import { useTranslation } from 'react-i18next';
import { LabelBlock } from '../../../UI-general/label-block/LabelBlock';
import { Title } from '../title/Title';

import styles from '../form/styles/form.module.scss';
import classNames from 'classnames';

export const Form = () => {
	const { t } = useTranslation();

	return (
		<form className={classNames(styles.form)}>
			<Title />

			<LabelBlock
				placeholder={t('form.placeholder.name')}
				type="text"
				isRenderText={true}
				text={t('form.text.name')}
				styleSize="400"
				inputName="name"
			/>

			<LabelBlock
				placeholder={t('form.placeholder.lastName')}
				type="text"
				isRenderText={true}
				text={t('form.text.lastName')}
				styleSize="400"
				inputName="lastName"
			/>

			<LabelBlock
				placeholder={t('form.placeholder.email')}
				type="text"
				isRenderText={true}
				text={t('form.text.email')}
				styleSize="400"
				inputName="email"
			/>

			<LabelBlock
				placeholder={t('form.placeholder.password')}
				type="text"
				isRenderText={true}
				text={t('form.text.password')}
				styleSize="400"
				inputName="password"
			/>

			<LabelBlock
				placeholder={t('form.placeholder.repeatPassword')}
				type="text"
				isRenderText={true}
				text={t('form.text.repeatPassword')}
				styleSize="400"
				inputName="repeatPassword"
			/>
		</form>
	);
};
