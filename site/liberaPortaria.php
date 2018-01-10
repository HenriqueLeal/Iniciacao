<?php
date_default_timezone_set('America/Sao_Paulo');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

require("connectdb.php");

$postdata = file_get_contents("php://input");
$request  = json_decode($postdata);
$user     = $request->user;
$tipo      = $request->tipo;
$data  =  date("Y-m-d H:i:s");  

$result = mysqli_query($conn , "SELECT USUARIO.USUARIO FROM USUARIO WHERE USUARIO = '$user'" );
$num_rows = $result->num_rows;

$details = "";

if ($num_rows > 0) {
  $sqlID = "SELECT MAX(CODIGO) AS CODIGO FROM RELENTSAI";
  $exeSQLID = mysqli_query($conn, $sqlID);
  $row = mysqli_fetch_assoc($exeSQLID);

  if (isset($row['CODIGO'])){
   $codigo = $row['CODIGO'] + 1;
 }
 else{
   $codigo = 1;
 }

 $sql = "INSERT INTO relentsai VALUES ('$codigo', '$user', '$data', '$tipo')" ; 

 if(mysqli_query($conn, $sql)){
  $details = "true"; 
  $sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
  socket_connect($sock,"10.66.40.127", 8080); 
  socket_write($sock,'a'); 
  socket_close($sock); 
}else{
  $details = "false"; 
}

}
else{
  $details = "false"; 
}

print($details);
?>