class Persona {
    constructor(dni, nombre, apellido, montoInicial, gastosMensuales) {
        let ret = true;
        if (isNaN(dni) || dni === 0){
            ret = false
        }

        ret &= (nombre.length > 1 && apellido.length > 1);
        
        const presupuesto = new Presupuesto(montoInicial, gastosMensuales);
        if (presupuesto === false){
            ret = false;
        }   
        console.log(ret)
        if (ret == true){
            this.dni = parseInt(dni);
            this.nombre = nombre;
            this.apellido = apellido;
            this.presupuesto = presupuesto;
        }
        else{
            return ret;
        }
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
}

