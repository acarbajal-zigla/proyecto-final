function check_is_number(valor) {
    if (isNaN(valor))
        return false;
    else
        return true;
}

function renderPersonasTable() {
    tablaPersonas.innerHTML = "";
    let tableBody = document.createElement("tbody");
    let header = ['Nombre', 'Apellido', 'Presupuesto inicial', 'Gastos', 'Presupuesto para el resto del mes', 'Monto por día (resto del mes)'];
    let filaTitulos = document.createElement("tr");

    for (let element of header) {
        let celda = document.createElement("td");
        celda.appendChild(document.createTextNode(element));
        filaTitulos.appendChild(celda);
    }
    tableBody.appendChild(filaTitulos);

    for (let persona of personas) {
        let fila = document.createElement("tr");
        let presupuesto = new Presupuesto(persona.presupuesto.montoInicial, persona.presupuesto.gastos)

        for (element of [persona.nombre, persona.apellido, presupuesto.getMontoInicial(), presupuesto.getGastos(), presupuesto.getRestoNeto(), presupuesto.getRestoDiario()]) {
            let celda = document.createElement("td");
            celda.appendChild(document.createTextNode(element));
            fila.appendChild(celda);
        }
        tableBody.appendChild(fila);
    }
    tablaPersonas.appendChild(tableBody);
}