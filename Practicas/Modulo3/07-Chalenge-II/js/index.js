/*** variables globales ***/
var paisesLista= ["Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Paraguay", "Perú", "Uruguay"];
var ciudades= [
			{"nombre": "Bahía Blanca", "provincia": 1},
			{"nombre": "Villa Crespo", "provincia": 0},
			{"nombre": "Chivilvoy", "provincia": 1}
];
var tipoDni= ["DNI", "LI", "LC", "LE", "CI"];
var titulo= "Formulario de Inscripción";
var btnEnviar= document.getElementById("enviar");
var btnLimpiar=document.getElementById("limpiar");
var comboProv= document.getElementById("pcias");
console.log(ciudades);

/*** Funciones ***/

function cargarTitulo(titulo){
	var formulario= document.createElement("h1");
	formulario.textContent= titulo;

	var containerDiv= document.getElementById("header");
	containerDiv.appendChild(formulario);
}

function validarMail(mail){
	if(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/.test(mail)){
		return true;
	}else{
		return false;
	}
}

function validarFormulario(){
	var obligatorios= document.getElementsByClassName("obligatorio");
	var obLabel= document.getElementsByClassName("obLabel");
	console.log(obligatorios);

	for(var i=0; i<obligatorios.length; i++){
		if (obligatorios[i].value.length == 0){
			obLabel[i].innerHTML= "Campo Obligatorio";  
		}
	}

	var mail= document.getElementById("mail");
	if(mail.value.length>0){
		if(!validarMail(mail)){
			var emailError= document.getElementById("emailError");
			emailError.innerHTML= "Formato de Email no valido";
			console.log("formato invalido");
		}
	}
}

function cargarProvincia(){

	var provincias= ["CABA", "Bs As", "Córdoba", "Mendoza"];
	console.log(provincias);

	for(i=0; i<provincias.length; i++){
		var op= document.createElement("option");
		console.log(op);
		op.value= i;
		op.innerHTML= provincias[i];
		comboProv.appendChild(op);
	}
}

function cargarCiudades(){
	var provId= comboProv.value;
	var comboCity= document.getElementById("city");

	for(i=0; i<ciudades.length; i++){
		if(ciudades[i].provincia == provId){
			var op= document.createElement("option");
			console.log(ciudades[i].provincia);
			op.value= i;
			op.innerHTML= ciudades[i].nombre;
			comboCity.appendChild(op);
		}
	}
}

function cargarPaises(){
	var pais= document.getElementById("paises");

	for(i=0; i<paisesLista.length; i++){
		var op= document.createElement("option");
		paises.appendChild(op);
		op.textContent= paisesLista[i];
	}
}

function cargarDoc(){
	var tipoDoc= document.getElementById("tipoDoc");

	for(i=0; i<tipoDni.length; i++){
		var op= document.createElement("option");
		tipoDoc.appendChild(op);
		op.textContent= tipoDni[i];
	}
}

function validarDoc(nroDoc){
	if (!nroDoc.value){
		return true;
		console.log("Complete el campo")
	}else{
		return /^[1-9][0-9]{4,7}$/.test(docNumber.value);
		console.log("nro revisado con test");
	}
}

function limpiar(){
	var inputs= document.getElementsByTagName("input");
	console.log(inputs);
	inputsArray= Array.from(inputs);
	console.log(inputsArray)
	inputsArray.forEach(function(e){ //la declaro en el mismo momento que la llamo
		//console.log(e);
		if(e.type == "checkbox"){
			e.checked= false;
		}else{
			e.value= "";
		}
	});

	var selects= document.getElementsByTagName("select");
	Array.from(selects).forEach(function(e){
		e.value= "-1";
	})
}


/*** Llamadas a funciones ***/
cargarTitulo(titulo);
cargarProvincia();
cargarPaises();
cargarDoc();
btnEnviar.addEventListener("click", validarFormulario);
btnLimpiar.addEventListener("click", limpiar);
comboProv.addEventListener("change", cargarCiudades)

/*************************/

//fecha. es cadena de caracteres y tenemos que modificarlo para
//poder hacer la función que calcule la ,ayría de edad

parseInt(document.getElementById("nacimiento").value); //1998

//reseteo de formulario
//function con todos los imptus y texto con value vaxía ->" "<-





/** var t= document.createTextNode('Formato no Valido');
label.appendChild(t);

//HTML
<label>
	Formato no valido
</label>
**/