<?php
    date_default_timezone_set('America/Sao_Paulo');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "estacionamentointeligente";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $postdata = file_get_contents("php://input");
    $request  = json_decode($postdata);
    $user     = $request->user;
    $tipo      = $request->tipo;
    //$data = date("d/m/Y H:i:s "); formato br
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
          }else{
            $details = "false"; 
          }

      }
      else{
        $details = "false"; 
      }

     print($details);
?>