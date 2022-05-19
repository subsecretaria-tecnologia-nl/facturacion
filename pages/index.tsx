import Card from "molecules/Card"
import Label from "atoms/Label"
import Input from "atoms/Input"
import { useState } from "react"
import Title from "atoms/Typography"

export default function Home() {
    const [inputTest, setInputTest] = useState("")
    const handleInputChange = (e) => {
        setInputTest(e.target.value)
    }
    return (
        <div className={""}>
            <main className={"main"}>
                <p className={"description"}>
                    Get started by editing{" "}
                    <code className={"code"}>pages/index.js</code>
                </p>

                <div className="d-flex">
                    <Card width="700px" className="">
                        <Title>Obtener Comprobante Fiscal</Title>
                        <Label className="row mx-1">
                            Para generar su CFDI es necesario que tenga sus
                            datos fiscales a la mano y responda las siguientes
                            preguntas:
                        </Label>
                        <Label>
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
