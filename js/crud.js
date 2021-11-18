// Obtener elmentos del DOM
let personas = JSON.parse(localStorage.getItem('personas')) || [];
if (personas.length == 0)
    setDatos();


function getAll() {
    return JSON.parse(localStorage.getItem('personas'));
}

// Agrego una persona a la lista
function create(persona) {
    if (Object.keys(persona).length === 0) {
        console.log('Revise que los datos sean correctos');
    }
    else {
        if (findPersona(persona.dni) == true) {
            console.log('Ya existe una persona con ese DNI.');
        }
        else {
            personas.push(persona);
            localStorage.setItem('personas', JSON.stringify(personas));
        }
    }
}

// Encontrar persona por nombre y apellido
function findPersona(dni) {
    return personas.find(persona => (persona.dni == dni));
}

const remove = (dni) => {
    const persona = findPersona(dni);
    if (persona) {
        const index = personas.indexOf(persona);
        personas.splice(index, 1);
        localStorage.setItem('personas', JSON.stringify(personas));
    }
    else {
        console.log(`No se encontró la persona con dni ${dni}`);
    }
}




