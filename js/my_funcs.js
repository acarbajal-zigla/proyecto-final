function get_datos() {
    const DATOS_SOLICITADOS = ["nombre", "apellido", "edad", "gastos de la última semana", "presupuesto inicial"];
    let datos = new Array();
    let dato;

    for (let i = 0; i < DATOS_SOLICITADOS.length(); i++) {
        do {
            dato = prompt(`Por favor, ingrese su ${DATOS_SOLICITADOS[i]}`);
            dato = check_dato(dato);
        } while (dato == false);
        datos.push(dato);
    }
    return datos;
}

function check_dato(dato) {
    const check_is_number = (valor, msg) => { if (isNaN(valor)) { alert(msg); return false; } else return true };

    if (dato == null) {
        alert("Debe ingresar un dato.")
        return false
    }
    if (DATOS_SOLICITADOS[i] == "nombre" || DATOS_SOLICITADOS[i] == "apellido") {
        if (dato.length() > 1)
            return dato;
        else
            return false
    }
    else if (DATOS_SOLICITADOS[i] == "edad" || DATOS_SOLICITADOS[i] == "gastos de la última semana" || DATOS_SOLICITADOS[i] == "presupuesto inicial") {
        if (check_is_number(dato, "Debe ingresar un número.") == true) {
            if (DATOS_SOLICITADOS[i] == "edad")
                return parseInt(dato);
            else
                return parseFloat(dato);
        }
        else
            return false
    }
    else {
        return false;
    }
}