var carritoStorage= localStorage.getItem("carrito");
var producto= {};

//localStorage.clear();

if(carritoStorage == null){
    carrito=[];
}else{
        carrito= JSON.parse(carritoStorage).productos;
}

/*
*verifico si ya existe el producto en el carrito
*@params producto
*return boolean | int
*/

function chequearExistencia(producto){
    let cod= producto.codigo; //variable auxiliar
    let encontrado= false;
    let i= 0;

    while(!encontrado && i<carrito.length){ // !(encontrado == true)
            if(carrito[i].producto.cod == cod){
                return true
            }
            i++;
    }
    //devuelve false si no lo encontró
    return encontrado;
}

$(".add").on('click',function(e){
    
    let hermanos= $(this).siblings();

    producto.url = hermanos[0].src;
	producto.descripcion = hermanos[1].innerText;
    producto.precio = hermanos[2].innerText;
    producto.stock= hermanos[3].innerText;
    producto.cod= hermanos[4].innerText;

    if(parseInt(producto.stock)>= parseInt(hermanos[5].value)){
        let pos= chequearExistencia(producto);
        if(!pos){
            
            // creo un objeto item para agregar luego al carrito
            var item ={
                cantidad: parseInt(hermanos[5].value),
                producto: producto
            }
            console.log(item);
            
            carrito.push(item);
        }else{
            carrito[pos].cantidad += parseInt(hermanos[5].value);
        }
        
        let jasonCarrito= {'productos': carrito};
        localStorage.setItem('carrrito',JSON.stringify(jasonCarrito));
    }else{
        alert("No se agregó el producto, no hay stock suficiente");
    }
});

// CHECKOUT
let cuotas= "6";
let descuento= Checkout.calcularDescuento(1000/20);
let recargo= Checkout.calcularRecargo(1000, parseInt(cuotas));

console.log(descuento);