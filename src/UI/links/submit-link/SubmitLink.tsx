import { Link } from 'react-router-dom';

type ClassNameMap = {
	container?: string;
	block?: string;
	text?: string;
	linkText?: string;
	underline?: string;
};

type SumbitLinkProps = {
	path: string;
	linkText: string;
	text: string;
	className?: ClassNameMap;
	hasUnderline?: boolean;
};

export const SubmitLink = ({
	path,
	linkText,
	text,
	hasUnderline,
	className = {},
}: SumbitLinkProps) => {
	return (
		<div className={className?.container}>
			<div className={className?.block}>
				<p className={className?.text}>{text}</p>

				<Link to={path} className={className?.linkText}>
					{linkText}
					{hasUnderline && <span className={className?.underline}></span>}
				</Link>
			</div>
		</div>
	);
};
