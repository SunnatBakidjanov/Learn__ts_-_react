import React from 'react';
import classNames from 'classnames';
import styles from './round-toolbar.module.css';

type ClassNamesType = {
	btn?: string;
	toolbar?: string;
};

type RoundToolbarProps = {
	children: React.ReactNode;
	className: ClassNamesType;
	img?: React.ReactNode;
	initialDegree: number;
	ref: React.Ref<HTMLDivElement> | undefined;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	radius: number;
	isBtnDisabled?: boolean;
	angleStep: number;
};

export const RoundToolbar = ({
	children,
	initialDegree,
	radius,
	angleStep,
	className = {},
	ref,
	img,
	onClick,
	isBtnDisabled,
}: RoundToolbarProps) => {
	const tools = React.Children.toArray(children) as React.ReactElement[];

	return (
		<div className={classNames(className.toolbar)} ref={ref}>
			{tools.map((tool, idx) => {
				const angle = initialDegree + idx * angleStep;

				return (
					<div
						key={idx}
						className={styles.trigger}
						style={
							{
								'--angle': `${angle}deg`,
								'--radius': `${radius}px`,
							} as React.CSSProperties
						}
					>
						{tool}
					</div>
				);
			})}

			<button
				className={classNames(className.btn)}
				onClick={onClick}
				disabled={isBtnDisabled}
			>
				{img}
			</button>
		</div>
	);
};
