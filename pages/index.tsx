import Card from "molecules/Card"
import Label from "atoms/Label"
import Input from "atoms/Input"
import { useState, useEffect } from "react"
import Title from "atoms/Typography"
import Select from "atoms/Select"
import Button from "atoms/Buttons"
import Link from "next/link"

export default function Home() {
    const [inputTest, setInputTest] = useState({
        caja: "",
        folio_pago: "",
        num_trans: "",
        folio_unico: "",
        placa: "",
        referencia: "",
    })
    const handleCajaChange = (e) =>
        setInputTest({ ...inputTest, caja: e.target.value })
    const handleFolioChange = (e) =>
        setInputTest({ ...inputTest, folio_pago: e.target.value })
    const handleNumChange = (e) =>
        setInputTest({ ...inputTest, num_trans: e.target.value })
    const handleFolioUnico = (e) =>
        setInputTest({ ...inputTest, folio_unico: e.target.value })
    const handleInputPlaca = (e) =>
        setInputTest({ ...inputTest, placa: e.target.value })
    const handleInputReferencia = (e) =>
        setInputTest({ ...inputTest, referencia: e.target.value })

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
                        <Label>
                            Captura los datos que se encuentran en tu recibo de
                            pago.
                        </Label>

                        <div className="mt-4">
                            <label htmlFor="">Número de caja (4 dígitos)</label>
                            <Input
                                name="test1"
                                placeholder="dexter"
                                value={inputTest.caja}
                                onChange={handleCajaChange}
                                className="input-text my-2"
                            ></Input>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="">Folio de Pago</label>
                            <Input
                                name="test2"
                                placeholder="dexter"
                                value={inputTest.folio_pago}
                                onChange={handleFolioChange}
                                className="input-text my-2"
                            ></Input>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="">Numero transaccion</label>
                            <Input
                                name="test3"
                                placeholder="dexter"
                                value={inputTest.num_trans}
                                onChange={handleNumChange}
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
                            value={inputTest.folio_unico}
                            onChange={handleFolioUnico}
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
                            value={inputTest.placa}
                            onChange={handleInputPlaca}
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
                            value={inputTest.folio_unico}
                            onChange={handleFolioUnico}
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
                            value={inputTest.referencia}
                            onChange={handleInputReferencia}
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
                            value={inputTest.placa}
                            onChange={handleInputPlaca}
                            className="input-text my-2"
                        ></Input>
                    </>
                )
                break

            default:
                return <>--</>
        }
    }

    useEffect(
        () => {
            setValueSelect("0")
        },
        [] // si pasas el arreglo vació se ejecuta una sola vez cuando termina de montarse el component [var1, var2] // Si pasas una o más variables se va a ejecutar cuando estas muten.
    )

    return (
        <div className={""}>
            <main className={"main justify-center"}>
                <div className="d-flex justify-center">
                    <Card
                        width="700px"
                        maxHeight="700px"
                        height="auto"
                        className=""
                    >
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
                            className="pb-4"
                        ></Select>

                        {showInput()}

                        <div className="d-flex justify-end mt-4">
                            <Link href="/results">
                                <a className="btn-enviar"> Enviar </a>
                            </Link>
                        </div>
                    </Card>
                </div>
            </main>
        </div>
    )
}
