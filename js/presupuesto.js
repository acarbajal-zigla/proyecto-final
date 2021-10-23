class Presupuesto{
    constructor(montoInicial, gastos){
        if((check_is_number(montoInicial) & check_is_number(gastos)) != true){
            return false;
        }
        this.montoInicial = parseFloat(montoInicial);
        this.gastos = parseFloat(gastos);
    }

    getGastos(){
        return this.gastos;
    }

    getMontoInicial(){
        return this.montoInicial;
    }

    getRestoNeto(){
        return this.montoInicial - this.gastos
    }

    getRestoDiario(){
        let fecha = new Date();
        let dias = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate() - fecha.getDate();
        return this.getPresupuestoRestante() / dias;
    }

    agregarGasto(gasto){
        if(check_is_number(gasto) == true)
            this.gastos += gasto;
        else
            return false;
    }

    requestViaPrompt(){
        let montoInicial, gastos;
        do{
            montoInicial = prompt("Ingrese su monto inicial");
        }while(check_is_number(montoInicial) == false);

        do{
            gastos = prompt("Ingrese el total de gastos");
        }while(check_is_number(gastos) == false);

        return new Presupuesto(parseFloat(montoInicial), parseFloat(gastos));
    }
}