import { FaHome, FaUserAlt, FaCog } from 'react-icons/fa';
import { ChangeThemeBtn } from '../change-theme-btn/ChangeThemeBtn';
import styles from './styles/toolbar.module.scss';
import { FaGear } from 'react-icons/fa6';
import classNames from 'classnames';
import { useSetDisabled } from '../../../hooks/useSetDisabled';
import type { Tool, ToolbarProps } from './types/types';
import { useToolbar } from './hooks/useToolbar';

const tools: Tool[] = [
	{ id: 'theme', element: <ChangeThemeBtn className={styles.tool} /> },
	{ id: 'settings', element: <FaHome className={styles.tool} /> },
	{ id: 'info', element: <FaUserAlt className={styles.tool} /> },
	{ id: 'cog', element: <FaCog className={styles.tool} /> },
];

export const Toolbar = ({ styleUsePlace, InitialDegree }: ToolbarProps) => {
	const { isDisabled, toggleDisabled } = useSetDisabled();
	const { wrapperRef, open, toggleToolbar } = useToolbar();

	const radius = open ? 80 : 60;
	const angleStep = open ? 60 : 20;

	return (
		<div
			className={classNames(styles.toolbar, {
				[styles.toolbarAuth]: (styleUsePlace = 'auth'),
			})}
			ref={wrapperRef}
		>
			{tools.map((tool, idx) => {
				const angle = InitialDegree + idx * angleStep;
				return (
					<div
						className={classNames(styles.trigger, open && styles.triggerOpen)}
						key={tool.id}
						style={
							{
								'--angle': `${angle}deg`,
								'--radius': `${radius}px`,
							} as React.CSSProperties
						}
					>
						{tool.element}
					</div>
				);
			})}

			<button
				className={classNames(styles.btn)}
				onClick={() => {
					toggleToolbar();
					toggleDisabled();
				}}
				disabled={isDisabled}
			>
				<FaGear className={classNames(styles.iconBtn, open && styles.iconBtnOpen)} />
			</button>
		</div>
	);
};
