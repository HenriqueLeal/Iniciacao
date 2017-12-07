<?php
date_default_timezone_set('America/Sao_Paulo');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

require("connectdb.php");

$postdata = file_get_contents("php://input");
$request  = json_decode($postdata);
$placa     = $request->placa;
$placa = trim($placa);

$result = mysqli_query($conn , "SELECT CARRO.USUARIO FROM CARRO WHERE CARRO.PLACA = '$placa'");
$num_rows = $result->num_rows;
$user = 

$details = "";

if ($num_rows > 0) {  

	/*$data  =  date("Y-m-d H:i:s"); 

	$sqlID = "SELECT MAX(CODIGO) AS CODIGO FROM RELENTSAI";
	$exeSQLID = mysqli_query($conn, $sqlID);
	$row = mysqli_fetch_assoc($exeSQLID);

	if (isset($row['CODIGO'])){
		$codigo = $row['CODIGO'] + 1;
	}
	else{
		$codigo = 1;
	}
   

	$sql = "INSERT INTO relentsai VALUES ('$codigo', '$user', '$data', '$tipo')" ; */


	$details = "true";

	$sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
    socket_connect($sock,"192.168.0.21", 8080); 
    socket_write($sock,'a'); 
    socket_close($sock); 
}
else{
	$details = "false"; 
}
echo($details);
?>