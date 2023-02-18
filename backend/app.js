const { response, json } = require('express')
var express = require('express')
global.app = express()
global.datos = []
var bodyparse = require ('body-parser')
app.use(bodyparse.json())
app.use(bodyparse.urlencoded({extended:true}))
const mongoose = require('mongoose')


const { body, validationResult } = require('express-validator');




global.config = require(__dirname + '/config.js').config


app.all('*',function(request,response,next){
    var whitelist = request.headers.origin;
   
    response.header('Access-Control-Allow-Origin', whitelist)
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');  
    response.header('Access-Control-Allow-Headers', " authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    response.header("Access-Control-Allow-Credentials", "true");

    next()
})

var cors = require('cors') // crosr origin resourse sharin
const { config } = require('./config')

app.use(cors({
    origin:function(origin,callback){
        console.log(origin)
        if(!origin) return callback(null,true)
       
       

        if(config.listablanca.indexOf(origin) === -1){

            return callback('Error de cors',false)
        }

        return callback(null,true)
    }

    
}))


mongoose.connect('mongodb://127.0.0.1:27017/' + config.bd, {useNewUrlParser:true,useUnifiedTopology:true},(error,response) => {
    if(error){
        console.log(error)
    }
    else{
    console.log('conexion a mongo correcta')
    }
})
//put (modificar), get(traer listar informacion), post(enviar informacion datos), delete (Borrar)
// se podria hacer todo con get y post

//configurar aplicacion tipoget
//api tipo get
/* app.get("/saluda",function(request,response){
    response.json({state:true,mensaje:"holamundo"})
}) 

//api de tipo get (se hacen llamados a traves de la URL)
//num1 y num 2 sn params

app.get("/matematicas/suma/:num1/:num2",function(request,response){
    var total = parseInt(request.params.num1) + parseInt( request.params.num2)

    response.json({state:true,total:total})
})

app.get("/matematicas/multiplica/:num1/:num2",function(request,response){
    var total = parseInt(request.params.num1) * parseInt( request.params.num2)

    response.json({state:true,total:total})
})

// post

app.post("/matematicas/resta",function(request,response){
    var num1 = parseInt(request.body.num1)
    var num2 = parseInt(request.body.num2)
    var total = num1 - num2
    response.json({state:true, total:total})
})



app.listen(3000, function(){
    console.log('servidor funcionando por el puerto:' + 3000)
}) */
app.listen(config.puerto, function(){
    console.log('servidor funcionando por el puerto:' + config.puerto)
})

require(__dirname + '/routes.js')