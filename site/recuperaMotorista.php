<?php
    
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
    header("Content-Type: application/json; charset=UTF-8");  

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

    while($rs = $result->fetch_row()){
       if($outp != ""){
          $outp .= ",";
       }
       $outp .= '{"usuario":"'  . $rs[0] . '",'; 
       $outp .= '"nome":"'   . $rs[1]  .  '"}'; 
    }

    $outp ='{"details":['.$outp.']}'; 
    echo($outp); 
?>