import Card from "molecules/Card"
import Label from "atoms/Label"
import Input from "atoms/Input"
import { useState } from "react"
import Title from "atoms/Typography"
import Select from "atoms/Select"
import { type } from "os"

export default function Home() {
    const [inputTest, setInputTest] = useState("")
    const handleInputChange = (e) => setInputTest(e.target.value)

    const [valueSelect, setValueSelect] = useState("")
    const handdleSelectChange = (e) => setValueSelect(e.target.value)

    const arrayTest = [
        { text: "Pago presencial de Tesorería", id: 0 },
        { text: "Pago presencial Instituto de Control Vehicular", id: 1 },
        { text: "Pago directo en Banco", id: 2 },
        { text: "Pago en Internet", id: 3 },
        { text: "Pago con referencia bancaria", id: 4 },
        { text: "Pago directo en OXXO", id: 5 },
    ]

    const showInput = () => {
        switch (valueSelect) {
            case "0":
                return (
                    <>
                        <Label className="mt-2">
                            Captura los datos que se encuentran en tu recibo de
                            pago.
                        </Label>

                        <div>
                            <label htmlFor="">Número de caja (4 dígitos)</label>
                            <Input
                                name="test1"
                                placeholder="dexter"
                                value={inputTest}
                                onChange={handleInputChange}
                                className="input-text my-2"
                            ></Input>
                        </div>
                        <div>
                            <label htmlFor="">Folio de Pago</label>
                            <Input
                                name="test2"
                                placeholder="dexter"
                                value={inputTest}
                                onChange={handleInputChange}
                                className="input-text my-2"
                            ></Input>
                        </div>
                        <div>
                            <label htmlFor="">Numero transaccion</label>
                            <Input
                                name="test3"
                                placeholder="dexter"
                                value={inputTest}
                                onChange={handleInputChange}
                                className="input-text my-2"
                            ></Input>
                        </div>
                    </>
                )
                break

            case "1":
                return (
                    <>
                        <Label className="mt-2">
                            Captura el folio único que se muestra en la parte
                            inferior del recibo de pago.
                        </Label>
                        <Input
                            name="test"
                            placeholder="dexter"
                            value={inputTest}
                            onChange={handleInputChange}
                            className="input-text my-2"
                        ></Input>
                    </>
                )
                break

            case "2":
                return (
                    <>
                        <Label className="mt-2">
                            Captura la placa pagada sin dejar espacios ni
                            guiones. ej. Para la placa SKT-70-95 se ingresa la
                            placa SKT7095 como referencia.
                        </Label>
                        <Input
                            name="test"
                            placeholder="dexter"
                            value={inputTest}
                            onChange={handleInputChange}
                            className="input-text my-2"
                        ></Input>
                    </>
                )
                break

            case "3":
                return (
                    <>
                        <Label className="mt-2">
                            Captura el folio único que se muestra en la parte
                            inferior del recibo de pago.
                        </Label>
                        <Input
                            name="test"
                            placeholder="dexter"
                            value={inputTest}
                            onChange={handleInputChange}
                            className="input-text my-2"
                        ></Input>
                    </>
                )
                break

            case "4":
                return (
                    <>
                        <Label className="mt-2">
                            Captura la línea de referencia con la que realizaste
                            tu pago.
                        </Label>
                        <Input
                            name="test"
                            placeholder="dexter"
                            value={inputTest}
                            onChange={handleInputChange}
                            className="input-text my-2"
                        ></Input>
                    </>
                )
                break

            case "5":
                return (
                    <>
                        <Label className="mt-2">
                            Captura la placa pagada sin dejar espacios ni
                            guiones. ej. Para la placa SKT-70-95 se ingresa la
                            placa SKT7095 como referencia.
                        </Label>
                        <Input
                            name="test"
                            placeholder="dexter"
                            value={inputTest}
                            onChange={handleInputChange}
                            className="input-text my-2"
                        ></Input>
                    </>
                )
                break

            default:
                return <>--</>
        }
    }

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

                        <Select
                            options={arrayTest}
                            value={valueSelect}
                            onChange={handdleSelectChange}
                        ></Select>

                        {showInput()}
                    </Card>
                </div>
            </main>
        </div>
    )
}
