<?php

 // header('Access-Control-Allow-Origin: *');
 // header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');


    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

   $teste = $_POST['password'];

   echo "<script> console.log($teste) </script>"

   /* $postdata = file_get_contents("php://input");
    $request  = json_decode($postdata);
    $nome     = $request->nome;
    $cpf      = $request->cpf;
    $telefone = $request->telefone;
    $email    = $request->email;
    $codigo   = $request->codigo;

    $codigo = 1;
    $tipousuario = 1;

   echo"<script>console.log('entrou')</script>";

   include "connectdb.php";

    $sql = "INSERT INTO USUARIO VALUES ('$codigo', '$tipousuario', '$nome', '$cpf' , '$telefone', '$email');" ;
    if(mysqli_query($conn, $sql)){
      echo "Cadastrado\n";
    }else{
      die('Erro ao cadastrar');
    }*/
  
  // header('Content-type: application/json');
  // header('Access-Control-Allow-Origin: *');
?>