//El document ready es una instrucción de Jquery que hace que no se ejecuten las líneas de código hasta que toda la página esté cargada (Css, texto, imagen, otras librerías, etc). En el ejemplo, no muestra el formulario hasta que no esté totalmente cargada y prepara la llamada Ajax para envíar el fomrulario.
$( document ).ready(function(){
			//declaración de variables
			//booleana (sí/no)
			var debug=true;
			//Funciones de materialize para navegación
			$(".button-collapse").sideNav();
			$(".dropdown-button").dropdown();
			//Inicializar desplegables
			$('select').material_select();
			//Se oculta el formulario
			$('#formulario').hide();
			//se muestra el formulario animado
			$('#formulario').fadeIn(2000);
			//Se captura el evento "submit" para que no haga el action por defecto.
$('#formulario').submit(function(event){
	//para parar el proceso de serie de un formulario
	//al hacer submit se ejecuta la siguiente instrucción, deja de funcionar el atributo action del formulario.
	event.preventDefault();
	if(debug) console.log("envio formulario detectado");
	
	//con serializeArray() se guardan los nombre de campo y sus valores en una variable de tipo array.
	var dataFormArray=$('#formulario').serializeArray();
	if (debug) console.log(dataFormArray);
	//Se almacena en variable jsonData el convertir el objeto de tipo array a JSON usando la función JSON.stringify()
	var jsonData=JSON.stringify(dataFormArray);		
	if (debug) console.log(jsonData);		
	var urlPost="../php/recibePlat.php";
	$.ajax({
		dataType:'JSON',
		type:'POST',
		url:urlPost,
		data:jsonData,
		success: function(resultado){			
					if (debug) console.warn(resultado.respuesta);
					Materialize.toast('Plato Creado', 4000);
					$('#formulario')[0].reset();
					
				},
		error: function(resultado){
					alert('errooooooooor');
		}
		
	})
			//acaba el submit del form
			})

//acaba document.ready
})