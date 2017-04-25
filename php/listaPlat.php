<?php
if ($_SERVER['REQUEST_METHOD']==='GET'){
	
	$sql="SELECT * FROM t_platos";
	
	$conexion = new mysqli('localhost','root','','takeaway');
	mysqli_set_charset($conexion,"utf8");
	
	$query = $conexion->query($sql);
	
	if ($query) {
		
		$rows = $query->fetch_all(MYSQLI_ASSOC);
		
		echo json_encode([
		"respuesta"	=> "Se ha enviado listado",
		"lista" => $rows,
		"error"		=> 0		
		]);
	}
	else {
		echo json_encode([
		"respuesta"	=> "No se ha podido obtener listado",
		"lista" => $sql,
		"error"		=> 1		
		]);
	}
	

	}
	

?>









