var btnEnviar= document.getElementById("btnEnviar");
var lista= document.getElementById("lista");
var contador= 0;
var textbox= document.getElementById("input");

function cargarTarea(){
	if (textbox.value !== ""){
		contador++;
		var tarea= document.createElement("li");

		tarea.innerHTML= textbox.value;
		tarea.setAttribute("id", contador);
		textbox.value= "";

		var btnEliminar= document.createElement("button");
		btnEliminar.setAttribute("id", btnEliminar);
		btnEliminar.innerHTML= '<i class="far fa-trash-alt"></i>';
		btnEliminar.addEventListener("click", eliminarTarea);

		function eliminarTarea(){
			tarea.remove();
		}

		tarea.appendChild(btnEliminar);
		lista.appendChild(tarea);
	}
}

btnEnviar.addEventListener("click", cargarTarea);