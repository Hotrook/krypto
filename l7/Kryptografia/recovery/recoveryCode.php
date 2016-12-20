<?php
	require("../MyDatabase.php");
	require("../Hash.php");

	$NICK = (string)$_COOKIE['NICK'];
	$CODE = (string)$_POST['CODE']?$_POST['CODE']:"";



	$db = myDb();
	mysqli_select_db($db,"ajax_demo");
	
	$query = 'SELECT code, timestamp FROM codes WHERE username=\''.$NICK.'\'' ;

	$result = $db->query($query);

	if( $row = mysqli_fetch_array( $result ) ){
		$timestamp = $row['timestamp'];
		$code = $row['code'];

		if( $code == $CODE && time() < $timestamp ){
			unset($_COOKIE['NICK']);
			unset($_COOKIE['PASS']);
			header("location: http://".$_SERVER['HTTP_HOST']."/kryptografia/recovery/recoveryPass.php");
			$query = 'DELETE FROM codes WHERE username=\''.$NICK.'\'' ;
			$result = $db->query($query);
		}
		else{
			echo "Sth's wrong";
		}
	}

	unset($_COOKIE['NICK']);
	unset($_COOKIE['PASS']);
	// header("location: http://".$_SERVER['HTTP_HOST']."/kryptografia/index.html");
?>
