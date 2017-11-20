<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

    require("connectdb.php");

    $postdata = file_get_contents("php://input");
    $request  = json_decode($postdata);
    $placa     = $request->placa;
    $modelo      = $request->modelo;
    $motorista = $request->motorista;
    $montadora = $request->montadora;

    $sqlID = "SELECT MAX(CARRO) AS CARRO FROM CARRO";
    $exeSQLID = mysqli_query($conn, $sqlID);
    $row = mysqli_fetch_assoc($exeSQLID);


    if (isset($row['CARRO'])){
       $codigo = $row['CARRO'] + 1;
    }
    else{
      $codigo = 1;
    }

    $sql = "INSERT INTO CARRO VALUES ('$codigo', '$motorista', '$placa', '$modelo' , '$montadora');" ;

    if(mysqli_query($conn, $sql)){
      echo "Cadastrado\n";
      $result = true;
    }else{
      die('Erro ao cadastrar');
      $result = "{'success':false}";
    }

    echo($result);
?>