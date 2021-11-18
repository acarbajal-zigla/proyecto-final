class Presupuesto {
    constructor(montoInicial, gastos) {
        if (isNaN(montoInicial) || isNaN(gastos)) {
            return false;
        }
        this.montoInicial = parseFloat(montoInicial ? parseFloat(montoInicial).toFixed(2) : 0);
        this.gastos = parseFloat(gastos ? parseFloat(gastos).toFixed(2) : 0);
    }

    getGastos() {
        return this.gastos.toFixed(2);
    }

    getMontoInicial() {
        return this.montoInicial.toFixed(2);
    }

    getRestoNeto() {
        const resto = this.montoInicial - this.gastos
        return resto > 0 ? resto.toFixed(2) : 0
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