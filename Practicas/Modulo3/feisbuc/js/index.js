var arrayNombres= ["Faraona", "Parque Patrizia", "Me gustan los espunfis"]

function cargarInfoPersonal(arrayNombres){
	var nombre= document.createElement ('h1');
	nombre.textContent= arrayNombres[0];

	var nacionalidad= document.createElement('h2');
	nacionalidad.textContent= arrayNombres[1];

	var resumen= document.createElement("p");
	resumen.textContent= arrayNombres[2];

	var dpDiv= document.getElementById('infoPersonal');
	dpDiv.appendChild(nombre);
	dpDiv.appendChild(nacionalidad);
	dpDiv.appendChild(resumen);
}

cargarInfoPersonal(arrayNombres);

/***********************************/

var oveja= ["Lala", "imgs/oveja.jpg"];
var conejo= ["Pepito", "imgs/conejo.jpg"];
var perro= ["Flo", "imgs/perro.jpg"];
var gato= ["Grego", "imgs/gato.jpg"];
var amigos= [oveja,conejo,perro,gato];
var amigosDiv= document.getElementById("amigos");
console.log("Nombre del Conejo: "+amigos[1][0]);

var i,j;
for(i=0;i<amigos.length;i++){ //recorre la fila
	//console.log(amigos[i]);
	for(j=0;j<amigos[i].length;j++){ //recorre la columna
		console.log(amigos[i][j]+",")
	}
}

/**
* muestra en el HTML una lista de imágenes
* @params lista | array, padre | nodo HTML
* void
**/

function cargarListaImagenes(lista, padre){
	var i;
		for(i=0;i<lista.length;i++){
			var img= document.createElement("img");
			img.src= lista[i][1];
			console.log(img.src);
			padre.appendChild(img);
		}
}
cargarListaImagenes(amigos,amigosDiv);

/****************************************/

var muro= document.getElementById("muro");
var entradas= []; //acá se cargan las entradas


function cargarMuro(m){
	var ul= document.createElement("ul");
	ul.setAttribute("id","posts");

	if(entradas.length>0){
		m.innerHTML= "";

		for(var i=0; i<entradas.length; i++){ //voy a generar 3 li
			var li= document.createElement("li");
			var img= document.createElement("img");
			img.src= "imgs/conejo.jpg";
			img.classList.add("thumb"); //las clases las puedo remover(remove) o reemplazar(Replace)
			li.appendChild(img);
			var texto= document.createElement("p");
			texto.textContent= entradas[i];
			li.appendChild(texto);
			ul.appendChild(li);
		}
	}
	m.appendChild(ul);
}

/*******************************************/

/**
* Carga entradas desde el formulario
* @params no parametros
* void
**/
function publicar(){
	var lista= getElementById("posts");
	var entrada= document.getElementById("entrada");
	var texto= entrada.value;
	entradas.push(texto); //push me va cargando elementos

			var li= document.createElement("li");
			var img= document.createElement("img");
			img.src= "imgs/conejo.jpg";
			img.classList.add("thumb"); //las clases las puedo remover(remove) o reemplazar(Replace)
			li.appendChild(img);
			var t= document.createElement("p");
			t.textContent= entradas[entradas.length-1];
			li.appendChild(t);
			ul.appendChild(li);

	console.log(texto);
	//cargarMuro(muro);

}

var btnEnviar= document.getElementById("enviar");
btnEnviar.addEventListener("click",publicar);

cargarMuro(muro);