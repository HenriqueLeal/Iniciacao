
<!DOCTYPE html>
<html>
<head>
  <title></title>
  <script src="tesseract.js"></script>
</head>
<body>

  <input type="hidden" id="edtResultado">

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

  $postdata = file_get_contents("php://input");
  $request  = json_decode($postdata);
  $url     = $request->url;


  echo "<script>
  function runOCR(url){
   Tesseract.recognize(url).then(function(result) {
    document.getElementById('edtResultado').innerText = result.text;
  })
}
</script>";



$result = mysqli_query($conn , "SELECT CARRO.PLACA,
 CARRO.MODELO,
 USUARIO.NOME 
 FROM CARRO WHERE CARRO.PLACA = '$nome' AND SENHA = '$senha'" );
$num_rows = $result->num_rows;

if ($num_rows > 0) {
 $result = true;
}
else {
  $result = "{'success':false}";
}  

echo($result);
?>

</body>
</html>