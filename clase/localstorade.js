var miemail = "marcelasanchez@gmail.com"


var almacenar = function(){
    localStorage.setItem("email", miemail)
    localStorage.setItem("pass", 123456)
}

var cambiar = function(){
    localStorage.setItem("email", "otro valor")
}


var leerlocalstorade = function (){
    var dato = document.getElementById('datos')
    dato.innerHTML =localStorage.getItem("email")
}

var leeralentrar = function (){
   document.getElementById("elemail").value = localStorage.getItem("email")

}

var eliminarlocalstorage =function(){
    localStorage.removeItem("email")
}

var numero = localStorage.getItem("contador")
console.log(numero) 
if(numero == null){
    localStorage.setItem("contador", 0)
}
//console.log(localStorage.getItem("contador"))
numero = parseInt(numero) + 1
localStorage.setItem("contador",numero)


leeralentrar()