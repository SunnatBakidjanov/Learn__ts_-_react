import { useTranslation } from 'react-i18next';
import { LabelBlock } from '../../../UI-general/label-block/LabelBlock';
import { SubmitBtn } from '../../../UI-general/submit-btn/SubmitBtn';
import styles from '../form/styles/form.module.scss';
import classNames from 'classnames';
import { useAuthform } from './hooks/useAuthForm';
import { Loader } from '../../../UI-general/loader/Loader';
import { ErrorField } from '../error-field/ErrorField';

export const Form = () => {
	const { t } = useTranslation();
	const { state, setField, handleSubmit } = useAuthform();
	const { name, lastName, password, email, repeatPassword, isLoading, errorMessage } = state;

	return (
		<form
			className={classNames(styles.form)}
			onSubmit={e => {
				e.preventDefault();
				handleSubmit();
			}}
		>
			<div className={styles.innerLabel}>
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

				<ErrorField
					errorMessage={errorMessage}
					className={styles.validationMessageRoot}
					fieldName="NAME_FIELD"
					styleUsePlace="auth"
				/>
			</div>

			<div className={styles.innerLabel}>
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

				<ErrorField
					errorMessage={errorMessage}
					className={styles.validationMessageRoot}
					fieldName="LAST_NAME_FIELD"
					styleUsePlace="auth"
				/>
			</div>

			<div className={styles.innerLabel}>
				<LabelBlock
					placeholder={t('form.placeholder.email')}
					type="email"
					isRenderText={true}
					text={t('form.text.email')}
					styleSize="400"
					inputName="email"
					value={email}
					onChange={e => setField('email', e.target.value)}
				/>

				<ErrorField
					errorMessage={errorMessage}
					className={styles.validationMessageRoot}
					fieldName="EMAIL_FIELD"
					styleUsePlace="auth"
				/>
			</div>

			<div className={styles.innerLabel}>
				<LabelBlock
					placeholder={t('form.placeholder.password')}
					type="password"
					isRenderText={true}
					text={t('form.text.password')}
					styleSize="400"
					inputName="password"
					value={password}
					onChange={e => setField('password', e.target.value)}
					autocomplete="new-password"
				/>

				<ErrorField
					errorMessage={errorMessage}
					className={styles.validationMessageRoot}
					fieldName="PASSWORD_FIELD"
					styleUsePlace="auth"
				/>
			</div>

			<div className={styles.innerLabel}>
				<LabelBlock
					placeholder={t('form.placeholder.repeatPassword')}
					type="password"
					isRenderText={true}
					text={t('form.text.repeatPassword')}
					styleSize="400"
					inputName="repeatPassword"
					value={repeatPassword}
					onChange={e => setField('repeatPassword', e.target.value)}
					autocomplete="new-password"
				/>

				<ErrorField
					errorMessage={errorMessage}
					className={styles.validationMessageRoot}
					fieldName="PASSWORD_REPEAT_FIELD"
					styleUsePlace="auth"
				/>
			</div>

			<div className={styles.innerBtn}>
				<ErrorField
					errorMessage={errorMessage}
					className={styles.validationMessageRoot}
					fieldName="UNKNOWN_ERROR_FIELD"
					styleUsePlace="authPrimary"
				/>

				<SubmitBtn
					ariaLabel={t('form.submitBtn')}
					text={!isLoading ? t('form.submitBtn') : undefined}
					styleUsePlace="auth"
					type="submit"
					isDisabled={isLoading}
				>
					{isLoading ? <Loader loaderType="shadowRolling" /> : undefined}
				</SubmitBtn>
			</div>
		</form>
	);
};
