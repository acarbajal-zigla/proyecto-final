class Persona {
    constructor(nombre, apellido, montoInicial, gastosMensuales) {
        if (nombre.length > 1 && apellido.length > 1) {
            this.nombre = nombre;
            this.apellido = apellido;
        }
        else
            return false;
        this.presupuesto = new Presupuesto(montoInicial, gastosMensuales);
        if (this.presupuesto == false)
            return false;
    }

    // Setters
    setNombre(nombre) {
        if (nombre.length > 1) {
            this.nombre = nombre;
            return true;
        }
        else {
            return false;
        }
    }

    setApellido(apellido) {
        if (apellido.length > 1) {
            this.apellido = apellido;
            return true;
        }
        else {
            return false;
        }
    }

    setDomicilio(domicilio) {
        this.domicilio = domicilio;
    }

    setPresupuesto(presupuesto) {
        if (typeof (presupuesto) != typeof (Presupuesto))
            throw "El presupuesto debe ser un objeto Presupuesto";
        else {
            this.presupuesto = presupuesto;
        }
    }

    // Getters
    getNombre() {
        return this.nombre;
    }

    getApellido() {
        return this.apellido;
    }

    getDomicilio() {
        return this.domicilio;
    }
}

