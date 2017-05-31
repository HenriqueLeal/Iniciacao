<?php
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

    $result = mysqli_query($conn , "SELECT USUARIO, NOME FROM USUARIO" );

    $outp = "";

    while($rs = $result->fetch()){
       if($outp != ""){
          $outp .= ",";
       }
       $outp .= '{"usuario":"'  . $rs["USUARIO"] . '",'; 
       $outp .= '"nome":"'   . $rs["NOME"]  . '",'; 
    }


?>