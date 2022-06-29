import Card from "molecules/Card"
import { useState } from "react"
import PaymentMethods from "organisms/Forms/PaymentMethods"
import RegisterForm from "organisms/Forms/register"

export default function Home() {
    const [steps, setSteps] = useState(0)
    const [paymentMethodSelected, setPaymentMethodSelected] = useState({})
    const [dataForm, setDataForm] = useState({})

    const handlePaymentMethods = ({ paymentMethod, inputValues }) => {
        console.log("vater", paymentMethod)
        setPaymentMethodSelected(paymentMethod)
        setDataForm(inputValues)
        setSteps(1)
    }

    return (
        <div className={""}>
            <main className={"main justify-center"}>
                <div className="d-flex justify-center">
                    <Card
                        width="700px"
                        // maxHeight="700px"
                        height="auto"
                        className=""
                    >
                        {steps === 0 && (
                            <PaymentMethods onChange={handlePaymentMethods} />
                        )}
                        {steps === 1 && (
                            <RegisterForm
                                paymentMethod={paymentMethodSelected}
                                dataForm={dataForm}
                            />
                        )}
                    </Card>
                </div>
            </main>
        </div>
    )
}
