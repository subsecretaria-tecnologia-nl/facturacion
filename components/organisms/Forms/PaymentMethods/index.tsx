import { useState } from "react"
import classNames from "classnames"
import Button from "atoms/Buttons"
import Label from "atoms/Label"
import Select from "atoms/Select"
import Title from "atoms/Typography"
import { tipoPago, paymentOptions } from "catalogs/forms"
import Input from "atoms/Input"

const PaymentMethods = ({ onChange }) => {
    const [paymentOptionsSelected, setPaymentOptions] = useState("")
    const [inputValues, setInputValues] = useState({})
    const [inputErrors, setInputErrors] = useState([])

    const handleSelectChange = ({ target: { value } }) => {
        setInputValues({})
        setPaymentOptions(value)
    }

    const handleInputChange = ({ target: { value, name } }) => {
        const errorIndex = inputErrors.findIndex((ele) => ele === name)
        if (errorIndex >= 0 && value.length > 0)
            setInputErrors(inputErrors.filter((ele) => ele !== name))
        setInputValues({ ...inputValues, [name]: value })
    }

    const handleSubmit = () => {
        const inputs =
            !!paymentOptionsSelected &&
            tipoPago[paymentOptionsSelected] &&
            tipoPago[paymentOptionsSelected].inputs
        const errors = inputs
            .map(({ name }) => {
                return !inputValues[name] && name
            })
            .filter((ele) => ele)
        setInputErrors(errors)

        if (errors.length === 0)
            return onChange({
                paymentMethod: paymentOptions.find(
                    (ele) => ele.id === paymentOptionsSelected
                ),
                inputValues,
            })
    }

    return (
        <>
            <Title>Obtener Comprobante Fiscal</Title>
            <Label className="mx-1 mb-4">
                Para generar su CFDI es necesario que tenga sus datos fiscales a
                la mano y responda las siguientes preguntas:
            </Label>

            <Select
                options={paymentOptions}
                value={paymentOptionsSelected}
                onChange={handleSelectChange}
                className="pb-4"
            ></Select>

            {!!paymentOptionsSelected &&
                tipoPago[paymentOptionsSelected] &&
                tipoPago[paymentOptionsSelected].label && (
                    <Label className="mx-1 mb-4">
                        {tipoPago[paymentOptionsSelected].label}
                    </Label>
                )}

            {!!paymentOptionsSelected &&
                tipoPago[paymentOptionsSelected] &&
                tipoPago[paymentOptionsSelected].inputs &&
                tipoPago[paymentOptionsSelected].inputs.map(
                    ({ name, placeholder, label }) => (
                        <div
                            className={classNames("mt-4", {
                                "has-error": inputErrors.find(
                                    (ele) => ele === name
                                ),
                            })}
                            key={name}
                        >
                            <label htmlFor="">{label}</label>
                            <Input
                                name={name}
                                placeholder={placeholder}
                                value={inputValues[name] ?? ""}
                                onChange={handleInputChange}
                                className="input-text my-2"
                            ></Input>
                        </div>
                    )
                )}

            {!!paymentOptionsSelected && (
                <div className="d-flex justify-end mt-4">
                    <Button onClick={handleSubmit}>
                        <a className="btn-enviar"> Enviar </a>
                    </Button>
                </div>
            )}
        </>
    )
}

export default PaymentMethods
