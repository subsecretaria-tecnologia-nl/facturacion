import Input from "atoms/Input"
import Label from "atoms/Label"
import { datosFiscales } from "catalogs/register"
import { useState } from "react"

const RegisterForm = ({ paymentMethod, dataForm }) => {
    const [inputValues, setInputValues] = useState({})
    const handleInputChange = ({ target: { value, name } }) => {
        setInputValues({ ...inputValues, [name]: value })
    }
    const names = []

    for (const name in datosFiscales) {
        names.push(name)
    }

    const width = "300px"
    return (
        <>
            <div className="default">
                <div className="d-flex">
                    <Label className="pr-2">Folio unico: </Label>
                    <Label className="bold">
                        010000000000186882270434691279
                    </Label>
                </div>
                <div className="d-flex">
                    <Label className="pr-2">Forma de pago: </Label>
                    <Label className="bold">{paymentMethod.text}</Label>
                </div>
                <div className="d-flex">
                    <Label className="pr-2">Total esta transaccion: </Label>
                    <Label className="bold">7,884.00 MXN</Label>
                </div>

                <div className="d-flex justify-space-between">
                    <Label>Total impuestos retenidos: </Label>
                    <Label className="bold">0.00 MXN </Label>
                    <Label>Total impuestos locales retenidos: </Label>
                    <Label className="bold">0.00 MXN</Label>
                </div>
                <div className="d-flex justify-space-between">
                    <Label>Total impuestos trasladados: </Label>
                    <Label className="bold">0.00 MXN </Label>
                    <Label>Total impuestos locales trasladados: </Label>
                    <Label className="bold">0.00 MXN</Label>
                </div>

                <div className="py-6">
                    <Label>aqui abra una tabla</Label>
                </div>

                <div className="pt-6">
                    <Label className="bold h1">
                        Ingrese sus datos fiscales:
                    </Label>
                </div>

                <div>
                    <div style={{ width }}>
                        <Label> </Label>
                    </div>
                    <Label> Datos Obligatorios </Label>
                </div>
                <div>
                    <Label> </Label>
                    <Label>
                        {" "}
                        Por disposición oficial del SAT el RFC ingresado debe
                        estar activo ante esta entidad, de lo contrario no se
                        podrá emitir tu CFD{" "}
                    </Label>
                </div>
            </div>

            {names.map((name) =>
                datosFiscales[name].inputs.map(
                    ({ name, placeholder, label }, index) => (
                        <div className="d-flex" key={index}>
                            <div className="minwidth-label d-flex align-center">
                                <Label> {label} </Label>
                            </div>
                            <Input
                                name={name}
                                placeholder={placeholder}
                                value={inputValues[name] ?? ""}
                                onChange={handleInputChange}
                                className="input-text my-2 ml-2"
                            ></Input>
                        </div>
                    )
                )
            )}
        </>
    )
}

export default RegisterForm
