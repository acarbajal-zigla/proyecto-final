class Persona{
    constructor(){}
    
    // Setters
    setNombre(nombre){
        if(nombre.length>1){
            this.nombre=nombre;
            return true;
        }
        else{
            return false;
        }
    }

    setApellido(apellido){
        if(apellido.length>1){
            this.apellido=apellido;
            return true;
        }
        else{
            return false;
        }
    }

    setDomicilio(domicilio){
        this.domicilio = domicilio;
    }

    setPresupuesto(presupuesto){
        if(typeof(presupuesto) != typeof(Presupuesto))
            throw "El presupuesto debe ser un objeto Presupuesto";
        else{
            this.presupuesto = presupuesto;
        }
    }

    // Getters
    getNombre(){
        return this.nombre;
    }

    getApellido(){
        return this.apellido;
    }

    getDomicilio(){
        return this.domicilio;
    }

    showData(){
        const text = `Nombre: ${this.nombre}\n
        Apellido: ${this.apellido}\n
        Presupuesto inicial: $${this.presupuesto.getMontoInicial()}\n
        Gastos: $${this.presupuesto.getGastos()}\n
        Presupuesto para el resto del mes: $${this.presupuesto.getRestoNeto()}\n
        Monto por día (resto del mes): $${this.presupuesto.getRestoDiario()}/día`;
        alert(text);
    }

    requestViaPrompt(){
        let nombre, apellido, presupuesto;
        
        do{
            nombre = prompt('Por favor, ingrese su nombre. Debe tener al menos 2 caracteres.');
        }while(nombre == false || nombre.length < 2);
        
        do{
            apellido = prompt('Por favor, ingrese su apellido. Debe tener al menos 2 caracteres.');
        }while(apellido == false || apellido.length < 2);
        
        do{
            this.presupuesto = Presupuesto.prototype.requestViaPrompt();
        }while(presupuesto == false);

        this.nombre = nombre;
        this.apellido = apellido;
        return this;
    }
}

