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

    $result = mysqli_query($conn, "SELECT DISTINCT USUARIO.USUARIO,
                                          USUARIO.NOME,
                                          CARRO.PLACA,
                                          COALESCE(CARRO.MODELO, ' - '),
                                          TIPOUSUARIO.DESCRICAO
                                   FROM USUARIO
                                   LEFT JOIN CARRO ON CARRO.USUARIO = USUARIO.USUARIO
                                   LEFT JOIN TIPOUSUARIO ON TIPOUSUARIO.TIPO = USUARIO.TIPOUSUARIO
                                   ORDER BY USUARIO.USUARIO");

    $outp = "";

    while($rs = $result->fetch_row()){
        if($outp != ""){
          $outp .= ",";
       }
       $outp  .= '{"usuario":"'  . $rs[0] . '",'; 
       $outp  .= '"nome":"'      . $rs[1] . '",'; 
       $outp  .= '"placa":"'     . $rs[2] . '",'; 
       $outp .= '"modelo":"'     . $rs[3] . '",'; 
       $outp .= '"tipouser":"'   . $rs[4] . '"}';
    }
    $outp ='{"details":['.$outp.']}'; 
    echo($outp); 
?>