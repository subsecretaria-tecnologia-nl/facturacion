import { FunctionComponent } from "react"
import { ILabelProps } from "interfaces/atoms/label"

const Label: FunctionComponent<ILabelProps> = ({
    children,
    color,
    className,
    width,
    maxWidth,
    minWidth,
}) => {
    return (
        <label
            htmlFor=""
            style={{ color, width, maxWidth, minWidth }}
            className={className}
        >
            {children}
        </label>
    )
}

export default Label
