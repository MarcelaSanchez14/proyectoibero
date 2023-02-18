var personas = [];

//limpiar
var limpiar = function(){

    document.getElementById("nombre").value = ""
    document.getElementById("vida").value = ""

}

// read
var mostrar = function(){
    var misdatos = document.getElementById("misdatos")
    misdatos.innerHTML = ""
    for (let a = 0; a < personas.length; a++) {
        
        misdatos.innerHTML = misdatos.innerHTML + 

       " <div class='item'>"+
   " <div class='nombre' onclick=" + "cargarnombre('"+ personas[a].nombre +"') " + "> "+ personas[a].nombre + "</div>" +
   " <div class='vida'>"+ personas[a].vida + "</div>" +
    "    </div>"
    }
    console.log(personas)
}
var miposicion = ""

//read
var cargarnombre = function(name){
    console.log(name)

    var posicion = personas.findIndex((item) => item.nombre == name)
    console.log(posicion)
    miposicion = posicion
    console.log(personas[posicion].nombre)
    console.log(personas[posicion].vida)

    document.getElementById("nombre").value = personas[posicion].nombre
    document.getElementById("vida").value = personas[posicion].vida
}


//update
var modificar = function(){
    personas[miposicion].nombre = document.getElementById('nombre').value
    personas[miposicion].vida = document.getElementById('vida').value
    mostrar()
    limpiar()
}

//delete
var eliminar = function(){
    personas.splice(miposicion,1)
    mostrar()
}

// create
var guardar = function () {
    var nombre = document.getElementById("nombre").value 
    var vida = document.getElementById("vida").value 

   
    personas.push({

        nombre :nombre,
        vida   :vida
    })

    limpiar()
    mostrar()
}