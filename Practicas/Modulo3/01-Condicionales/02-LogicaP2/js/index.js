//Ej 1: Un sistema de fidelización de usuarios implementa la siguiente regla para 
//la adquisición de productos del catálogo. Se pide determinar la lógica de canje.
//- El producto X que se desea canjear tiene un valor determinado en cantidad de puntos.
//- Si el cliente que lo quiere canjear tiene la cantidad de puntos requerida realiza 
//directamente el canje.
//- Si el cliente tiene el 50% de los puntos requeridos, podrá completar el canje con 
//dinero, en ese caso cada peso equivaldrá a 3 puntos.
//- Si el cliente tiene el 50% de los puntos requeridos, pero a su vez tiene categoría 
//premium, la relación pesos puntos será 1 a 5.

var x= 25;
var puntos=50;
var premium= false;

//versión 1
if (x>=puntos) {
	console.log("Ej01: canjea directamente");
}
else if (x>= puntos/2 && premium==false) {
	pesos= (puntos*3);
	console.log("Ej01: pesos es igual a 3");
}
else if (x>= puntos/2 && premium==true) {
	pesos=(puntos*5);
	console.log("Ej01: pesos es igual a 5");
}

//version 2
if(puntos>=x) {
	console.log("Ej01: canjea directamente");
}
else if (puntos*2>=x) {
	var diferencia= x - puntos;
	if premium {
		var monto = diferencia/5;
		console.log("Ej01: total a pagar: $"+monto);
	}else{
		var monto= diferencia/3;
		console.log("Ej01: total a pagar: $"+monto);
	}
}

//Ej 2: Ana desea inscribir a su hijo Tomás a la colonia de vacaciones, 
//para tomar la decisión tiene en cuenta distintas variables.
//A) Si la colonia queda a más de 10 km, tendrá que contratar un transporte, 
//por lo que para elegir esta opción el costo mensual deberá ser menor a $1500.
//B) Si la colonia queda a menos de 10 km, su presupuesto total se incrementa en un 20%, 
//con lo cual evaluará incluir almuerzo en la colonia si este no excede el 15% del 
//valor de la cuota.
//C) Finalmente, si la colonia está más lejos de 10km, y su costo es mayor a $1500, 
//pero es doble turno y le brinda almuerzo, está dispuesta a pagar hasta $2800.

var distancia=
var costoMensual=
var presupuesto
var almuerzo=
var dobleTurno=

if (distancia>10 && costoMensual<1500){
	console.log("Ana inscribe a su hijo y contrata el transporte");
}else if (distancia<10){

}

//Ej 3:Dados distintas tarjetas de crédito, mostrar por consola la cantidad de cuotas 
//sin interés según el siguiente criterio.
//- Mastercard – hasta 6 cuotas s/interés
//- Visa – hasta 9 cuotas s/interés
//- Amex – hasta 3 cuotas sin interés
//- Todas las demás - 1 cuota sin interés

var tarjeta= "mastercard";

if (tarjeta=="Mastercard"){
	console.log("hatas 6 cuotas sin interés");
}else if (tarjeta=="Visa"){
	console.log("hatas 9 cuotas sin interés");
}else if (tarjeta=="Amex"){
	console.log("hatas 3 cuotas sin interés");
}else{
	console.log("1 cuota sin interés");
}

//otra opción

switch(tarjeta){
	case "Mastercard":
		console.log("hasta 6 cutas sin interés");
		break;
	case "Visa":
		console.log("hasta 9 cutas sin interés");
		break;
	case "Amex":
		console.log("hasta 3 cutas sin interés");
		break;
}