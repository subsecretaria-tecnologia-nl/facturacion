import { FunctionComponent } from "react"
import { ICardProps } from "interfaces/molecules/card"

const Card: FunctionComponent<ICardProps> = ({
    children,
    width = "500px",
    height = "500px",
}) => {
    return (
        <div className="card" style={{ width, height }}>
            {children}
        </div>
    )
}

export default Card
