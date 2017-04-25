<?php
//Cuando se reciben datos de formulario se genera un POST, el siguiente IF comprueba si existen o no datos post 
if ($_POST){
	echo "Se reciben datos";
	//Para almacenar las variables recibidas por POST se usa la instrucción $_POST['nombre_campo'] que debe coincidir con el atributo "name" del formulario.
	//Para declarar una variable en PHP se usa el caracter $ y el nombre de la variable. Las variables deben empezar con una letra y no un número.
	$nombre = $_POST['nombre'];
	$email	= $_POST['email'];
	
	echo "<h1>Hola que tal, $nombre</h1>";
	echo "<p>Gracias por registrarte en nuestra newsletter. Recibirás en tu cuenta de mail $email en código descuento para tu próxima compra.</p>";
	
	$sql="INSERT INTO t_newsletter (nombre,email) 
	VALUES ('$nombre','$email')";
	$conexion = new mysqli('localhost','root','','takeaway');
	if ($conexion) {
		echo "Se ha conectado correctamente.<br>";
		$query = $conexion->query($sql);
		if ($query){
			echo "se ha registrado correctamente.";
		}
		else {
			echo "Ocurrió un problema al almacenar la información.";
		}
		$conexion->close();
	}
	else {
		echo "Error al conectar a localhost";
	}
}
else {
	echo "No se reciben datos";
}














?>