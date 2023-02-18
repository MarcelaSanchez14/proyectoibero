var basedatos = []

var Cargardatos = function() {
    var misdatos = localStorage.getItem("base")
    if(misdatos == null){
        basedatos = []
    }
    else{
        basedatos = JSON.parse(misdatos)
    }
}


var IniciarSesion = function(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var posicion = basedatos.findIndex((item) => item.mail == email && item.pass == password)
    console.log(posicion)

    var msj =document.getElementById('mensaje')
    if(posicion == -1){
        msj.innerHTML =
        " <div class='alert alert-danger' role='alert' >Credenciales incorrectas, Vuelve a intentarlo  </div>"
    }
    else{
        msj.innerHTML =
        " <div class='alert alert-success' role='alert' >Bienvenido " + basedatos [posicion].name + "</div>"

    }
   
}

Cargardatos()