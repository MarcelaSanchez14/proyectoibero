//objeto
var persona = {
    nombre: "marcela",
    apellidos:"sanchez",
    edad:"27",
    identificacion:"123456789"
  }
persona.habilidad = "Programar" // agrega elemento a un objeto determinado

  console.log(persona) // lee todos los elementos
  console.log(persona.nombre) // lee la variabl principal y solo el elemento indicado
  console.log(persona.edad)


  /// arrays- vectores - matrices -listas
// puede almacenar variales u bjetos
 
var datos = [ "marcela", "juan", "pedro"] //dentro de un elemento almaceno varios registros
var edades =[35,40,89]
var multiple =[35,"marcela"]

//los arrays siempre inician desde numero 0
console.log(datos[0])
console.log(datos)

//cuando mide un array

console.log(datos.length)


// como almacenar de forma no manual 
// con push agregramos eementos al array
var db = []
db.push("goku")
db.push("gohan")
db.push("roshi")
db.push("krilin")
db.push("gohan")
console.log(db)

// remover elementos de un array
// el pop elimina el ultimo elemento
//db.pop()
//console.log(db)

//invierte el orden de los db, por ejemplo cuando se mira los movimientos del banco primero se ve el tulimo transaccion 
//var resultado = db.reverse()  
//console.log(resultado)


// join convierte de array a sting separado por coma o elemento indicado 
//console.log(db.join("+"))


// .length define la cantidad de eementos que estan
console.log(db.length)

// includes busca si existe o no un elemento dentro de un array (true o false)
console.log(db.includes("roshi"))

// indexOf busca el elemento dentro de los elementos y develve la ubicación, si registra negativo es porque no existe
console.log(db.indexOf("gohan"))

// identifica si es un array 
console.log(Array.isArray(db))

// llena todos los elementos del array con lo indicado
// console.log(db.fill("milk"))


//filtra coincidencias, solo muestra lo que aplique
//var resultado = db.filter((item)=> item == "gohan")
//console.log(resultado)


// concat se utiliza para unir varios array, adicional se podriautilizar para unir dos bases de datos
var malos = ["frezer", "trunks"]
var resultado = malos.concat(db)
console.log(resultado)


// unshift, incluye elementos al principio 
//db.unshift("milk")
//console.log(db)


// (0,1) rango desde donde empieza y cuantos elementos hacia adelante elimina
//db.splice(0,2)
//console.log(db)


// cambia un elemento, defines la ubicación y luego el como debe quedar 
//db[4] = "KRILIN"

// hasta aqui elementos de una sola dimension

// forma manual de agregar elementos a un array
var datospersonas = [
  // objetos se estructuran con clave y valor Nombre clave marcela es el valor
  {nombre:"marcela", vida:100},
  {nombre:"juan", vida:50},
  {nombre:"pedro", vida:50}
];
// incluye otro elemento
datospersonas.push({Nombre:"milton", vida:99})
datospersonas.push({Nombre:"diana", vida:10})
console.log(datospersonas)


// elimina ultimo registro
//datospersonas.pop()
//console.log(datospersonas)

var posicion = datospersonas.findIndex((item) => item.vida == 10)
console.log(posicion)

// busca un elemento y con la posicion le aumenta vida, se puede hacer con varios temas 
datospersonas[posicion]. vida = datospersonas[posicion]. vida + 2;
console.log(datospersonas)

// busca y elimina un elemento
datospersonas.splice(posicion,1)
console.log(datospersonas)


// busca y muestra una informacion especifica
var personaje = datospersonas.find((item) => item.nombre == "marcela")
console.log(personaje)