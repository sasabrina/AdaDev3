$(document).on('ready',function(e){
});
	// Cargar populares
	$.ajax({
		method: 'GET',
		url: 'http://mariabelenalegre.com/api-encuenta/api.php',		

	})
	
	.done(function(response){
		console.log(response);

		let parse = JSON.parse(response);
		
        $.each(parse,function(index,elem){
			
			let encuesta = $('#encuesta');
			let ul = `<ul id="${index}"><li><h2>${elem.enunciado}</h2></li></ul>`;
			let button = `<input type ="button">Votar</input>`;
			console.log(button);
			ul.append(button);
			encuesta.append(ul);
			

			console.log(ul);

			$.each(elem.respuestas,function(i,e){
			
				let li = `<li><input type="radio" value="">${e}</input></li>`;
				$('#'+index).append(li);
				console.log(li);            
			})            
		});

		
		


	})
	
	// Cargar encuestas



function cargarEncuestas(){

	// Se recorre el json de preguntas y se cargan las preguntas con sus respuestas
	// Las respuestas tienen un check 
	// Poner un botón votar
	// Puede haber mas de una respuesta para una pregunta

}