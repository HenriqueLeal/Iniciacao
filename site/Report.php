<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

    $postdata = file_get_contents("php://input");
    $request  = json_decode($postdata);
    $DtInicio     = $request->DtInicio;
    $DtFim      = $request->DtFim;

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
                                          CARRO.MODELO,
                                          TIPOUSUARIO.DESCRICAO, 
                                          RELENTSAI.DATAHORA,
                                          CASE RELENTSAI.TIPO 
                                          WHEN 'E' THEN 'ENTRADA'
                                          WHEN 'S' THEN 'SAIDA'
                                          END AS ENTSAI
                                   FROM RELENTSAI
                                   LEFT JOIN USUARIO ON USUARIO.USUARIO = RELENTSAI.USUARIO
                                   LEFT JOIN CARRO ON CARRO.USUARIO = USUARIO.USUARIO
                                   LEFT JOIN TIPOUSUARIO ON TIPOUSUARIO.TIPO = USUARIO.TIPOUSUARIO
                                   WHERE RELENTSAI.DATAHORA >= '$DtInicio' AND
                                         RELENTSAI.DATAHORA <= '$DtFim'
                                   ORDER BY USUARIO.USUARIO");

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