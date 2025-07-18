import type { ErrorFieldProps } from './types/types';
import { useErrorByField } from './hooks/useErrorByField';
import styles from './styles/error-field.module.scss';
import classNames from 'classnames';

export const ErrorField = ({
	errorMessage,
	className,
	fieldName,
	styleUsePlace,
}: ErrorFieldProps) => {
	const { getErrorHeight, getErrorText, setErrorRef } = useErrorByField(errorMessage ?? null);

	const text = getErrorText(fieldName);

	return (
		<div
			ref={setErrorRef(fieldName)}
			style={{
				height: text ? getErrorHeight(fieldName) : 0,
			}}
			className={className}
		>
			<p
				className={classNames({
					[styles.authMessages]: styleUsePlace === 'auth',
					[styles.authPrimaryMessages]: styleUsePlace === 'authPrimary',
				})}
			>
				{text}
			</p>
		</div>
	);
};
