type MainTitleProps = {
	children?: React.ReactNode;
	className?: string;
};

export const MainTitle = ({ children, className }: MainTitleProps) => {
	return <h1 className={className}>{children}</h1>;
};
