import { HTMLAttributes, ReactElement  } from "react"

export interface ICardProps  extends HTMLAttributes<HTMLHeadingElement>{
	children?: null | ReactElement | string | string[]
    width?: string
    height?: string
}
