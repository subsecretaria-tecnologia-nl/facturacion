import { FunctionComponent } from "react"
import { ITitleProps } from "interfaces/atoms/typography"

const Title: FunctionComponent<ITitleProps> = ({
    children,
    color,
    type = "h2",
    className,
}) => {
    const Container = ({ children }) => {
        switch (type) {
            case "h1":
                return (
                    <h1
                        style={{ color }}
                        className={["h1"]
                            .concat(className.split(" "))
                            .join(" ")}
                    >
                        {children}
                    </h1>
                )
            case "h2":
                return (
                    <h2
                        style={{ color }}
                        className={["h2"]
                            .concat(className.split(" "))
                            .join(" ")}
                    >
                        {children}
                    </h2>
                )
            case "h3":
                return (
                    <h3
                        style={{ color }}
                        className={["h3"]
                            .concat(className.split(" "))
                            .join(" ")}
                    >
                        {children}
                    </h3>
                )
            case "h4":
                return (
                    <h4
                        style={{ color }}
                        className={["h4"]
                            .concat(className.split(" "))
                            .join(" ")}
                    >
                        {children}
                    </h4>
                )
            case "h5":
                return (
                    <h5
                        style={{ color }}
                        className={["h5"]
                            .concat(className.split(" "))
                            .join(" ")}
                    >
                        {children}
                    </h5>
                )
            case "h6":
                return (
                    <h6
                        style={{ color }}
                        className={["h6"]
                            .concat(className.split(" "))
                            .join(" ")}
                    >
                        {children}
                    </h6>
                )
        }
    }

    return <Container>{children}</Container>
}

export default Title
