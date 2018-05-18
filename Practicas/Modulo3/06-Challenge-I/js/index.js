var principal= ['Tarta de JyQ','Ensalada Caprese','Milanesa','1/4 de Pollo'];
var guarnicion= ['Ensalada Mixta','Papas Fritas','Pure de Zapallo'];
var postre= ['Flan con Crema','Queso y Dulce','Mousse de Chocolate'];

var menu= [principal, guarnicion, postre];

function cargarMenu(){
    var selectPrincipal= document.getElementById('principal');
    for(i=0; i<selectPrincipal; i++){
        var option= document.createElement('option');
        option.textContent= principal[i].value;
        selectPrincipal.appendChild(option);
    }
    
    for(i=0; i<selectGuarnicion; i++){
        var selectGuarnicion= document.getElementById('guarnicion');
        var option= document.createElement('option');
        option.textContent= guarnicion[i].value;
        selectGuarnicion.appendChild(option);
    }
    
    for(i=0; i<selectPostre; i++){
        var selectPostre= document.getElementById('postre');
        var option= document.createElement('option');
        option.textContent= postre[i].value;
        selectPostre.appendChild(option);
    }
}

function mostrarMenu(){
    var menuFinal= document.getElementById('menuFinal');
    for(i=0; i<menu.length; i++){
        var comida= document.createElement('li');
        comida.textContent= menuFinal[i].value;
        menuFinal.appendChild(comidas);
    }
}
cargarMenu();