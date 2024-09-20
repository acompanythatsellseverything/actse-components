import { ReactNode } from "react";

export default interface IDefaultProps {
	id?: string;
	className?: string;
	children?: ReactNode;
	[x: string]: any;
}
