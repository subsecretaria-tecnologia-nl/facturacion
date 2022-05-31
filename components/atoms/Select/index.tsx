import { FunctionComponent } from "react"
import ISelectProps from "interfaces/atoms/select"

const Select: FunctionComponent<ISelectProps> = ({
    children = ["hola", "adios"],
    color,
    className,
    options,
}) => {
    return (
        <>
            <div className="select-wrapper">
                <select name="" id="" className="input-select">
                    {options.map((item) => (
                        <option
                            className="select-options"
                            key={item.id}
                            value={item.id}
                        >
                            {item.text}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default Select
