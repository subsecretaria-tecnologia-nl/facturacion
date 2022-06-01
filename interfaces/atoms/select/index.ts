
import { ReactElement, HTMLAttributes, useState, ChangeEventHandler } from "react"

interface options {
	text: string
	id: number
}

export interface ISelectProps extends HTMLAttributes<HTMLHeadingElement> {
	children?: string | string[] | ReactElement | ReactElement[]
	color?: string
	className?: string
    options: options[]
	value?: number | string
	onChange?: ChangeEventHandler<any> | undefined | null
}




export default ISelectProps