<?php
require("MyDatabase.php");
require("Hash.php");
/*
  Sprawdzanie użytkownika.
  Bardziej zaawansowane rozwiązanie: użytkowniików i ich hasła trzymamy w bazie danych
*/

$NICK = (string)$_POST['NICK'];
$PASS = (string)$_POST['pass'];
$hashed = Hash::hashFunction($PASS);

$db = myDb();
$query = 'INSERT INTO USERS(username,password) VALUES (?,?)';

$stmt = $db->prepare($query);
$stmt->bind_param('ss',$NICK, $hashed );

if($stmt->execute()){
	echo 'bad';

}
else{
	echo 'good';

}
$db->close();
header("location: http://" . $_SERVER['HTTP_HOST'] ."/kryptografia/index.html");
	
?>