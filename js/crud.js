// Obtener elmentos del DOM
const formPersona = document.getElementById('form-persona');
const inputDNI = document.getElementById('input-dni');
const inputNombre = document.getElementById('input-nombre');
const inputApellido = document.getElementById('input-apellido');
const inputMontoInicial = document.getElementById('input-montoInicial');
const inputGastosMensuales = document.getElementById('input-gastosMensuales');

const formEliminar = document.getElementById('form-eliminar-persona');
const inputEliminarDNI = document.getElementById('input-eliminar-dni');

const divMenuAcciones = document.getElementById('menu-acciones');
const agregarPersonaMenuButton = document.getElementById('agregar-persona-button');
const eliminarPersonaMenuButton = document.getElementById('eliminar-persona-button');
const verRegistrosMenuButton = document.getElementById('ver-personas-button');
const divIngresoPersona = document.getElementById('ingreso-persona');
const divEliminarPersona = document.getElementById('eliminar-persona');
const tablaPersonas = document.getElementById("tabla-personas");

let personas = JSON.parse(localStorage.getItem('personas')) || [];

renderPersonasTable();

function getAll() {
    return JSON.parse(localStorage.getItem("personas"));
}

// Agrego una persona a la lista
function create(persona) {
    if (Object.keys(persona).length === 0)
        alert("Revise que los datos sean correctos");
    else {
        if (findPersona(persona.dni) == false) {
            alert('Ya existe una persona con ese DNI.');
        }
        else {
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
    if (persona) {
        const index = personas.indexOf(persona);
        personas.splice(index, 1);
        localStorage.setItem('personas', JSON.stringify(personas));
    }
}




