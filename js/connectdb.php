<?php
   define("HOSTNAME", "localhost");
   define("USERNAME", "root");
   define("PASSWORD", "");
   define("DATABASE", "estacionamentointeligente");

   $dbhandle = new mysqli(HOSTNAME, USERNAME, PASSWORD, DATABASE) or die ("Sem acesso ao banco de dados");

?>