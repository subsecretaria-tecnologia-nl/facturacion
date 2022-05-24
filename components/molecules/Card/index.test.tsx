import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import Card from "."

describe("test Card ", () => {
    it("se renderea con las propiedades correctas", () => {
        const component = render(
            <Card width="600px" height="200px">
                texto en card
            </Card>
        )

        const cardWidth = component.container.getElementsByClassName("card")

        expect(cardWidth[0]).toBeInTheDocument()
        expect(getComputedStyle(cardWidth[0]).width).toBe("600px")
        expect(getComputedStyle(cardWidth[0]).height).toBe("200px")
        expect(screen.getByText("texto en card"))
    })
    it("prueba pasando valores por default", () => {
        const component = render(<Card></Card>)
        const cardDefault = component.container.getElementsByClassName("card")

        expect(getComputedStyle(cardDefault[0]).width).toBe("500px")
        expect(getComputedStyle(cardDefault[0]).height).toBe("500px")
    })
})
