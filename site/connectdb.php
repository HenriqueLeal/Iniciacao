<?php
  // define("HOSTNAME", "localhost");
  // define("USERNAME", "root");
  // define("PASSWORD", "");
  // define("DATABASE", "estacionamentointeligente");

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "estacionamentointeligente";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

  // $dbhandle = new mysqli(HOSTNAME, USERNAME, PASSWORD, DATABASE) or die ("Sem acesso ao banco de dados");

?>