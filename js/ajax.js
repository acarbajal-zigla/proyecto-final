// Usando Name de 'https://random-data-api.com/' y Math.random()
// para obtener los datos

function setDatos(){
    for(let i=0; i<20; i++){
        $.get("https://random-data-api.com/api/name/random_name", function(response, status){
            if(status !== 'success'){
                throw new Error("Error al solicitar informacion");
            }
            const persona = new Persona(parseInt(Math.random()*100000000), response.first_name, response.last_name, Math.random()*10000, Math.random()*1000);
            create(persona);
        });
    }
}