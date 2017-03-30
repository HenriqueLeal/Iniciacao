<?php
//if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  //  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']) && $_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'] == 'POST') {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
   // }
   // exit;
//}
   
   include "connectdb.php";
   //die(var_dump(file_get_contents("php://input")));
   $post = file_get_contents("php://input");
   $data = json_decode($post);

   die(var_dump($post, $data));

   /*$codigo   = $dbhandle->real_escape_string($data->codigo);
   $nome     = $dbhandle->real_escape_string($data->nome);
   $cpf      = $dbhandle->real_escape_string($data->cpf);
   $telefone = $dbhandle->real_escape_string($data->telefone);
   $email    = $dbhandle->real_escape_string($data->email);

   $query = "INSERT INTO USUARIO VALUES ($codigo, '".$NOME."', '".$CPF."', '".$TELEFONE."', '".$EMAIL."', '2')";
   $dbhandle->query($query);*/

   header('Content-type: application/json');
   header('Access-Control-Allow-Origin: *');
?>