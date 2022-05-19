import { HTMLAttributes, ReactElement  } from "react"

export interface ICardProps  extends HTMLAttributes<HTMLHeadingElement>{
	children?: null | ReactElement | ReactElement[] | string | string[]
    width?: string
    height?: string
    className?: string 
}
