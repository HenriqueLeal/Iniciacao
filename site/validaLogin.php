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

    echo "<script> console.log('teste') </script>";

    $postdata = file_get_contents("php://input");
    $request  = json_decode($postdata);
    $nome     = $request->nome;
    $senha      = $request->senha;

    $sql = "SELECT * FROM ADMIN WHERE LOGIN = '$nome' AND SENHA = '$senha'" ;

    $result = mysqli_query($conn, $sql);
    $num_rows = mysql_num_rows(mysqli_query($conn, $sql));

    if ($num_rows > 0) {
        
    }
    else {
        echo"<script> Alert('Usuario nao encontrado') </script>";
    }


?>