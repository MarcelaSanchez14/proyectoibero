const { name } = require("ejs")


var modelUsuarios = require(__dirname + '/../modelos/modelUsuarios.js').usuarios

var usuariosController = {

}
//CRUD

usuariosController.Guardar = function(request,response){
    var post = {
        name:request.body.name,
        apellido:request.body.apellido,
        edad:request.body.edad,
        cedula:request.body.cedula,
        direccion:request.body.direccion,
        telefono:request.body.telefono,
        ecivil:request.body.ecivil
    }

   


    if(post.name == ""|| post.name == null || post.name == undefined ){
        response.json({state:false,mensaje:"El campo name es obligatorio"})
        return false
    }
    if(post.name == /^\s+$/.test(name)){
        response.json({state:false,mensaje:"El campo name no permite numeros"})
        return false
    }

    


    if(post.apellido == ""|| post.apellido == null || post.apellido == undefined){
        response.json({state:false,mensaje:"El campo apellido es obligatorio"})
        return false
    }

    if(post.cedula == ""|| post.cedula == null || post.cedula == undefined){
        response.json({state:false,mensaje:"El campo cedula es obligatorio"})
        return false
    }

    if(post.direccion == ""|| post.direccion == null || post.direccion == undefined){
        response.json({state:false,mensaje:"El campo direccion es obligatorio"})
        return false
    }

    if(post.telefono == ""|| post.telefono == null || post.telefono == undefined ){
        response.json({state:false,mensaje:"El campo telefono es obligatorio"})
        return false
    }

    if( post.telefono !== 'number'){
        response.json({state:false,mensaje:"El campo telefono solo recibe numeros"})
        return false
    }

    if(post.ecivil == ""|| post.ecivil == null || post.ecivil == undefined){
        response.json({state:false,mensaje:"El campo estado civil es obligatorio"})
        return false
    }

   if(post.name.length < 4){
        response.json({state:false,mensaje:"El campo name debe ser superior a 4 carcateres"})
        return false
    }

    if(post.name.length  > 20){
        response.json({state:false,mensaje:"El campo name debe ser inferior a 20 carcateres"})
        return false
    } 
   

    if(post.edad.length  > 3){
        response.json({state:false,mensaje:"El campo edad debe ser inferior a 2 carcateres"})
        return false
    }

    if(post.edad == ""|| post.edad == null || post.edad == undefined ){
        response.json({state:false,mensaje:"El campo edad es obligatorio"})
        return false
    }

    if( post.edad <= 0 || post.edad > 100){
        response.json({state:false,mensaje:"El campo edad no puede ser menor que 0 ni mayor que 100"})
        return false
    }
    if( post.edad !== 'number'){
        response.json({state:false,mensaje:"El campo edad solo recibe numeros"})
        return false
    }

   

    modelUsuarios.Guardar(post,function(respuesta){
 
        response.json(respuesta)
    })

    
}

usuariosController.listarusuarios = function(request,response){
   modelUsuarios.listarusuarios(null,function(resp){
    response.json(resp)
   })

}

usuariosController.ActualizarPorCedula = function(request,response){
    var post = {
        Id:request.body.Id,
        cedula:request.body.cedula,
        edad:request.body.edad,
        name:request.body.name,
        apellido:request.body.apellido,
        telefono:request.body.telefono,
        ecivil:request.body.ecivil,
        direccion:request.body.direccion
    }

   if(post.Id == ""|| post.Id == null || post.Id == undefined){
        response.json({state:false,mensaje:"El campo Id es obligatorio"})
        return false
   }

    if(post.name == ""|| post.name == null || post.name == undefined){
        response.json({state:false,mensaje:"El campo name es obligatorio"})
        return false
    }

    if(post.apellido == ""|| post.apellido == null || post.apellido == undefined){
        response.json({state:false,mensaje:"El campo apellido es obligatorio"})
        return false
    }

    if(post.cedula == ""|| post.cedula == null || post.cedula == undefined){
        response.json({state:false,mensaje:"El campo cedula es obligatorio"})
        return false
    }

    if(post.direccion == ""|| post.direccion == null || post.direccion == undefined){
        response.json({state:false,mensaje:"El campo direccion es obligatorio"})
        return false
    }

    if(post.telefono == ""|| post.telefono == null || post.telefono == undefined){
        response.json({state:false,mensaje:"El campo telefono es obligatorio"})
        return false
    }

    if( post.telefono !== 'number'){
        response.json({state:false,mensaje:"El campo telefono solo recibe numeros"})
        return false
    }

    if(post.ecivil == ""|| post.ecivil == null || post.ecivil == undefined){
        response.json({state:false,mensaje:"El campo estado civil es obligatorio"})
        return false
    }
    if(post.edad.length  > 3){
        response.json({state:false,mensaje:"El campo edad debe ser inferior a 2 carcateres"})
        return false
    }

    if(post.edad == ""|| post.edad == null || post.edad == undefined){
        response.json({state:false,mensaje:"El campo edad es obligatorio"})
        return false
    }
    if( post.edad !== 'number'){
        response.json({state:false,mensaje:"El campo edad solo recibe numeros"})
        return false
    }
   
    modelUsuarios.ActualizarPorCedula(post,function(respuesta){

        
        response.json(respuesta)
    })
    
    

}

usuariosController.BorrarPorCedula = function(request,response){
    var post = {
        cedula:request.body.cedula,

    }

    if(post.cedula == "" || post.cedula == undefined || post.cedula == null){
        response.json({state:false,mensaje:"El campo cedula es obligatorio"})
        return false
    }

   

    modelUsuarios.BorrarPorCedula(post,function(respuesta){

        response.json(respuesta)
    })
    


}

module.exports.usuario = usuariosController