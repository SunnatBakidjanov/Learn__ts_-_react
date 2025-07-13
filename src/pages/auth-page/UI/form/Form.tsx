import { useTranslation } from 'react-i18next';
import { LabelBlock } from '../../../UI-general/label-block/LabelBlock';
import { Title } from '../title/Title';
import { SubmitBtn } from '../../../UI-general/submit-btn/SubmitBtn';
import styles from '../form/styles/form.module.scss';
import classNames from 'classnames';
import { useAuthform } from './hooks/useAuthForm';
import { Loader } from '../../../UI-general/loader/Loader';

export const Form = () => {
	const { t } = useTranslation();
	const { setField, state, handleSubmit } = useAuthform();
	const { name, lastName, password, email, repeatPassword, isLoading } = state;

	return (
		<form
			className={classNames(styles.form)}
			onSubmit={e => {
				e.preventDefault();
				handleSubmit();
			}}
		>
			<Title />

			<LabelBlock
				placeholder={t('form.placeholder.name')}
				type="text"
				isRenderText={true}
				text={t('form.text.name')}
				styleSize="400"
				inputName="name"
				value={name}
				onChange={e => setField('name', e.target.value)}
			/>

			<LabelBlock
				placeholder={t('form.placeholder.lastName')}
				type="text"
				isRenderText={true}
				text={t('form.text.lastName')}
				styleSize="400"
				inputName="lastName"
				value={lastName}
				onChange={e => setField('lastName', e.target.value)}
			/>

			<LabelBlock
				placeholder={t('form.placeholder.email')}
				type="text"
				isRenderText={true}
				text={t('form.text.email')}
				styleSize="400"
				inputName="email"
				value={email}
				onChange={e => setField('email', e.target.value)}
			/>

			<LabelBlock
				placeholder={t('form.placeholder.password')}
				type="password"
				isRenderText={true}
				text={t('form.text.password')}
				styleSize="400"
				inputName="password"
				value={password}
				onChange={e => setField('password', e.target.value)}
			/>

			<LabelBlock
				placeholder={t('form.placeholder.repeatPassword')}
				type="password"
				isRenderText={true}
				text={t('form.text.repeatPassword')}
				styleSize="400"
				inputName="repeatPassword"
				value={repeatPassword}
				onChange={e => setField('repeatPassword', e.target.value)}
			/>

			<SubmitBtn
				ariaLabel="Sign up"
				text={!isLoading ? t('form.submitBtn') : undefined}
				styleUsePlace="auth"
				type="submit"
				isDisabled={isLoading}
			>
				{isLoading ? <Loader loaderType="shadowRolling" /> : undefined}
			</SubmitBtn>
		</form>
	);
};
