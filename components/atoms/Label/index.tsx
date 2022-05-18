import { FunctionComponent } from "react"
import { ILabelProps } from "interfaces/atoms/label"

const Label: FunctionComponent<ILabelProps> = ({ children, color }) => {
    return (
        <label htmlFor="" style={{ color }}>
            {children}
        </label>
    )
}

export default Label
