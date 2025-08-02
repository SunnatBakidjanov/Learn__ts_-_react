type PrimaryTextProps = {
	text: string;
	className?: string;
};

export const PrimaryText = ({ text, className }: PrimaryTextProps) => {
	return <p className={className}>{text}</p>;
};
