import type { LabelBlockProps } from './types/types';
import styles from './styles/label-block.module.scss';
import classNames from 'classnames';

export const LabelBlock = ({
	placeholder,
	type,
	styleSize,
	text = '',
	isRenderText = false,
	inputName,
	onChange,
	value,
	isRequired = true,
}: LabelBlockProps) => {
	return (
		<div
			className={classNames(styles.blockRoot, {
				[styles.blockSize400]: styleSize === '400',
			})}
		>
			{isRenderText && (
				<p
					className={classNames(styles.textRoot, {
						[styles.textSize400]: styleSize === '400',
					})}
				>
					{text}
				</p>
			)}

			<label
				className={classNames(styles.labelRoot, {
					[styles.labelSize400]: styleSize === '400',
				})}
			>
				<input
					className={classNames(styles.inputRoot, {
						[styles.inputSize400]: styleSize === '400',
					})}
					name={inputName}
					type={type}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					required={isRequired}
				/>

				<span
					className={classNames(styles.underlineRoot, {
						[styles.underlineSize400]: styleSize === '400',
					})}
				></span>
			</label>
		</div>
	);
};
