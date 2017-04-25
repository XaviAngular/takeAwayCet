<?php
//Cuando se reciben datos de formulario se genera un POST, el siguiente IF comprueba si existen o no datos post 
if ($_POST){
	echo "Se reciben datos";
	//Para almacenar las variables recibidas por POST se usa la instrucción $_POST['nombre_campo'] que debe coincidir con el atributo "name" del formulario.
	//Para declarar una variable en PHP se usa el caracter $ y el nombre de la variable. Las variables deben empezar con una letra y no un número.
	$nombre = $_POST['nombre'];
	$email	= $_POST['email'];
	$mensaje= $_POST['mensaje'];
	echo "<h1>Hola que tal, $nombre</h1>";
	echo "<p>Enviaremos una respuesta a $email lo antes posible</p>";
	echo "<p>Tu mensaje <strong>$mensaje</strong> ha sido enviado correctamente.</p>";
	$sql="INSERT INTO t_contacto (nombre,email,mensaje) 
	VALUES ('$nombre','$email', '$mensaje')";
	$conexion = new mysqli('localhost','root','','takeaway');
	if ($conexion) {
		echo "Se ha conectado correctamente";
		$query = $conexion->query($sql);
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