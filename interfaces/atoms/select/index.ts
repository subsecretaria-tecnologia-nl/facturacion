
import { ReactElement, HTMLAttributes } from "react"

interface options {
	text: string
	id: number
}

export interface ISelectProps extends HTMLAttributes<HTMLHeadingElement> {
	children?: string | string[] | ReactElement | ReactElement[]
	color?: string
	className?: string
    options: options[]
}



export default ISelectProps