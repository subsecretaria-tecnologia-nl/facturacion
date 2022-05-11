import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import Title from "."

describe("Atom Title Component", () => {
    it("Rendered title component in h2", () => {
        const component = render(
            <>
                <Title type="h1">Un text</Title>
                <Title>Un text</Title>
                <Title type="h2">Un text</Title>
                <Title type="h3">Un text</Title>
                <Title type="h4">Un text</Title>
                <Title type="h5">Un text</Title>
                <Title type="h6">Un text</Title>
            </>
        )

        const h1 = component.container.querySelectorAll("h1")
        const h2 = component.container.querySelectorAll("h2")
        const h3 = component.container.querySelectorAll("h3")
        const h4 = component.container.querySelectorAll("h4")
        const h5 = component.container.querySelectorAll("h5")
        const h6 = component.container.querySelectorAll("h6")
        expect(h1.length).toEqual(2)
        expect(h2.length).toEqual(2)
        expect(h3.length).toEqual(1)
        expect(h4.length).toEqual(1)
        expect(h5.length).toEqual(1)
        expect(h6.length).toEqual(1)
    })
})
