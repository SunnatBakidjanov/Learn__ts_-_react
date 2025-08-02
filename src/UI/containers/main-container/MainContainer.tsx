import classNames from 'classnames';

export const MainContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={classNames('container mx-auto relative z-[var(--main-content-index)]')}>
			{children}
		</div>
	);
};
