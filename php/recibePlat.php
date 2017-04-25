<?php
if ($_SERVER['REQUEST_METHOD']==='POST'){
	
	//Para obtener los datos recibidos y guardarlos en una variable
	$request= file_get_contents('php://input');
	
	//Para convertir un Json en un array de php
	$datos = json_decode($request,true);
	
	//Recorremos el array $datos para obtener los nombres de campos y sus valores.
	$campos="";
	$valores="";
	foreach ($datos as $name => $value){
		$campos .= $value['name'].',';
		$valores .= "'".$value['value']."',";
	}
	$campos = substr($campos,0, -1);
	$valores = substr($valores,0, -1);
	
	$sql="INSERT INTO t_platos ($campos) VALUES ($valores)";
	
	$conexion = new mysqli('localhost','root','','takeaway');
	mysqli_set_charset($conexion,"utf8");
	
	$query = $conexion->query($sql);
	if ($query) {
		echo json_encode([
		"respuesta"	=> "Se ha guardado el plato",
		"datosForm" => $sql,
		"error"		=> 0		
		]);
	}
	else {
		echo json_encode([
		"respuesta"	=> "No se ha podido guardar el plato",
		"datosForm" => $sql,
		"error"		=> 1		
		]);
	}
	

	}
	

?>









