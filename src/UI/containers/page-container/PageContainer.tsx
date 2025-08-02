import classNames from 'classnames';

type PageContainerProps = {
	children: React.ReactNode;
	className?: string;
};

export const PageContainer = ({ children, className }: PageContainerProps) => {
	return (
		<div
			className={classNames(
				'transition-bg-color px-4 bg-[var(--primary-color-reverse)]',
				className
			)}
		>
			{children}
		</div>
	);
};
