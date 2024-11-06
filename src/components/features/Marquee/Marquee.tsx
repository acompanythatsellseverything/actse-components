'use client';
import { motion } from 'framer-motion';
import IDefaultProps from '../../IDefaultProps';

interface IProps extends IDefaultProps {
	speed: number;
	direction: 'left' | 'right';
}
export default function Marquee({
	speed,
	direction,
	className,
	children,
}: IProps) {
	const getVariants = () => {
		const baseTransition = {
			x: direction === 'left' ? ['0%', '-100%'] : ['0%', '100%'],
			transition: {
				duration: speed / 10,
				repeat: Infinity,
				ease: 'linear',
			},
		};

		return {
			initial: {
				x: direction === 'left' ? '100%' : '-100%',
			},
			animate: baseTransition,
		};
	};
	return (
		<div className={`overflow-hidden w-[100vw] relative ${className}`}>
			<motion.div
				className='inline-block gap-8 whitespace-nowrap w-full'
				variants={getVariants()}
				initial='initial'
				animate='animate'
			>
				{children}
				{/* Duplicate texts for seamless infinite loop */}
			</motion.div>
			<motion.div
				className={`inline-block gap-8 whitespace-nowrap basis-full w-full absolute ${
					direction === 'left' ? 'left-[100%]' : 'left-[-100%]'
				}`}
				variants={getVariants()}
				initial='initial'
				animate='animate'
			>
				{children}
				{/* Duplicate texts for seamless infinite loop */}
			</motion.div>
		</div>
	);
}
