import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import Label from "."

describe("test del label", () => {
    it("renderea el texto que le pasas", () => {
        render(<Label>texto de ejemplo</Label>)
        expect(screen.getByText("texto de ejemplo"))
    })
})
