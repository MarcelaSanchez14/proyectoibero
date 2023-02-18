var modelUsuarios ={}
const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

var userSchema = new Schema({
    nombre:String,
    apellido:String,
    edad:Number,
    cedula:String,
    direccion:String,
    telefono:Number,
    ecivil:String

})

const MyModel = mongoose.model('usuarios',userSchema)




modelUsuarios.Guardar = function(post,callback){

    const instancia = new MyModel
    instancia.nombre = post.name
    instancia.apellido = post.apellido
    instancia.edad = post.edad
    instancia.cedula = post.cedula
    instancia.direccion = post.direccion
    instancia.telefono = post.telefono
    instancia.ecivil = post.ecivil

    instancia.save((error,Usercreate) => {
        if(error){
            console.log(error)
            return callback({state:false, mensaje:error})
        }
        else{
            console.log(Usercreate)
            return callback({state:true, mensaje:Usercreate})
        }
    })

    // datos.push(
    //     {
    //         nombre:post.name,
    //         apellido:post.apellido,
    //         edad:post.edad,
    //         cedula:post.cedula,
    //         direccion:post.direccion,
    //         telefono:post.telefono,
    //         ecivil:post.ecivil

    //     })

    //     return callback({state:true,mensaje:"usuario guardado"})

}

modelUsuarios.listarusuarios = function(post,callback){
   //return callback({state:true,datos:datos})
   MyModel.find({},{_id:1,nombre:1,apellido:1,edad:1,cedula:1,direccion:1,telefono:1,ecivil:1},(error,documentos) => {
    // 1 muestra el dato y con 0 no muestra el dato 
    if(error){
        return callback({state:false,mensaje:error})
    }
    else{
        return callback({state:true,mensaje:'lista  usuarios',data:documentos})
    }
   })

}

modelUsuarios.ActualizarPorCedula = function(post,callback){
   // datos[post.posicion].edad = post.edad
   // return callback({state:true,mensaje:"Se actualizo correctamente"})
   
   MyModel.find({cedula:post.cedula},{},(error,documentos) => {
    if(error){
        return callback({state:false,mensaje:error})
    }
    else{
        if(documentos.length > 0){
            MyModel.findByIdAndUpdate(documentos[0]._id,
                {
                    nombre:post.name,
                    apellido:post.apellido,
                    edad:post.edad,
                    cedula:post.cedula,
                    direccion:post.direccion,
                    telefono:post.telefono,
                    ecivil:post.ecivil
                },(error,usuariomodificado) => {
                    if(error){
                        console.log(error)
                        return callback ({state:false,mensaje:error})
                    }
                    else{
                        return callback({state:true,mensaje:'usuario modificado',data:usuariomodificado})
                    }
                })


        }
        else{
            return callback({state:false,mensaje:'la cedula no existe'})
        }
        
    }
   })
   
   
}

modelUsuarios.BorrarPorCedula = function(post,callback){
    // datos.splice(posicion,1)
    // return callback ({state:true,mensaje:"Se elimino correctamente "})
    MyModel.findByIdAndDelete(post.Id,(error,eliminado) => {
        if(error){
            return callback({state:false,mensaje:error})
        }
        else{
            return callback({state:true,mensaje:'Usuario Eliminado'})
        }
    })
}

module.exports.usuarios = modelUsuarios