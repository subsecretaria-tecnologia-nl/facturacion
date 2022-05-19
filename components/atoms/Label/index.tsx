import { FunctionComponent } from "react"
import { ILabelProps } from "interfaces/atoms/label"

const Label: FunctionComponent<ILabelProps> = ({
    children,
    color,
    className,
}) => {
    return (
        <label htmlFor="" style={{ color }} className={className}>
            {children}
        </label>
    )
}

export default Label
