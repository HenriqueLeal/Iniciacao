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

$result = mysqli_query($conn , "SELECT * FROM CARRO WHERE CARRO.PLACA = '$placa'");
$num_rows = $result->num_rows;

$details = "";

if ($num_rows > 0) {  
 $details = "true";
}
else{
  $details = "false"; 
}
print($details);
?>