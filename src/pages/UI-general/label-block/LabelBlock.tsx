import type { ChangeEventHandler } from 'react';
import styles from './styles/label-block.module.scss';
import classNames from 'classnames';

type LabelBlock = {
	placeholder: string;
	type: string;
	styleSize: string;
	inputName: string;
	isRenderText?: boolean;
	text?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	value?: string;
};

export const LabelBlock = ({
	placeholder,
	type,
	styleSize,
	text = '',
	isRenderText = false,
	inputName,
	onChange,
	value,
}: LabelBlock) => {
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
