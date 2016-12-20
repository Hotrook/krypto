<?php
require_once("MyDatabase.php");


$username = $_POST["username"];


$recipient = $_POST["recipient"];


$account_number = $_POST["account_number"];


$title = $_POST["title"];


		$db   = myDB();
		$q    = "INSERT INTO history(username, recipient, account_number, title) VALUES(?,?,?,?)";
		$stmt = $db->prepare($q);
		$stmt-> bind_param("ssss", $username, $recipient,$account_number,$title );
		$stmt -> execute();
		$db->close();
		header("location: ./MainPage.php");
$odp = 4;
echo json_encode($odp);
?>