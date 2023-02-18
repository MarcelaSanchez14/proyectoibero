var basedatos = []

var GuardarUsuario = function (){
    var nombre = document.getElementById('nombre').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    basedatos.push({name:nombre,mail:email,pass:password})
    localStorage.setItem("base", JSON.stringify(basedatos))
}

var Cargardatos = function() {
    var misdatos = localStorage.getItem("base")
    if(misdatos == null){
        basedatos = []
    }
    else{
        basedatos = JSON.parse(misdatos)
    }
}

Cargardatos()