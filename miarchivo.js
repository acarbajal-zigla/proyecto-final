import Persona from "./js/persona.js";

function yes_no_prompt(message){
    do{
        let opt = promp(`${message} (y/n)`)
        if(!['y', 'n'].includes(opt.toLowerCase()))
            opt = false;
    }while(opt == false);
    return opt;
}

alert("Bienvenidx al gestor de gastos!")

let personas = Array();
do{
    personas.push(Persona.requestViaPrompt());
}while(yes_no_prompt("Desea continuar agregando personas?") == 'y');

for (const persona in personas){
    persona.showData();
}
