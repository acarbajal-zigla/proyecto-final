$('#agregar-persona-button').click(function () {
    $('#ingreso-persona').toggle();
    //Escondo los demas
    $('#eliminar-persona').hide();
    $('#tabla-personas').hide();
});

$('#eliminar-persona-button').click(function () {
    $('#eliminar-persona').toggle();
    //Escondo los demas
    $('#ingreso-persona').hide();
    $('#tabla-personas').hide();
});

$('#ver-personas-button').click(function () {
    $('#tabla-personas').toggle();
    //Escondo los demas
    $('#eliminar-persona').hide();
    $('#ingreso-persona').hide();
    renderPersonasTable();
});

// Escuchar el evento submit del formulario ppal
$('#form-persona').submit(function (event) {
    event.preventDefault();

    const dni = $('#input-dni').val();
    const nombre = $('#input-nombre').val();
    const apellido = $('#input-apellido').val();
    const montoInicial = $('#input-montoInicial').val();
    const gastosMensuales = $('#input-gastosMensuales').val();

    const persona = new Persona(dni, nombre, apellido, montoInicial, gastosMensuales);
    if (persona) {
        create(persona);
    }
    $('#form-persona').trigger('reset');
    renderPersonasTable();
});

// Escuchar el evento submit del formulario de ramocion de personas
$('#form-eliminar-persona').submit(function (event) {
    event.preventDefault();
    const dni = $('#input-eliminar-dni').val();
    remove(dni);
    $('#form-eliminar-persona').trigger('reset');
    renderPersonasTable();
});
