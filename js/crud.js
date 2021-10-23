const personas = []

const create = (persona) => {
    personas.push(persona);
}

const create = (Persona) => {
    const nombre = document.getElementById('input-nombre').value;
    const apellido = document.getElementById('input-apellido').value;
    const montoInicial = document.getElementById('input-montoInicial').value;
    const gastosMensuales = document.getElementById('input-gastosMensuales').value;

    localStorage.create()
}

