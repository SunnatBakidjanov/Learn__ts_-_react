import { useTranslation } from 'react-i18next';
import { Input } from '../../../../UI/inputs/input/Input';
import { useAuthForm } from '../../hooks/useAuthForm';
import { PasswordInput } from '../../../../UI/inputs/password-input/PasswordInput';
import { MainTitle } from '../../../../UI/Titels/main-title/MainTitle';
import { PrimaryText } from '../../../../UI/texts/primary-text/PrimaryText';
import { SubmitBtn } from '../../../../UI/buttons/submit-btn/SubmitBtn';
import { ErrorFormText } from '../../../../UI/texts/error-form-text/ErrorFormText';
import { ShadowRoallingLoader } from '../../../../UI/loaders/shadow-rolling-loader/ShadowRollingLoader';
import { useSubmitFormStyles } from '../../../../styles/submit-form/useSubmitFormStyles';
import { PasswordStrengthMeter } from '../password-streng-meter/PasswordStrengMeter';
import { FaUserTag } from 'react-icons/fa6';
import { FaUsers } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export const AuthForm = () => {
	const { state, setField, submitForm, getFirstError } = useAuthForm();
	const { name, lastName, email, password, confirmPassword, isLoading } = state;
	const {
		inputClasses,
		formClasses,
		mainTitleClasses,
		submitBtnClasses,
		inputContainerClasses,
		imgClassName,
	} = useSubmitFormStyles();
	const { t } = useTranslation('auth');

	return (
		<form
			className={formClasses}
			onSubmit={e => {
				e.preventDefault();
				submitForm();
			}}
		>
			<MainTitle>
				<PrimaryText text={t('mainTitle')} className={mainTitleClasses} />
			</MainTitle>

			<div className={inputContainerClasses}>
				<Input
					type="text"
					name="name"
					placeholder={t('form.placeholder.name')}
					value={name}
					onChange={e => setField('name', e.target.value)}
					titleText={t('form.text.name')}
					className={inputClasses}
				>
					<FaUserTag className={imgClassName} />
				</Input>

				<ErrorFormText
					errorKey={getFirstError('SHORT_NAME', 'INVALID_NAME')}
					className="text-[0.9rem]"
				/>
			</div>

			<div className={inputContainerClasses}>
				<Input
					type="text"
					name="last-name"
					titleText={t('form.text.lastName')}
					placeholder={t('form.placeholder.lastName')}
					value={lastName}
					onChange={e => setField('lastName', e.target.value)}
					autoComplete="family-name"
					className={inputClasses}
				>
					<FaUsers className={imgClassName} />
				</Input>

				<ErrorFormText
					errorKey={getFirstError('SHORT_LAST_NAME', 'INVALID_LAST_NAME')}
					className="text-[0.9rem]"
				/>
			</div>

			<div className={inputContainerClasses}>
				<Input
					type="email"
					name="email"
					titleText={t('form.text.email')}
					placeholder={t('form.placeholder.email')}
					value={email}
					onChange={e => setField('email', e.target.value)}
					autoComplete="email"
					className={inputClasses}
				>
					<MdEmail className={imgClassName} />
				</Input>

				<ErrorFormText
					errorKey={getFirstError('INVALID_EMAIL', 'EMAIL_EXISTS')}
					className="text-[0.9rem]"
				/>
			</div>

			<div className={inputContainerClasses}>
				<PasswordInput
					name="password"
					titleText={t('form.text.password')}
					placeholder={t('form.placeholder.password')}
					value={password}
					onChange={e => setField('password', e.target.value)}
					autoComplete="new-password"
					className={inputClasses}
				/>

				<PasswordStrengthMeter password={password} />

				<ErrorFormText
					errorKey={getFirstError('INVALID_PASSWORD')}
					className="text-[0.9rem]"
				/>
			</div>

			<div className={inputContainerClasses}>
				<PasswordInput
					name="confirm-password"
					titleText={t('form.text.confirmPassword')}
					placeholder={t('form.placeholder.confirmPassword')}
					value={confirmPassword}
					onChange={e => setField('confirmPassword', e.target.value)}
					autoComplete="new-password"
					className={inputClasses}
				/>

				<ErrorFormText
					errorKey={getFirstError('PASSWORD_DO_NOT_MATCH')}
					className="text-[0.9rem]"
				/>
			</div>

			<ErrorFormText errorKey={getFirstError('SERVER_ERROR')} className="text-[1rem]" />

			<SubmitBtn
				text={!isLoading && t('form.submitBtn')}
				disabled={isLoading}
				className={submitBtnClasses}
			>
				{isLoading && <ShadowRoallingLoader className="h-2.5 w-2.5" />}
			</SubmitBtn>
		</form>
	);
};
