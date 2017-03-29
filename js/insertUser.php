<?php 
   header("Access-Control-Allow-Origin: *");
   include "connectdb.php";
   $data = json_decode(file_get_contents("php://input"));

   $codigo   = $dbhandle->real_escape_string($data->codigo);
   $nome     = $dbhandle->real_escape_string($data->nome);
   $cpf      = $dbhandle->real_escape_string($data->cpf);
   $telefone = $dbhandle->real_escape_string($data->telefone);
   $email    = $dbhandle->real_escape_string($data->email);

   $query = "INSERT INTO USUARIO VALUES ($codigo, '".$NOME."', '".$CPF."', '".$TELEFONE."', '".$EMAIL."', '2')";
   $dbhandle->query($query);
?>