<?php
require("MyDatabase.php");
require("Hash.php");
/*
  Sprawdzanie użytkownika.
  Bardziej zaawansowane rozwiązanie: użytkowniików i ich hasła trzymamy w bazie danych
*/


$NICK 			= (string)$_POST['NICK'];
$PASS 			= (string)$_POST['PASS'];
$email 			= (string)$_POST['email'];
$phone_number	= (string)$_POST['phone_number'];
$question1 		= (string)$_POST['question1'];
$answer1 		= (string)$_POST['answer1'];
$question2 		= (string)$_POST['question2'];
$answer2 		= (string)$_POST['answer2'];

if(    $NICK 		 !== "" 
	&& $PASS 		 !== "" 
	&& $email 		 !== ""
	&& $phone_number !== ""
	&& $question1 	 !== ""
	&& $answer1      !== ""
	&& $question2    !== ""
	&& $answer2 	 !== ""
	){

	$hashed 		= Hash::hashFunction($PASS);
	$answer1_hashed = Hash::hashFunction($answer1);
	$answer2_hashed = Hash::hashFunction($answer2);

	$db = myDb();
	$query = 'INSERT INTO USERS(username,password,email,phone_number,question1,
						  answer1,question2,answer2) VALUES (?,?,?,?,?,?,?,?)';

	$stmt = $db->prepare($query);
	$stmt->bind_param('ssssssss',$NICK
						  ,$hashed 
						  ,$email 
						  ,$phone_number 
						  ,$question1 
						  ,$answer1_hashed 
						  ,$question2 
						  ,$answer2_hashed );

	if($stmt->execute())
		echo 'bad';
	else
		echo 'good';
	
	$db->close();

	header("location: http://" . $_SERVER['HTTP_HOST'] ."/kryptografia/index.html?");
}
else{
	echo "Ivalid data";
}	
?>