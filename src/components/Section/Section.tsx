import IDefaultProps from '@/components/IDefaultProps';

interface IProps extends IDefaultProps {}

const defaultStyles = 'w-full py-12 md:py-16 lg:py-20';

export default function Section({ id, className, children, ...props }: IProps) {
	return (
		<section id={id} className={`${defaultStyles} ${className || ''}`} {...props}>
			{children}
		</section>
	);
}
