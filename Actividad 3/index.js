
  var suma = function (){
  
 
    var numero1 = document.getElementById("numero1").value
    var numero2 = document.getElementById("numero2").value

    document.getElementById("resultado1").innerHTML = ( numero1 + "+" + numero2  + "=" + parseInt(numero1 + numero2))
       
  }
  var resta = function (){
    
 
    var numero1 = document.getElementById("numero1").value
    var numero2 = document.getElementById("numero2").value

    document.getElementById("resultado1").innerHTML = ( numero1 + "-" + numero2  + "=" + parseInt(numero1 - numero2))
        
  } 
  var multiplicacion = function (){
    
 
    var numero1 = document.getElementById("numero1").value
    var numero2 = document.getElementById("numero2").value

    document.getElementById("resultado1").innerHTML = ( numero1 + "*" + numero2  + "=" + parseInt(numero1 * numero2))
        
  } 

  var division = function (){
    
 
    var numero1 = document.getElementById("numero1").value
    var numero2 = document.getElementById("numero2").value

    document.getElementById("resultado1").innerHTML = ( numero1 + "/" + numero2  + "=" + parseInt(numero1 / numero2))
        
  } 
