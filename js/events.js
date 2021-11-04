agregarPersonaMenuButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (divIngresoPersona.style.display === 'none') {
        divIngresoPersona.style.display = 'block';
    }
    else
        divIngresoPersona.style.display = 'none';
});

eliminarPersonaMenuButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (divEliminarPersona.style.display === 'none') {
        divEliminarPersona.style.display = 'block';
    }
    else
        divEliminarPersona.style.display = 'none';
});

verRegistrosMenuButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (tablaPersonas.style.display === 'none') {
        tablaPersonas.style.display = 'table';
        renderPersonasTable();
    }
    else
        tablaPersonas.style.display = 'none';
});

// Escuchar el evento submit del formulario ppal
formPersona.addEventListener("submit", (event) => {
    event.preventDefault();

    const dni = inputDNI.value;
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const montoInicial = inputMontoInicial.value;
    const gastosMensuales = inputGastosMensuales.value;

    formPersona.reset();
    const persona = new Persona(dni, nombre, apellido, montoInicial, gastosMensuales);
    if (persona)
        create(persona);
    renderPersonasTable();
});

// Escuchar el evento submit del formulario de ramocion de personas
formEliminar.addEventListener("submit", (event) => {
    event.preventDefault();

    const dni = inputEliminarDNI.value;
    remove(dni);
    renderPersonasTable();
});