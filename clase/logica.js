//estructura de control desicion 
// if


var lloviendo = true
if(lloviendo = true){
  console.log("Toma el impermeable")
}
else{
  console.log("salga")  
}

/// ejemplo 2

var operacion = "suma"

var num1 = 3;
var num2 = 5;


/* if(operacion == "suma"){
    console.log(num1 + num2)
}

if(operacion == "resta"){
    console.log(num1 - num2)
}

if(operacion == "multiplicacion"){
    console.log(num1 * num2)
}

if(operacion == "division"){
    console.log(num1 / num2)
} */




// switch (operacion) {
//     case "suma":
//         console.log(num1 + num2)
//         break;
//     case "resta":
//         console.log(num1 - num2)
//         break;

//     case "multiplicacion":
//         console.log(num1 * num2)
//         break;

//     case "Division":
//         console.log(num1 / num2)
//         break;

//     default:
//         console.log("ninguno")
//         break;
// }

// estructura de repeticion

//Ciclo for

/* for (let a = 0; a <= 20; a++) {
  console.log(("7x" + a + "=") + 7*a)
  
} */

// ciclo for  utiliza condiciones cuando inicia, cuando frena
/* 
for (let a = 3; a <= 200; a++) {
  if (a == 5) {
    console.log("entro en 5")
  } else {
    console.log("x")
  }
} */

// Ciclo While - Mientras
// Si la cndicion se cumple se ejecuta, se debe colocar un freno o se lo contrario el navegador se queda 
// bandera o flag para poder que se termine el ciclo 

/*  var a = 1
while (a <= 10) {

  console.log("hola" + a)

  a = a + 2 //freno sin esto sebloquea el equipo

}
 */
///funciones

// Cada vez que se de Click mostrara texto mas el numero de veces que lo ha realizado
// var x =0
// var mostrar = function () {

//   x = x +1
//   console.log ("Hola mundo" + x )
// }

// var x =0
// var mostrar = function () {
//  for (let a = 1; a < 10; a++) {
//   console.log("5x" + a + "=" + (a*5))
//   //"5x" texto que sale 
//   //tabla del 5
//  }
// }

var x =0
var mostrar = function () {
 for (let a = 1; a < 10; a++) {
  var numero = document.getElementById ("valor").value
  console.log( numero + "x" + a + "=" + (a*parseInt( numero)) )
 
 }
}

var desplazamiento = 0
var mover = function () {
  var elemento = document.getElementById("item")
  
    setinterval(()=> {
    desplazamiento++
    elemento.style.left = desplazamiento + "px"
  },50)
  } 
  


