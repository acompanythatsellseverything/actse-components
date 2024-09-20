import IDefaultProps from '@/components/IDefaultProps';

interface IProps extends IDefaultProps {
	sx?: {
		p?: string;
		border?: string;
	};
}

const defaultStyles = 'p-4 rounded';

export default function Box({ id, className, children, sx, ...props }: IProps) {
	return (
		<div
			id={id}
			className={`${defaultStyles} ${className || ''}`}
			style={{
				padding: sx?.p,
				border: sx?.border,
			}}
			{...props}
		>
			{children}
		</div>
	);
}
