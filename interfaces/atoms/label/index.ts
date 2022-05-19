import { ReactElement, HTMLAttributes } from "react"


export interface ILabelProps extends HTMLAttributes<HTMLHeadingElement>{
	children: string | string[] | ReactElement | ReactElement[]
    color?: string | null
    className?: string 
}
