import { FunctionComponent, useState } from "react"
import ISelectProps from "interfaces/atoms/select"

const Select: FunctionComponent<ISelectProps> = ({
    children = ["hola", "adios"],
    color,
    className,
    options,
    value,
    onChange,
}) => {
    return (
        <>
            <div className="select-wrapper">
                <select
                    name=""
                    id=""
                    className="input-select"
                    value={value}
                    onChange={onChange}
                >
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
