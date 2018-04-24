//Todos los inputs son obligatorios

function validar(e){
    e.preventDefault();

    var nombre= $('#nombre').val();
    var apellido= $('#apellido').val();
    var mail= $('#mail').val();

    console.log(nombre);

//Versión 1
/*Si un campo vacío formulario invalido */
//"&" me exije que todas las condiciones sean verdaderas

   /* if(nombre.length != 0 && apellido.length != 0 && mail.length != 0){
        return true;
    }*/
//Versión 2
    if(nombre.length== 0 || apellido.length== 0 || mail.length== 0){
        let errores= $('#errores');
        /*$.each(errores,function(indice, elemento){
            elemento.textContent= "Campo Obligatorio";
            console.log(elemento);
        });
        */
        errores.html("Hay campos sin completar");
        //return false;
    }
    //versión JS
   /* var pelis= Array.from($('.genero')); //creo un arreglo en js con los nodos de html y los convierto para aplicar el forEach
    pelis.forEach(function(elemento,indice){
        if(elemento.checked){
            console.log("Elegiste esta opción")
        }
    });
*/
    //versión forEach de jQ
    var pelis= $('.genero');
    $.each(pelis,function(indice, elemento){
        console.log(elemento);
        if(elemento.checked== true){
            console.log("Elegiste esta opción");
        }
    });

    return true;
}
//versión 1
$('#alquilar').on('click', function(e){
    if(validar(e)){
        $('#formulario').submit();
        console.log("El formulario se envió correctamente. Gracias.");
        alert("El formulario se envió correctamente. Gracias.")
    }
});
    
$('#limpiar').on('click', function(e){
    console.log("borré el formulario");
    $('#errores').html("");
});

//versión 2
$('#formulario').on('submit',function(e){
    validar(e);
    console.log();
});
/*
var x= null; vacío
console.log(x);
undefined: no sabremos si está vacía o no la definimos.)*/