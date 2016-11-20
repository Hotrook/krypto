<?php
if (isset($_COOKIE['NICK'])) {
    unset($_COOKIE['NICK']);
    setcookie('NICK', null, -1, '/');
} else {
}
	require("Hash.php");
	require("MyDatabase.php");

	if (!(isset($_POST['NICK']) and isset($_POST['pass']))){
		header("location: http://" . $_SERVER['HTTP_HOST'] . "/kryptografia/index.html");
	}

	$NICK = (string)$_POST['NICK'];
	$PASS = (string)$_POST['pass'];

	$db = myDb();
	$query = 'SELECT password FROM USERS WHERE username=?';

	$stmt = $db->prepare($query);
	$stmt->bind_param('s',$NICK );
	$stmt->execute();
	$stmt->bind_result($password);
	$stmt->store_result();
	if($stmt->fetch()){
		$result = $password;
	}
	$db->close();

	$SALT = substr( $result, 16, 16 );
	$hashed = Hash::hashFunctionWithSalt($PASS,$SALT);

	if( $hashed == $result ){
		setcookie('NICK', $NICK,0);
		header("location: http://" . $_SERVER['HTTP_HOST'] . "/kryptografia/MainPage.php?");
		exit;
	}
	else{
		header("location: http://" . $_SERVER['HTTP_HOST'] ."/kryptografia/index.html");
	}
		
?>
