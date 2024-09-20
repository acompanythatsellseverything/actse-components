import IDefaultProps from '@/components/IDefaultProps';

interface IProps extends IDefaultProps {
	sx?: {
		gap?: string;
		direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
	};
}

const defaultStyles = 'flex';

export default function Flex({
	id,
	className,
	children,
	sx,
	...props
}: IProps) {
	return (
		<div
			id={id}
			className={`${defaultStyles} ${className || ''}`}
			style={{
				gap: sx?.gap,
				flexDirection: sx?.direction,
			}}
			{...props}
		>
			{children}
		</div>
	);
}
