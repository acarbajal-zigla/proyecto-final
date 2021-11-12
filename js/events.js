$('#agregar-persona-button').click(function(){
    $('#ingreso-persona').toggle();
});

$('#eliminar-persona-button').click(function(){
    $('#eliminar-persona').toggle();
});

$('#ver-personas-button').click(function() {
    $('#tabla-personas').toggle();
});

// Escuchar el evento submit del formulario ppal
$('#form-persona').submit(function(event) {
    event.preventDefault();

    const dni = $('#input-dni').val();
    const nombre = $('#input-nombre').val();
    const apellido = $('#input-apellido').val();
    const montoInicial = $('#input-montoInicial').val();
    const gastosMensuales = $('#input-gastosMensuales').val();

    $('#form-persona').trigger('reset');
    const persona = new Persona(dni, nombre, apellido, montoInicial, gastosMensuales);
    if (persona)
        create(persona);
    renderPersonasTable();
});

// Escuchar el evento submit del formulario de ramocion de personas
$('#form-eliminar-persona').submit(function (event) {
    event.preventDefault();

    const dni = $("#input-eliminar-dni").value;
    remove(dni);
    renderPersonasTable();
});
