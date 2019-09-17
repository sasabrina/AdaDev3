//Versión 1
/*$('#uno').on('click', function(){
    $('#uno').toggleClass('color11');
});

$('#izqDos').on('click', function(){
    $('#derDos').toggleClass('color22');
});
$('#derDos').on('click', function(){
    $('#izqDos').toggleClass('color22');
});

$('#cenTres').on('click', function(){
    $('#izqTres').toggleClass('color33');
    $('#derTres').toggleClass('color33');
})
*/

//Versión 2 (Lucía)
$('#uno').on('click', function(){
    $(this).toggleClass('color11');
});

$('#izqDos').on('click', function(){
    $(this).next().toggleClass('color22');
});
$('#derDos').on('click', function(){
    $(this).prev().toggleClass('color22');
});

$('#cenTres').on('click', function(){
    $(this).siblings().toggleClass('color33');
})