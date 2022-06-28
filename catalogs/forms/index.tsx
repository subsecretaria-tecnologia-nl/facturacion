export const tipoPago = {
    presencial_tesoreria: {
        label: "Captura los datos que se encuentran en tu recibo de pago.",
        inputs: [
            {
                label: "Número de caja (4 dígitos)",
                placeholder: "1234",
                name: "caja",
            },
            {
                label: "Folio de Pago",
                placeholder: "000000",
                name: "folio_pago",
            },
            {
                label: "Numero transaccion",
                placeholder: "000000",
                name: "num_trans",
            },
        ],
    },
    presencial_icv: {
        label: false,
        inputs: [
            {
                label: "Captura el folio único que se muestra en la parte inferior del recibo de pago.",
                placeholder: "0000000",
                name: "folio_unico",
            },
        ],
    },
    directo_banco: {
        label: false,
        inputs: [
            {
                label: "Captura la placa pagada sin dejar espacios ni guiones. ej. Para la placa SKT-70-95 se ingresa la placa SKT7095 como referencia.",
                placeholder: "ABC1234",
                name: "placa",
            },
        ],
    },
    internet: {
        label: false,
        inputs: [
            {
                label: " Captura el folio único que se muestra en la parte inferior del recibo de pago.",
                placeholder: "0000000",
                name: "folio_unico",
            },
        ],
    },
    referencia_bancaria: {
        label: false,
        inputs: [
            {
                label: "Captura la línea de referencia con la que realizaste tu pago.",
                placeholder: "000000000000000000",
                name: "referencia",
            },
        ],
    },
    directo_oxxo: {
        label: false,
        inputs: [
            {
                label: "Captura la placa pagada sin dejar espacios ni guiones. ej. Para la placa SKT-70-95 se ingresa la placa SKT7095 como referencia.",
                placeholder: "ABC1234",
                name: "placa",
            },
        ],
    },
}

export const paymentOptions = [
    { text: "Selecciona una opcion", id: "" },
    { text: "Pago presencial de Tesorería", id: "presencial_tesoreria" },
    {
        text: "Pago presencial Instituto de Control Vehicular",
        id: "presencial_icv",
    },
    { text: "Pago directo en Banco", id: "directo_banco" },
    { text: "Pago en Internet", id: "internet" },
    { text: "Pago con referencia bancaria", id: "referencia_bancaria" },
    { text: "Pago directo en OXXO", id: "directo_oxxo" },
]
