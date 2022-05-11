// EXTERNOS
import { FunctionComponent } from "react"

// INTERNOS
import { IBodyProps } from "interfaces/atoms/typography"

const Body: FunctionComponent<IBodyProps> = ({
    algo,
    children,
    otro,
    width,
}) => {
    return (
        <>
            <div style={{ width }}>{children}</div>
            <span>Otro: {otro}</span>
            <span>Algo: {algo}</span>
        </>
    )
}

export default Body
