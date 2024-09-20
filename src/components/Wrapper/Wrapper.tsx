import IDefaultProps from '@/components/IDefaultProps';

interface IProps extends IDefaultProps {}

const defaultStyles = 'flex flex-col min-h-full';

export default function Wrapper({ id, className, children, ...props }: IProps) {
	return (
		<div id={id} className={`${defaultStyles} ${className || ''}`} {...props}>
			{children}
		</div>
	);
}
