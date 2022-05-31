import Card from "molecules/Card"
import Label from "atoms/Label"
import Input from "atoms/Input"
import { useState } from "react"
import Title from "atoms/Typography"
import Select from "atoms/Select"
import { type } from "os"

export default function Home() {
    const [inputTest, setInputTest] = useState("")
    const handleInputChange = (e) => {
        setInputTest(e.target.value)
    }

    const arrayTest = [
        { text: "x", id: 0 },
        { text: "y", id: 1 },
        { text: "t", id: 2 },
    ]

    return (
        <div className={""}>
            <main className={"main"}>
                <p className={"description"}>
                    He cambiado algo de código en{" "}
                    <code className={"code"}>pages/index.js</code>
                </p>

                <div className="d-flex">
                    <Card width="700px" className="">
                        <Title>Obtener Comprobante Fiscal</Title>
                        <Label className="mx-1 mb-4">
                            Para generar su CFDI es necesario que tenga sus
                            datos fiscales a la mano y responda las siguientes
                            preguntas:
                        </Label>

                        <Select options={arrayTest}></Select>

                        <Label className="mt-2">
                            Captura el folio único que se muestra en la parte
                            inferior del recibo de pago.
                        </Label>
                        <Input
                            name="test"
                            placeholder="dexter"
                            value={inputTest}
                            onChange={handleInputChange}
                            className="input-text"
                        ></Input>
                    </Card>
                </div>
            </main>
        </div>
    )
}
