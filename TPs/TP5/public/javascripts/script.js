//SEARCH
$(document).on('click', '#btnSearch', function(event){
    event.preventDefault();
    let busqueda = {"value": $('#search').val()};
  
    if (busqueda.value)  {
      window.location.href = '/search/'+ busqueda.value;
    } else {
      $('#search').focus();
    }
  });
  
  $(document).on('keypress', '#search', function(event) {
    if (event.keyCode === 13) {
      let busqueda = {"value": $('#search').val()};
      if (busqueda.value)  {
        window.location.href = '/search/'+ busqueda.value;
      } else {
        $('#search').focus();
      }
    }
  });

 //WATCHED
var moieswatched= [];

$('.fa-eye').on('click', function(){
    var poster= $(this).data('id');
    var icon= $(this);
    $(this).toggleClass('watched')

    $.ajax({
      url: '/movies/vistas',
      type: 'post',
      data: {info: JSON.stringify({'watched':poster})},

      success: function(){
        if(icon.hasClass('watched')){
          console.log(poster);
        }else{
          console.log('error');
        }
      },

      error: function(response){
        console.log('Select a movie, please')
      }
    })
  })