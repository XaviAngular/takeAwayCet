//El document ready es una instrucción de Jquery que hace que no se ejecuten las líneas de código hasta que toda la página esté cargada (Css, texto, imagen, otras librerías, etc). En el ejemplo, no muestra el formulario hasta que no esté totalmente cargada y prepara la llamada Ajax para envíar el fomrulario.
$( document ).ready(function(){
			//declaración de variables
			//booleana (sí/no)
			var debug=true;
			//de texto declarado entre comillas
			var texto="hola que tal";
			//numérica
			var numero=7;
			$(".button-collapse").sideNav();
			$(".dropdown-button").dropdown();
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
	//con serialize() es la forma para obtener datos formulario en modo texto separando los valores por el símbolo &
	var dataForm=$('#formulario').serialize();
	if(debug) console.log(dataForm);
	//con serializeArray() se guardan los nombre de campo y sus valores en una variable de tipo array.
	var dataFormArray=$('#formulario').serializeArray();
	if (debug) console.log(dataFormArray);
	//Se almacena en variable jsonData el convertir el objeto de tipo array a JSON usando la función JSON.stringify()
	var jsonData=JSON.stringify(dataFormArray);		
	if (debug) console.log(jsonData);		
	var urlPost="../php/recibeCat.php";
	$.ajax({
		dataType:'JSON',
		type:'POST',
		url:urlPost,
		data:jsonData,
		success: function(resultado){
					if (debug) console.log("Todo bien");
					//se muestra por consola todo el resultado
					if (debug) console.log(resultado);
					//se muestra por consola la respuesta
					if (debug) console.warn(resultado.respuesta);
					
					if (debug) console.log(resultado.datosForm);
				},
		error: function(resultado){
					alert('errooooooooor');
		}
		
	})
			//acaba el submit del form
			})

//acaba document.ready
})