function yes_no_prompt(message){
    let opt;
    do{
        opt = prompt(`${message} (y/n)`)
        if(!['y', 'n'].includes(opt.toLowerCase()))
            opt = false;
    }while(opt == false);
    return opt;
}

alert("Bienvenidx al gestor de gastos!")

let personas = Array();
do{
    personas.push(Persona.prototype.requestViaPrompt());
}while(yes_no_prompt("Desea continuar agregando personas?") == 'y');

personas.forEach(function(element){
    element.showData();
});
