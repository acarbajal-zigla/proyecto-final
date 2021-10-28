class Presupuesto {
    constructor(montoInicial, gastos) {
        if ((check_is_number(montoInicial) & check_is_number(gastos)) != true) {
            return false;
        }
        this.montoInicial = parseFloat(montoInicial);
        this.gastos = parseFloat(gastos);
    }

    getGastos() {
        return this.gastos;
    }

    getMontoInicial() {
        return this.montoInicial;
    }

    getRestoNeto() {
        const resto = this.montoInicial - this.gastos
        return resto > 0 ? resto : 0
    }

    getRestoDiario() {
        let fecha = new Date();
        let dias = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate() - fecha.getDate();
        return this.getRestoNeto() / dias
    }

    agregarGasto(gasto) {
        if (check_is_number(gasto) == true)
            this.gastos += gasto;
        else
            return false;
    }
}