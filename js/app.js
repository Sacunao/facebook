;(function (){
	window.addEventListener("load", loadingPage);

	var texto = document.getElementById("textarea");
	var boton = document.getElementById("boton");

	function loadingPage(){
		boton.disabled = true;
		boton.addEventListener("click", createPost);
	}

	texto.addEventListener("keyup", validacion);

	function createPost(e){
		boton.disabled = true;
		e.preventDefault(); 
		var contenedor = document.getElementById("contenedor");

		var mensaje = document.createElement("div");
		mensaje.setAttribute("id", "mensaje");
		mensaje.setAttribute("class", "card horizontal");
		contenedor.insertBefore(mensaje, contenedor.childNodes[0]);

		var post = document.createElement("div");
		post.innerText = texto.value.trim();
		mensaje.appendChild(post);
		texto.value = "";
	}

	function validacion(){
		boton.disabled = false;

		var textValue = texto.value;
	    var textSinEspacios = textValue.trim().length;
	    var espacios = textValue.match(/\n/g);
	    var cantEnters = (espacios == null) ? 0 : espacios.length;
	    
	    if(textSinEspacios === 0){
	        boton.disabled = true; 
	    }
	    if(cantEnters > 3){
	        text.setAttribute("rows", cantEnters);
	    }
	}
    
})();
