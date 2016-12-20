<?php
	require("../MyDatabase.php");
	require("../Hash.php");

	$NICK = (string)$_COOKIE['NICK'];
	$PASS = (string)$_POST['PASS']?$_POST['PASS']:"";

	$hashed = Hash::hashFunction($PASS);


	$db = myDb();
	mysqli_select_db($db,"ajax_demo");
	
	$query = 'UPDATE USERS SET password=\''.$hashed.'\' WHERE username=\''.$NICK.'\'';

	$result = $db->query($query);


	unset($_COOKIE['NICK']);
	unset($_COOKIE['PASS']);

	header("location: http://".$_SERVER['HTTP_HOST']."/kryptografia/index.html");
?>
