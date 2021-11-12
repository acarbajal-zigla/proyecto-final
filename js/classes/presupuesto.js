class Presupuesto {
    constructor(montoInicial, gastos) {
        if (isNaN(montoInicial) || isNaN(gastos)) {
            return false;
        }
        this.montoInicial = parseFloat(montoInicial ? montoInicial : 0);
        this.gastos = parseFloat(gastos ? gastos : 0);
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
        return Number((this.getRestoNeto() / dias).toFixed(1));
    }

    agregarGasto(gasto) {
        if (!isNaN(gasto))
            this.gastos += gasto;
        else
            return false;
    }
}