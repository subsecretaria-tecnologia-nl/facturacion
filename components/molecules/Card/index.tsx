import { FunctionComponent } from "react"
import { ICardProps } from "interfaces/molecules/card"

const Card: FunctionComponent<ICardProps> = ({
    children,
    width = "500px",
    height = "",
    className = "",
    minHeight,
    maxHeight,
    minWidth,
    maxWidth,
}) => {
    return (
        <div
            className={["card", className].join(" ")}
            style={{ width, height, minHeight, maxHeight, minWidth, maxWidth }}
        >
            {children}
        </div>
    )
}

export default Card
