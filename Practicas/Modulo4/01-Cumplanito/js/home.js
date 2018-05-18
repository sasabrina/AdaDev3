const rutaImg= "imgs";
//traigo en string la info localStorage
var cumplesStorage= localStorage.getItem('cumples');
//recupero el jSon - objeto js
var jSon= JSON.parse(cumplesStorage);
//me quedo con el arreglo de items
var cumples= jSon.cumples;

//localStorage.clear();
//recupero los cumples guardados
function proximosCumples(){
    $.each(cumples, function(index, elem){
        let li= `<li><p><span>${elem.fecha}</span>
                ${elem.nombre}</p>
                <a href= "#" class="borrar"
                data-id="${index}">x<a></li>`;
        $('#cumples').append(li); //appendeo al id que ya estaba en el html
    });
}

function cumpleDelDia(){
    if(cumples.length == 0){
        return alert("No hay cumpleaños cargados");
        }else{
        //exluye el límite suerior
        let indice= Math.floor(Math.random() * cumples.length);
        /*
        while(indice == cumples.length){
            indice = Math.floor(Math.random() * cumples.length);
        }
        */
        let cumpleHoyImg= cumples[indice].imagen;
        let cumpleHoyName= cumples[indice].nombre;

        let h1= `<h1>${cumpleHoyName}</h1>`;
        let img= `<img src="${rutaImg}/${cumpleHoyImg}.jpg">`;

        $('#cumple-dia').append(h1);
        $('#cumple-dia').append(img);
    }
}
/*
$('.borrar').on('click', e=>{
    e.preventDefault();
    let li= $(this);
    $(this).parent().remove();
    let indice= li.data('id');
    cumples.splice(indice, 1);
    jSon.cumples= cumples;
    jSon.total= cumples.length;
    //guardo en el localStorage
    let datos= JSON.stringify(jSon);
    localStorage.setItem("cumples",datos);
});*/

$(document).on('click','ul a', function(e){
    e.preventDefault();
    let li= $(this);
    $(this).parent().remove();
    let indice= li.data('id');
    cumples.splice(indice, 1);
    jSon.cumples= cumples;
    jSon.total= cumples.length;
    //convierto en cadena de caracteres
    let datos= JSON.stringify(jSon);
    //guardo en el localStorage
    localStorage.setItem("cumples",datos);
});
//chequeo la carga del documento
$(document).ready(function(e){
    proximosCumples();
    cumpleDelDia();
});