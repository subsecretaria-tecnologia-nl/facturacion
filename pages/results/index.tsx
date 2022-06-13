import Card from "molecules/Card"
import Label from "atoms/Label"
import Input from "atoms/Input"
import { useState } from "react"

export default function Results() {
    const [datosFiscales, setDatosFiscales] = useState({
        rfc: "",
        formaPago: "",
        claveProducto: "",
        correo: "",
        nombres: "",
        apellidoPat: "",
        apellidoMat: "",
        calle: "",
        numeroExt: "",
        numeroInt: "",
        colonia: "",
        localidad: "",
        referencia: "",
        municipio: "",
        estado: "",
        pais: "",
        cp: "",
        curp: "",
        entreCalle1: "",
        entreCalle2: "",
        telefonoFijo: "",
        telefonoMovil: "",
    })
    const width = "300px"

    const handleRfc = (e) =>
        setDatosFiscales({ ...datosFiscales, rfc: e.target.value })
    const handleFormaPago = (e) =>
        setDatosFiscales({ ...datosFiscales, formaPago: e.target.value })
    const handleClave = (e) =>
        setDatosFiscales({ ...datosFiscales, claveProducto: e.target.value })
    const handleCorreo = (e) =>
        setDatosFiscales({ ...datosFiscales, correo: e.target.value })
    const handleNombres = (e) =>
        setDatosFiscales({ ...datosFiscales, nombres: e.target.value })
    const handleApellidoPat = (e) =>
        setDatosFiscales({ ...datosFiscales, apellidoPat: e.target.value })
    const handleApellidoMat = (e) =>
        setDatosFiscales({ ...datosFiscales, apellidoMat: e.target.value })
    const handleCalle = (e) =>
        setDatosFiscales({ ...datosFiscales, calle: e.target.value })
    const handleNumExt = (e) =>
        setDatosFiscales({ ...datosFiscales, numeroExt: e.target.value })
    const handleNumInt = (e) =>
        setDatosFiscales({ ...datosFiscales, numeroInt: e.target.value })
    const handleColonia = (e) =>
        setDatosFiscales({ ...datosFiscales, colonia: e.target.value })
    const handleLocalidad = (e) =>
        setDatosFiscales({ ...datosFiscales, localidad: e.target.value })
    const handleReferencia = (e) =>
        setDatosFiscales({ ...datosFiscales, referencia: e.target.value })
    const handleMunicipio = (e) =>
        setDatosFiscales({ ...datosFiscales, municipio: e.target.value })
    const handleEstado = (e) =>
        setDatosFiscales({ ...datosFiscales, estado: e.target.value })
    const handlePais = (e) =>
        setDatosFiscales({ ...datosFiscales, pais: e.target.value })
    const handleCp = (e) =>
        setDatosFiscales({ ...datosFiscales, cp: e.target.value })
    const handleCurp = (e) =>
        setDatosFiscales({ ...datosFiscales, curp: e.target.value })
    const handleCalle1 = (e) =>
        setDatosFiscales({ ...datosFiscales, entreCalle1: e.target.value })
    const handleCalle2 = (e) =>
        setDatosFiscales({ ...datosFiscales, entreCalle2: e.target.value })
    const handleTelefonoF = (e) =>
        setDatosFiscales({ ...datosFiscales, telefonoFijo: e.target.value })
    const handleTelefonoM = (e) =>
        setDatosFiscales({ ...datosFiscales, telefonoMovil: e.target.value })

    return (
        <>
            <div className={""}>
                <main className={"main justify-center"}>
                    <div className="d-flex justify-center">
                        <Card width="850px" height="auto" className="">
                            <div className="d-flex">
                                <Label className="pr-2">Folio unico: </Label>
                                <Label className="bold">
                                    010000000000186882270434691279
                                </Label>
                            </div>
                            <div className="d-flex">
                                <Label className="pr-2">Forma de pago: </Label>
                                <Label className="bold">
                                    Pago en una sola Exhibicion
                                </Label>
                            </div>
                            <div className="d-flex">
                                <Label className="pr-2">
                                    Total esta transaccion:{" "}
                                </Label>
                                <Label className="bold">7,884.00 MXN</Label>
                            </div>

                            <div className="d-flex justify-space-between">
                                <Label>Total impuestos retenidos: </Label>
                                <Label className="bold">0.00 MXN </Label>
                                <Label>
                                    Total impuestos locales retenidos:{" "}
                                </Label>
                                <Label className="bold">0.00 MXN</Label>
                            </div>
                            <div className="d-flex justify-space-between">
                                <Label>Total impuestos trasladados: </Label>
                                <Label className="bold">0.00 MXN </Label>
                                <Label>
                                    Total impuestos locales trasladados:{" "}
                                </Label>
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
                                    Por disposición oficial del SAT el RFC
                                    ingresado debe estar activo ante esta
                                    entidad, de lo contrario no se podrá emitir
                                    tu CFD{" "}
                                </Label>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> RFC </Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.rfc}
                                    onChange={handleRfc}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> Forma de Pago: </Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.formaPago}
                                    onChange={handleFormaPago}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> Clave del Producto: </Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.claveProducto}
                                    onChange={handleClave}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                            <div>
                                <Label> </Label>
                                <Label className="bold">
                                    {" "}
                                    Informacion Importante{" "}
                                </Label>
                            </div>
                            <div>
                                <Label> </Label>
                                <Label>
                                    Para recibir tu comprobante digital es
                                    necesario ingreses tu correo, de lo
                                    contrario podrás consultar a través del
                                    portal
                                    https://portalcfdi.facturaelectronica.sat.gob.mx/
                                    las facturas recibidas por esta entidad
                                    Gubernamental.{" "}
                                </Label>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> Correo electronico: </Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.correo}
                                    onChange={handleCorreo}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                            <div>
                                <Label> </Label>
                                <Label className="bold">
                                    {" "}
                                    Información Adicional
                                </Label>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> Nombres: </Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.nombres}
                                    onChange={handleNombres}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> Apellido paterno: </Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.apellidoPat}
                                    onChange={handleApellidoPat}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> Apellido materno: </Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.apellidoMat}
                                    onChange={handleApellidoMat}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> Calle: </Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.calle}
                                    onChange={handleCalle}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> Numero exterior: </Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.numeroExt}
                                    onChange={handleNumExt}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> Numero interior: </Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.numeroInt}
                                    onChange={handleNumInt}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> Colonia: </Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.colonia}
                                    onChange={handleColonia}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> Localidad: </Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.localidad}
                                    onChange={handleLocalidad}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> Referencia: </Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.referencia}
                                    onChange={handleReferencia}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> Municipio:</Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.municipio}
                                    onChange={handleMunicipio}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> Estado: </Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.estado}
                                    onChange={handleEstado}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> Pais:</Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.pais}
                                    onChange={handlePais}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> C. P. </Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.cp}
                                    onChange={handleCp}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> C.U.R.P. </Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.curp}
                                    onChange={handleCurp}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> Entre calle 1: </Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.entreCalle1}
                                    onChange={handleCalle1}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> Entre calle 2: </Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.entreCalle2}
                                    onChange={handleCalle2}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> Telefono fijo: </Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.telefonoFijo}
                                    onChange={handleTelefonoF}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                            <div className="d-flex">
                                <div className="minwidth-label d-flex align-center">
                                    <Label> Telefono movil: </Label>
                                </div>
                                <Input
                                    name="test1"
                                    placeholder="dexter"
                                    value={datosFiscales.telefonoMovil}
                                    onChange={handleTelefonoM}
                                    className="input-text my-2"
                                ></Input>
                            </div>
                        </Card>
                    </div>
                </main>
            </div>
        </>
    )
}
