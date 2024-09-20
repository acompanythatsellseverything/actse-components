import IDefaultProps from '@/components/IDefaultProps';

type TWindowRes = {
	sm: number;
	md: number;
	lg: number;
};

interface IProps extends IDefaultProps {
	container?: boolean;
	columns?: TWindowRes;
	size?: TWindowRes;
	spacing?: TWindowRes;
}

export default function Grid({
	id,
	container,
	columns,
	size,
	spacing,
	className,
	children,
	...props
}: IProps) {
	return (
		<div
			id={id}
			className={`${
				container
					? `grid grid-cols-${columns?.sm || 12} md:grid-cols-${
							columns?.md
					  } lg:grid-cols-${columns?.lg} gap-${spacing?.sm || 2} md:gap-${
							spacing?.md
					  } lg:gap-${spacing?.lg}`
					: ''
			} ${
				size
					? `col-span-${size.sm} md:col-span-${size.md} lg:col-span-${size.lg}`
					: ''
			} ${className || ''}`}
			{...props}
		>
			{children}
		</div>
	);
}
