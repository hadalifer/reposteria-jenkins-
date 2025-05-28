<?php
class Cconexion{
	function conexionBD(){
$host = "localhost";  // Servidor de MySQL
$username = "root";         // Nombre de usuario de MySQL
$password = "";             // Contraseña de MySQL (generalmente vacía en XAMPP)
$dbname = "reposteria";  // Nombre de la base de datos

// Crear conexión
try{
$conn = new PDO ("mysql:host=$host;bdname=$bdname",$username,$pasword);
echo="se conecto la base de datos";
}
catch (PDOException $exp){
	echo ("no se logro la conexion")

}
retun $conn;
}
}

?>