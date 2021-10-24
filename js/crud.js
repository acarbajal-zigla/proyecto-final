// Obtener elmentos del DOM
const formPersona = document.getElementById('form-persona');
const inputNombre = document.getElementById('input-nombre');
const inputApellido = document.getElementById('input-apellido');
const inputMontoInicial = document.getElementById('input-montoInicial');
const inputGastosMensuales = document.getElementById('input-gastosMensuales');

const personas = [];

const renderPersonasList = () => {

    for (let persona of personas) {

        let itemPersona = document.createElement('li');

        itemPersona.innerHTML = `   
                                Nombre: ${persona.nombre}\n
                                Apellido: ${persona.apellido}\n
                                Presupuesto inicial: $${persona.presupuesto.getMontoInicial()}\n
                                Gastos: $${persona.presupuesto.getGastos}\n
                                Presupuesto para el resto del mes: $${persona.presupuesto.getRestoNeto()}\n
                                Monto por día (resto del mes): $${persona.presupuesto.getRestoDiario()}/día
                                `;

        listaPersonas.appendChild(itemPersona);
    }
}

function getAll() {
    return personas;
}

// Agrego una persona a la lista
function create(persona) {
    personas.push(persona);
    localStorage.setItem('personas', JSON.stringify(personas));
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

renderPersonasList();

// Escuchar el evento submit del formulario
formPersona.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);

    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const montoInicial = inputMontoInicial.value;
    const gastosMensuales = inputGastosMensuales.value;

    const persona = new Persona(nombre, apellido, montoInicial, gastosMensuales);

    create(persona);
});