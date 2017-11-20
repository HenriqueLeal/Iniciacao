<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");


    $postdata = file_get_contents("php://input");
    $request  = json_decode($postdata);
    $nome     = $request->nome;
    $cpf      = $request->cpf;
    $telefone = $request->telefone;
    $email    = $request->email;
    $tipousuario = $request->tipo;

    require("connectdb.php");

    $sqlID = "SELECT MAX(USUARIO) AS USUARIO FROM USUARIO";
    $exeSQLID = mysqli_query($conn, $sqlID);
    $row = mysqli_fetch_assoc($exeSQLID);

    if (isset($row['USUARIO'])){
       $codigo = $row['USUARIO'] + 1;
    }
    else{
      $codigo = 1;
    }

    $sql = "INSERT INTO USUARIO VALUES ('$codigo', '$tipousuario', '$nome', '$cpf' , '$telefone', '$email');" ;

    if(mysqli_query($conn, $sql)){
      echo "Cadastrado\n";
      $result = true;
    }else{
      die('Erro ao cadastrar');
      $result = "{'success':false}";
    }

    echo($result);
?>