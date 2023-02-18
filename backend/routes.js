
var usurariosController = require (__dirname + '/controladores/usuarioscontroller.js').usuario

//create

app.post("/usuarios/Guardar",function(request,response){
   usurariosController.Guardar(request,response)
})

//read

app.post("/usuarios/listarusuarios",function(request,response){
   usurariosController.listarusuarios(request,response)
})

//update

app.post("/usuarios/ActualizarPorCedula",function(request,response){
    usurariosController.ActualizarPorCedula(request,response)

})

//delete 

app.post("/usuarios/BorrarPorCedula",function(request,response){
    usurariosController.BorrarPorCedula(request,response)

})
