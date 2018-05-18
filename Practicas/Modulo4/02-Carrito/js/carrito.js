var carritoStorage= localStorage.getItem('carrito');
var productos= JSON.parse(carritoStorage).productos;
var carritoUl= $('#carritoUl');

function mostrarProd(){
    $.each(carrito, function(index, elem){
        let li= `<li>${elem.url}
                <p>${elem.descripcion}</p>
                <p>${elem.precio}</p></li>`
    });

    $('#carritoUl').append(li);
    console.log(li);
}
mostrarProd();

function calcularSubtotal(){
    let subtotal= 0;

    for(i=0; i<carrito; i++){
        subtotal += carrito[i].cantidad * parseFloat(carrito[i].precio);
    }
    return subtotal;
}