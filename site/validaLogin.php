<?php
   header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

    require("connectdb.php");

    $postdata = file_get_contents("php://input");
    $request  = json_decode($postdata);
    $nome     = $request->nome;
    $senha    = $request->senha;

    $result = mysqli_query($conn , "SELECT * FROM ADMIN WHERE LOGIN = '$nome' AND SENHA = '$senha'" );
    $num_rows = $result->num_rows;

    if ($num_rows > 0) {
       $result = true;
    }
    else {
        $result = "{'success':false}";
    }  

    echo($result);
?>