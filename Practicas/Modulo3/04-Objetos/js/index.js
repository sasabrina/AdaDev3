/*
Objetos con [] arrays con {}
(todos llevan coma menos el último)

var humano= {
	cantOjos: 2,
	nombre: “sabrina”,
	respiran: function( ){
		console.log(“inspira y respira”);
		}
	alimentacion: [“vegetariana”,”carnívora”],
	extraterrestre: false
	saludar: function ( ){
		
}

humano.nombre (llamamos a la funcion y la propiedad)

humano.canOjos= 1;
console.log(humano+”es ciclope”);

Para hacer una lista de humanos, convierto el objeto en array
(las funciones que estan dentro de objetos se llaman metodos)

var humanos= [ {
	nombre: “sabrina”,
	saludar: function ( ){
		console.log( )
		}
	}, (coma del array)
	{nombre: “agustina”
	saludar: function( ){
		console.log(“hola soy"+this.nombre");
		}
	}
]

Humanos[0].saludar ( )
*/

//EJERCICIO
//mostrar que los que tienen 2 patas y comida vegeteriano suben al arca
//los que no tienen 2 patas y no son vegetarianos mueren en el bar

var animales= [{
	nombre:"perro",
	cantPatas:2,
	comida:"carnivoro",
	saludar:function( ){
		console.log("hola soy"+this.nombre)
		},
	vuela:false
	},

	{nombre:"pajaro",
	cantPatas:2,
	comida:"herbivoro",
	saludar:function( ){
		console.log("hola soy"+this.nombre);
		},
	vuela:true
	},

	{nombre:"elefante",
	cantPatas:4,
	comida:"herbivoro",
	saludar:function( ){
		console.log("hola soy"+this.nombre);
		},
	vuela:false
	},

	{nombre:"oso",
	cantPatas:4,
	comida:"carnivoro",
	saludar:function( ){
		console.log("hola soy"+this.nombre);
		},
	vuela:false
	},

	{nombre:"pinguino",
	cantPatas:2,
	comida:"carnivoro",
	saludar:function( ){
		console.log("hola soy"+this.nombre);
		},
	vuela:false
	}
]

for (i=0; i<animales.length; i++) {
	if(animales[i].cantPatas>=2 && animales[i].comida=="herbivoro"){
		console.log(animales[i].nombre+" sube al arca");
	}else{
		console.log(animales[i].nombre+" muere en el mar");
	}
	
}
//bueno, el pipngüino no sube al arca pero sabe nadar, genia