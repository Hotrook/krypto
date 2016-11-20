<?php
require_once("MyDatabase.php");


$username = $_POST["username"];


$recipient = $_POST["recipient"];


$account_number = $_POST["account_number"];


$date = $_POST["date"];


		$db   = myDB();
		$q    = "INSERT INTO history(username, recipient, account_number, myDate) VALUES(?,?,?,?)";
		$stmt = $db->prepare($q);
		$stmt-> bind_param("ssss", $username, $recipient,$account_number,$date );
		$stmt -> execute();

		$db->close();

$odp = 4;
echo json_encode($odp);
?>