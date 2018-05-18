$('#ejes').hide();

$('#vehiculo').on('change', e=>{
    let option= $('#vehiculo').val();
    if (option == "2"){
        $('#ejes').show();
    }
});

$('#confirmar').on('click',e=>{
    e.preventDefault(); //evita el envío del form por GET

    let nombre= $('#nombre').val();
    console.log(nombre);

    let dni= $('#dni').val();
    console.log(dni);

    let email= $('#email').val();
    console.log(email);

    let patente= $('#patente').val();
    console.log(patente);

    let modelo= $('#modelo').val();
    console.log(modelo);
    
    let vehiculo= $('#vehiculo').val();
    switch(vehiculo){
        case '1':
            vechiculo= new Auto(patente);
            console.log(vehiculo);
             break;
        case '2': 
            let ejes= $('#ejes').val();
            console.log(ejes);
            vehiculo= new Camion(patente, ejes);
            //vehiculo.acelerar(20);
            break;
        default:
            alert("Elija una opción válida"); 
            break;
    }

    let auto= new Auto(nombre, dni, email, vehiculo, modelo, patente);
    console.log(auto);
    let camion= new Camion(patente, ejes);
    console.log(camion);
});