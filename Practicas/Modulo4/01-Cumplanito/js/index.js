var jsonCumple= {};
var cumples= [];
var datosGuardados= localStorage.getItem("cumples");

//localStorage.clear();

if(datosGuardados== null){
    cumples= [];
}else{
    //cargo el arreglo cumples con la info guardada
    cumples= JSON.parse(datosGuardados).cumples;
}
console.log(datosGuardados);

$('#btnGuardar').on('click', function(e){
    let datos= {
        nombre: $('#nombre').val(),
        fecha: $('#fecha').val(),
        imagen: $('#imagen').val()
    };
    console.log(datos);
    cumples.push(datos);
    console.log(cumples);
    jsonCumple= {
                'cumples': cumples,
                'total': cumples.length
                }
    console.log(jsonCumple);
    let data= JSON.stringify(jsonCumple);
    localStorage.setItem("cumples", data);

    var input= $('input');
    $.each(input, function(indice, elemento){
        if(elemento.type != 'button'){
            $(elemento).val('');
        }
    })
});

$('img').on('click', function(e){
    $('#imagen').val($(this).data('name'));
})