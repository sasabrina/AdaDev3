var primero= null;
var numClick;
var puntos= 0;
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

function comenzar(){
    $('#comenzar').on('click', function(){
        $('#popup').removeClass('invisible');
        $('#popup').dialog();
        
        $('#jugarbtn').on('click', function(){
            $('#popup').dialog('close');
            $('#derecha').removeClass('noPointer');
            $('#comenzar').addClass('noPointer');
            $('#dataJuego').removeClass('invisible');

            var nombreDiv= $('#nombreDiv');
            var nombre= $('#nombre').val();
        
            if(nombre == "" || nombre == null){
                var jugador= `<h2>Jugador: Kitten-Shark.</h2>`
            }else{
                var jugador= `<h2>Jugador: ${nombre}.</h2>`
            };
            nombreDiv.html(jugador);
    
            var nivel= $('#nivel').val();
            var nivelSpan= $('#nivelSpan');
            var movimientos= $('#numClickSpan');
            
            switch(nivel){
                case 'Fácil':
                    numClick= 18;
                break;
                case "Intermedio":
                    numClick= 12;
                break;
                case "Experto":
                    numClick= 8;
                break;
                default: break;
            }
            nivelSpan.html(nivel);
            movimientos.html(numClick);
        });
    });
            
};
comenzar();

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

$('.back').on('click', function(){
    $(this).children().first().toggleClass('visible invisible');
    console.log($(this).children().first());
    
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
                $(primero).effect( "bounce", { times: 3 }, "slow" );
                $(segundo).effect( "bounce", { times: 3 }, "slow" );                    
                console.log("match");
                clicked.splice(0,1);
                clicked=[];
                matcheado++;
                console.log('matcheado: '+matcheado);                    
                
                primero= null;
                segundo= null;

                let nivel= $('#nivel').val();
                switch(nivel){
                    case "Fácil": puntos= puntos + 25; break;
                    case "Intermedio": puntos= puntos + 50; break;
                    case "Experto": puntos= puntos + 75; break;
                    default: break;
                }
                
                $('#puntosSpan').html(puntos);
                
            }else{
                $(primero).effect( "shake", { times: 3 }, "slow" );
                $(segundo).effect( "shake", { times: 3 }, "slow" );
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

            $('#numClickSpan').html(numClick);
        };
    }
    resultado();
});

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

mezclar();
asignarFichas();