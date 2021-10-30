function yes_no_prompt(message){
    let opt;
    do{
        opt = prompt(`${message} (y/n)`)
        if(!['y', 'n'].includes(opt.toLowerCase()))
            opt = false;
    }while(opt == false);
    return opt;
}

function compare(a, b) {
    if (a.nombre < b.nombre) {
      return -1;
    }
    else if (a.apellido > b.apellido) {
      return 1;
    }
    else if (a.nombre === b.nombre){
        return 0;
    }
  }
  

alert("Bienvenidx al gestor de gastos!")

let personas = Array();
do{
    personas.push(Persona.prototype.requestViaPrompt());
}while(yes_no_prompt("Desea continuar agregando personas?") == 'y');
    
    personas.sort(compare);
personas.forEach(function(element){
    element.showData();
});
