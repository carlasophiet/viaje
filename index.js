var express=require('express');
var app=express();
var path=require('path');
//readline in order to generate keyboard events to terminal 
const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

var intro = '\n\t\tEsto es una aventura: para avanzar el relato\n\t\tpresione el número de la opción que elija. \n\t\tAhora, presione la tecla "a".\n'
var db=[
	//0
	{"propuesta":"Decidimos ponerle gas al auto. No es tanto una decisión, más bien una necesidad.",
	"opciones":[
		{"op":"(1)Mi hermana baja, con miedo que la reconozcan. Yo me quedo sentada.","respuesta":1},
		{"op":"(2)Ambas bajamos. Decido entrar al quiosco, estirar las piernas.","respuesta":2},
		{"op":"(3)Mi hermana abre el capote sola, 'voy a hacer pis' le digo.","respuesta":3}
	]},
	//1
	{"propuesta":"Hace calor y desearía viento fresco. Menos humedad.",
	"opciones":[
		{"op":"(1)Cuando era chica, bajábamos siempre, por si se prendía fuego todo, por si explotaba, por si nos moríamos.","respuesta":4},
		{"op":"(2)Un hombre se acerca. La luz blanca le marca los angulos de la cara muy violentamente.","respuesta":8},
	]},
	//2	
	{"propuesta":"La luz cenital blanca le da a todo un aura de hospital. Pero el olor a queso derretido y hamburguesas y panificados te devuelve a la ruta.",
	"opciones":[
		{"op":"(1)Camino entre las góndolas, sin poder comprar nada. Todos los paquetes destellan, papel metalizado.","respuesta":6},
		{"op":"(2)Me meto unas papitas y unos palitos en el bolsillo de la campera.","respuesta":8},
		{"op":"(3)Todas las personas que atienden tienen gorras con viceras verdes. Me resulta rídiculo. Me acerco al mostrador.","respuesta":6}
	]},
	//3
	{"propuesta":"Me alejo del auto. Intento divisar donde suelen encontrarse los baños.",
	"opciones":[
		{"op":"(1)Entre la oscuridad encuentro una puerta, pero está cerrada.","respuesta":7},
		{"op":"(2)Al final del juego.","respuesta":8},
	]},		
	//4
	{"propuesta":"La respuesta 1 te trae acá.",
	"opciones":[
		{"op":"(1)Un poquito más.","respuesta":7},
		{"op":"(2)Al final del juego.","respuesta":6},
	]},	
	//5
	{"propuesta":"La respuesta 2 te trae acá.",
	"opciones":[
		{"op":"(1)Un poquito más.","respuesta":7},
		{"op":"(2)Al final del juego.","respuesta":8},
	]},		
	//6
	{"propuesta":"La respuesta 3 te trae acá.",
	"opciones":[
		{"op":"(1)Un poquito más.","respuesta":7},
		{"op":"(2)Al final del juego.","respuesta":8},
	]},		
	//7
	{"propuesta":"Elejiste un poquito más.",
	"opciones":[
		{"op":"(1)Es indistinto.","respuesta":8},
		{"op":"(2)Al final.","respuesta":8},
	]},	
	//8
	{"propuesta":"Manejamos.",
	"opciones":[
		{"op":"Fin del juego. Para volver a empezar, presione 1","respuesta":0},
		
	]},	
];
var currentLocation=0;

app.listen(3000, function(){//server listening on 3000
	console.log(intro);
	process.stdin.on('keypress', (str, key) => {
  		if (key.ctrl && key.name === 'c') {
    		process.exit(); // eslint-disable-line no-process-exit
  		} else if (key.name === 'a') {
    		console.log(db[currentLocation].propuesta);
    		for(i=0; i < db[currentLocation]["opciones"].length;i++){
    			console.log(db[currentLocation]["opciones"][i].op);
    		};
    		
    	}
    });//finish first proposal

});
