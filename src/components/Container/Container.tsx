import IDefaultProps from '@/components/IDefaultProps';

interface IProps extends IDefaultProps {}

const defaultStyles = 'w-full md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 md:px-8 lg:px-10';

export default function Container({ id, className, children, ...props }: IProps) {
	return (
		<div id={id} className={`${defaultStyles} ${className || ''}`} {...props}>
			{children}
		</div>
	);
}
