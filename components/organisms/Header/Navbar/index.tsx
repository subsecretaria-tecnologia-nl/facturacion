import { FunctionComponent } from "react"
import { IHeaderProps } from "interfaces/organism/header"

const Header: FunctionComponent<IHeaderProps> = ({ color, className = "" }) => {
    return (
        <>
            <div
                className={["header-app"]
                    .concat(className.split(" "))
                    .join(" ")}
                style={{ color }}
            >
                <div className="logo-container">
                    <img
                        src="/img/logo.svg"
                        alt=""
                        id="logo-nl"
                        className="logo-header"
                    />
                </div>
            </div>
        </>
    )
}

export default Header
