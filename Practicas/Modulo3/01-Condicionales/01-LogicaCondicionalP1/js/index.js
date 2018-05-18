//Ej 1: Dada una variable x, determinar si es par o impar.

var x= 13;

if (x % 2 == 0){
	console.log("Ej01: "+x+" es par");
}else{
	console.log("Ej01: "+x+" es impar");
}

//Ej 2: Dada una variable y que puede contener un número 
//de 1 a 7, determinar a que día de la semana corresponde. 
//Incluir la opción si la variable toma un valor no válido 
//(por ejemplo 0 u 8).

var y= 2;

if (y==1){
	console.log("Ej02: Es lunes");
}else if (y==2){
	console.log("Ej02: Es martes");
}else if (y==3){
	console.log("Ej02: Es miércoles");
}else if (y==4){
	console.log("Ej02: Es jueves");
}else if (y==5){
	console.log("Ej02: Es viernes");
}else if (y==6){
	console.log("Ej02: Es sábado");
}else if (y==7){
	console.log("Ej02: Es domingo");
}else if (y==0 && y>8){
	console.log("Ej02: No valido");
}

switch(y){
	case 1:
		console.log("Ej02: Es lunes");
		break;
	case 2:
		console.log("Ej02: Es martes");
		break;
	case 3:
		console.log("Ej02: Es miércoles");
		break;
	case 4:
		console.log("Ej02: Es jueves");
		break;
	case 5:
		console.log("Ej02: Es viernes");
		break;
	case 6:
		console.log("Ej02: Es sábado");
		break;
	case 7:
		console.log("Ej02: Es domingo");
		break;
	default:
		console.log("Ej02: No valido");
}

//Ej 3: Dada una variable donde se ingresa el nombre del mes, 
//devolver la cantidad de días correspondiente.

var mes= "abril";

if (mes=="febrero"){
	console.log("Ej03: Tiene 28 días");
}else if (mes=="abril" || mes=="junio" || mes=="septiembre" || mes=="noviembre"){
	console.log("Ej03: Tiene 30 días");
}else{
	console.log("Ej03: Tiene 31 días");
}

//Ej 4: Dados tres números determinar si es positivo o negativo.

var num= -3;
var num2= 0;
var num3= 5;

if (num>=0){
	console.log("Ej04: num es positivo");
}else{
	console.log("Ej04: num es negativo");
}

if (num2>=0){
	console.log("Ej04: num2 es positivo");
}else{
	console.log("Ej04: num2 es negativo");
}

if (num3>=0){
	console.log("Ej04: num3 es positivo");
}else{
	console.log("Ej04: num3 es negativo");
}

//Ej 5: Dada una variable que puede ser una letra, 
//determinar si es una vocal.

var letra= "b";

if (letra=="a" || letra=="e" || letra=="i" || letra=="o" || letra=="u"){
	console.log("Ej05: "+letra+" es vocal");
}else{
	console.log("Ej05: "+letra+" es no es vocal");
}

//Ej 6: Dados tres números, x y z, si x es mayor que y calcular 
//la resta entre x y z, y determinar si eso es mayor que y, 
//de lo contrario sumar x y z (x+z) y multiplicarlo por y.

var x= 5;
var y= 4;
var z= 4;

if (x>y){
	resultado= (x-z);
	console.log("Ej06: El resultado es: "+resultado);
	if (resultado>y){
		console.log("Ej06: El resultado es mayor que y"+resultado);
	}else{
		resultado= (x+z)*y;
		console.log("Ej06: El resultado es menor que y: "+resultado);
	}
}

//Ej 7: Que calcule el sueldo que le corresponde al trabajador 
//de una empresa que cobra 40.000 euros anuales, se deben 
//realizar los cálculos en función de los siguientes criterios:
//a. Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
//b. Si lleva menos de 10 años pero más que 5 se le aplica un aumento del 7%.
//c. Si lleva menos de 5 años pero más que 3 se le aplica un aumento del 5%.
//d. Si lleva menos de 3 años se le aplica un aumento del 3%

var sueldo= 40000;
var antiguedad= 11;

//a
if (antiguedad>10){
	aumento= sueldo*0.1;
	sueldo= sueldo+aumento;
	console.log("Ej07: Más de 10 años, el sueldo es: "+sueldo)
}
//b
if (antiguedad<10 && antiguedad>5){
	aumento= sueldo*0.07;
	sueldo= sueldo+aumento;
	console.log("Ej07: Menos de 10 y más de 5 años, el sueldo es: "+sueldo)
}
//c
if (antiguedad<5 && antiguedad>3){
	aumento= sueldo*0.05;
	sueldo= sueldo+aumento;
	console.log("Ej07: Más de 3 años y menos de 5años, el sueldo es: "+sueldo);
}
//d
if (antiguedad<3){
	aumento= sueldo*0.03;
	sueldo= sueldo+aumento;
	console.log("Ej07: Menos de 3 años, el sueldo es: "+sueldo);
}