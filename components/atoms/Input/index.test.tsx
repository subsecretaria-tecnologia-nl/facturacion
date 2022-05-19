import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import { ChangeEvent } from "react"

import Input from "."

describe("test de input", () => {
    it("renderea todas las propiedades correctamente", () => {
        const onChanges = (e: ChangeEvent<HTMLInputElement>) => {
            const newValue = e.target.value
        }

        const component = render(
            <>
                <Input accept="si"></Input>
                <Input alt="si"></Input>
                <Input autoComplete="si"></Input>
                <Input autoFocus></Input>
                <Input checked></Input>
                <Input className="class-test"></Input>
                <Input crossOrigin="si"></Input>
                <Input disabled={true} className="disabled"></Input>
                <Input max={2}></Input>
                <Input maxLength={3}></Input>
                <Input min={2}></Input>
                <Input minLength={2}></Input>
                <Input name=""></Input>
                <Input pattern=""></Input>
                <Input placeholder=""></Input>
                <Input readOnly></Input>
                <Input required></Input>
                <Input size={4}></Input>
                <Input src=""></Input>
                <Input step={4}></Input>
                <Input title=""></Input>
                <Input type="text"></Input>
                <Input value="dexter"></Input>
                <Input onChange={onChanges} className="changes"></Input>
                {/* <Input onSelect={}></Input>
                <Input onBlur={}></Input>
                <Input onClick={}></Input>
                <Input onKeyUp={}></Input>
                <Input onKeyDown={}></Input> */}
            </>
        )

        const accept = component.container
        const className =
            component.container.getElementsByClassName("class-test")
        const disabled = component.container.getElementsByClassName("disabled")
        const testChanges =
            component.container.getElementsByClassName("changes")

        expect(className)
        expect(disabled[0]).toBeDisabled()
        expect(screen.getByDisplayValue("dexter"))
        expect(
            fireEvent.change(testChanges[0], { target: { value: "newVal" } })
        )
    })
})
