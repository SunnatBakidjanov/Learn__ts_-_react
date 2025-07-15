import { useTranslation } from 'react-i18next';
import { LabelBlock } from '../../../UI-general/label-block/LabelBlock';
import { SubmitBtn } from '../../../UI-general/submit-btn/SubmitBtn';
import styles from '../form/styles/form.module.scss';
import classNames from 'classnames';
import { useAuthform } from './hooks/useAuthForm';
import { Loader } from '../../../UI-general/loader/Loader';
import { ValidatinoMessage } from '../../../UI-general/validation-message/ValidationMessage';
import { useFieldErrorHeight } from './hooks/useFieldErrorHeight';
import { PASSWORD_ERRORS, PASSWORD_REPEAT_ERRORS } from './scripts/errorsConstants';

export const Form = () => {
	const { t } = useTranslation();
	const { setField, state, handleSubmit } = useAuthform();
	const { name, lastName, password, email, repeatPassword, isLoading, errorMessage } = state;
	const { getHeight, setErrorMessageRef } = useFieldErrorHeight(errorMessage || 'SUCCESS');

	return (
		<form
			className={classNames(styles.form)}
			onSubmit={e => {
				e.preventDefault();
				handleSubmit();
			}}
		>
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
				/>

				{(() => {
					const text = PASSWORD_ERRORS[errorMessage as keyof typeof PASSWORD_ERRORS];

					return (
						<div
							ref={setErrorMessageRef('PASSWORD_FIELD')}
							style={{ height: text ? getHeight('PASSWORD_FIELD') : 0 }}
							className={styles.validationMessageRoot}
						>
							{text && <ValidatinoMessage styleUsePlace="auth" text={text} />}
						</div>
					);
				})()}
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
				/>

				{(() => {
					const text = PASSWORD_REPEAT_ERRORS[errorMessage as keyof typeof PASSWORD_REPEAT_ERRORS];

					return (
						<div
							ref={setErrorMessageRef('PASSWORD_REPEAT_FIELD')}
							style={{ height: text ? getHeight('PASSWORD_REPEAT_FIELD') : 0 }}
							className={styles.validationMessageRoot}
						>
							{text && <ValidatinoMessage styleUsePlace="auth" text={text} />}
						</div>
					);
				})()}
			</div>

			<SubmitBtn
				ariaLabel={t('form.submitBtn')}
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
