import "@testing-library/jest-dom"
import { render } from "@testing-library/react"

import Header from "."

describe("Componente header", () => {
    it("prueba de que reendere", () => {
        const component = render(
            <>
                <Header />
            </>
        )

        expect(component.container.firstChild).toMatchInlineSnapshot(`<div
            class="header-app "
        >
            <div
        class="logo-container"
            >
    <img
      alt=""
            class="logo-header"
      src="/img/logo.svg"
                />
            </div>
        </div>`)
    })
})
