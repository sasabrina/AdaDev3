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