<?php
require("MyDatabase.php");
require("Hash.php");
/*
  Sprawdzanie użytkownika.
  Bardziej zaawansowane rozwiązanie: użytkowniików i ich hasła trzymamy w bazie danych
*/


$NICK = (string)$_POST['NICK'];
$PASS = (string)$_POST['pass'];
$time_start = microtime(true);
$hashed = Hash::hashFunction($PASS);
$time_end = microtime(true);

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
$time = $time_end - $time_start;

header("location: http://" . $_SERVER['HTTP_HOST'] ."/kryptografia/index.html?".$time);
	
?>