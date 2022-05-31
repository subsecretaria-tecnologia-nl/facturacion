import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { debug } from "console"

import Header from "."

describe("test header", () => {
    it("test que la imagen se reendere", () => {
        const container = render(<Header />)
        const img = container.container.querySelector("#logo-nl")
        expect(img).toBeInTheDocument()
    })
})
