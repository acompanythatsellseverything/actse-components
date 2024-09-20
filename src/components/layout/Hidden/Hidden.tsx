import { ReactNode } from 'react';

interface IProps {
	value: boolean;
	children?: ReactNode;
}

export default function Hidden({ value, children }: IProps) {
	if (value) {
		return <></>;
	}

	return children;
}
