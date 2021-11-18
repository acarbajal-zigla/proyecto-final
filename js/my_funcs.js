function renderPersonasTable() {
    $('#tabla-personas').html('');

    let tableBody = document.createElement("tbody");
    let header = ['Nombre', 'Apellido', 'Presupuesto inicial', 'Gastos', 'Presupuesto para el resto del mes', 'Monto por día (resto del mes)'];
    let fila_titulos = document.createElement("div");
    fila_titulos.setAttribute("class", "row header");

    for (let element of header) {
        let celda = document.createElement("div");
        celda.setAttribute("class", "cell");
        celda.appendChild(document.createTextNode(element));
        fila_titulos.appendChild(celda);
    }
    tableBody.appendChild(fila_titulos);

    for (let persona of personas) {
        let fila = document.createElement("div");
        let presupuesto = new Presupuesto(persona.presupuesto.montoInicial, persona.presupuesto.gastos)
        
        fila.setAttribute("class", "row");

        for (element of [persona.nombre, persona.apellido, presupuesto.getMontoInicial(), presupuesto.getGastos(), presupuesto.getRestoNeto(), presupuesto.getRestoDiario()]) {
            let celda = document.createElement("div");
            celda.setAttribute("class", "cell");
            celda.appendChild(document.createTextNode(element));
            fila.appendChild(celda);
        }
        tableBody.appendChild(fila);
    }
    $('#tabla-personas').append(tableBody);
}
  
    