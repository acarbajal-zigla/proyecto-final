// Obtener elmentos del DOM
const formPersona = document.getElementById('form-persona');
const inputNombre = document.getElementById('input-nombre');
const inputApellido = document.getElementById('input-apellido');
const inputMontoInicial = document.getElementById('input-montoInicial');
const inputGastosMensuales = document.getElementById('input-gastosMensuales');

const listaPersonas = document.getElementById("listaPersonas");

let personas = JSON.parse(localStorage.getItem('personas')) || [];

function renderPersonasList() {
    listaPersonas.innerHTML = "";
    for (let persona of personas) {
        let itemPersona = document.createElement('li');
        let presupuesto = new Presupuesto(persona.presupuesto.montoInicial, persona.presupuesto.gastos)
        itemPersona.innerHTML = `   
                                Nombre: ${persona.nombre}<br>
                                Apellido: ${persona.apellido}<br>
                                Presupuesto inicial: $${presupuesto.getMontoInicial()}<br>
                                Gastos: $${presupuesto.getGastos()}<br>
                                Presupuesto para el resto del mes: $${presupuesto.getRestoNeto()}<br>
                                Monto por día (resto del mes): $${presupuesto.getRestoDiario()}/día
                                `;

        listaPersonas.appendChild(itemPersona);
    }
}

function getAll() {
    return JSON.parse(localStorage.getItem("personas"));
}

// Agrego una persona a la lista
function create(persona) {
    if (Object.keys(persona).length === 0)
        alert("Revise que los datos sean correctos");
    else {
        personas.push(persona);
        localStorage.setItem('personas', JSON.stringify(personas));
    }
}

// Encontrar persona por nombre y apellido
function findPersona(nombre, apellido) {

    const persona = personas.find(persona => (persona.nombre === nombre && persona.apellido === apellido));
    if (!persona)
        throw new Error(`${nombre} ${apellido} no se encuentra en la lista.`);

    return persona;
}

const remove = (nombre, apellido) => {

    const persona = findOne(nombre, apellido);
    const index = perritos.indexOf(persona);
    personas.splice(index, 1);
    localStorage.setItem('personas', JSON.stringify(personas));
}

// Escuchar el evento submit del formulario
formPersona.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);

    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const montoInicial = inputMontoInicial.value;
    const gastosMensuales = inputGastosMensuales.value;

    formPersona.reset();
    const persona = new Persona(nombre, apellido, montoInicial, gastosMensuales);
    create(persona);
    renderPersonasList();
});