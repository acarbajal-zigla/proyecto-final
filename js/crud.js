// Obtener elmentos del DOM
const formPersona = document.getElementById('form-persona');
const inputDNI = document.getElementById('input-dni');
const inputNombre = document.getElementById('input-nombre');
const inputApellido = document.getElementById('input-apellido');
const inputMontoInicial = document.getElementById('input-montoInicial');
const inputGastosMensuales = document.getElementById('input-gastosMensuales');
const listaPersonas = document.getElementById("listaPersonas");

const formEliminar = document.getElementById('form-eliminar-persona');
const inputEliminarDNI = document.getElementById('input-eliminar-dni');

let personas = JSON.parse(localStorage.getItem('personas')) || [];

renderPersonasList();

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
        if(findPersona(persona.dni) == false){
            alert('Ya existe una persona con ese DNI.');
        }
        else{
            personas.push(persona);
            localStorage.setItem('personas', JSON.stringify(personas));
        }
    }
}

// Encontrar persona por nombre y apellido
function findPersona(dni) {
    return personas.find(persona => (persona.dni === dni));
}

const remove = (dni) => {
    const persona = findPersona(dni);
    if(persona){
        const index = personas.indexOf(persona);
        personas.splice(index, 1);
        localStorage.setItem('personas', JSON.stringify(personas));
    }
}

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
    renderPersonasList();
});

// Escuchar el evento submit del formulario de ramocion de personas
formEliminar.addEventListener("submit", (event) => {
    event.preventDefault();

    const dni = inputEliminarDNI.value;
    remove(dni);
    renderPersonasList();
});