var primero= null;
var numClick= 18;
var clicked= [];
var matcheado= 0;


const fichasArray= [
    {'name':'barco', 'img': 'imgs/barco.jpg'},
    {'name':'cama', 'img': 'imgs/cama.jpg'},
    {'name':'ducha', 'img': 'imgs/ducha.jpg'},
    {'name':'mona', 'img': 'imgs/mona.jpg'},
    {'name':'tijera', 'img': 'imgs/tijera.jpg'},
    {'name':'trono', 'img': 'imgs/trono.jpg'},
    {'name':'barco', 'img': 'imgs/barco.jpg'},
    {'name':'cama', 'img': 'imgs/cama.jpg'},
    {'name':'ducha', 'img': 'imgs/ducha.jpg'},
    {'name':'mona', 'img': 'imgs/mona.jpg'},
    {'name':'tijera', 'img': 'imgs/tijera.jpg'},
    {'name':'trono', 'img': 'imgs/trono.jpg'}
];

function ingresarNombre(){
    let nombreDiv= $('#nombre');
    let nombreRta= prompt('Ingresa tu nombre');

    if(nombreRta == "" || nombreRta == null){
        ingresarNombre();
    }else{
        let jugador= `<h2>Jugador: ${nombreRta}.</h2>`
        nombreDiv.append(jugador);
    }
};


function mezclar(){
    for(i=0; i<fichasArray.length; i++){
        var random= Math.floor(Math.random()*fichasArray.length);
        var x=fichasArray[i];
        fichasArray[i]=fichasArray[random];
        fichasArray[random]=x;
    };
}
    
function asignarFichas(){
    for(var i=0; i<=fichasArray.length-1; i++){
        var ficha= $('#ficha'+i);
        var img= `<img class="invisible" src=${fichasArray[i].img}></img>`;
            
        ficha.append(img);
    };
}

function girar(primero, segundo){
    primero.toggleClass('visible invisible');
    segundo.toggleClass('visible invisible');
};

function resultado(){
    if(matcheado == 6){
        setTimeout(function(){alert('Bien ahí, ganaste!');}, 1500);
        setTimeout(function(){location.reload();}, 3000);
    }
    if(numClick == 0){
        setTimeout(function(){alert('JAJA, perdiste.');}, 1500);
        setTimeout(function(){location.reload();}, 3000);
    }
};

$('.back').on('click', function(){
    $(this).children().first().toggleClass('visible invisible'); //me trae la imagen y no el div y cambia la clase
    console.log($(this).children().first()); //consolea la img (hija del div)
    
    if(primero == null){
        primero= $(this).children().first();
        console.log('primer click');
        clicked.push(primero);
        primero.parent().addClass('noPointer');
        
    }else{
        var segundo= $(this).children().first();
        console.log('segundo click');
        clicked.push(segundo);
        segundo.parent().addClass('noPointer');
        
        if(clicked.length == 2){
            if(primero.attr('src') == segundo.attr('src')
                && primero.parent().attr('id') != segundo.parent().attr('id')){                    
                console.log("match");
                clicked.splice(0,1);
                clicked=[];
                matcheado++;
                console.log('matcheado: '+matcheado);                    
                
                primero= null;
                segundo= null;       
                
            }else{
                primero.parent().addClass('back');
                primero.parent().removeClass('noPointer');
                segundo.parent().removeClass('noPointer');
                clicked=[];
                setTimeout(girar, 1200, primero, segundo);
                numClick--;
                console.log('movimientos: '+numClick);
            }
            primero= null;
            segundo= null;

            $('#movimientos').html(`<h2>Movimientos: ${numClick}.</h2>`);
        };
    }
    resultado();
});

ingresarNombre();
mezclar();
asignarFichas();