<?php
	require("../MyDatabase.php");
	require("../Hash.php");

	$NICK = (string)isset($_COOKIE['NICK'])?$_COOKIE['NICK']:"";
	$EMAIL = (string)isset($_POST['email'])?$_POST['email']:"";


	$db = myDb();
	mysqli_select_db($db,"ajax_demo");
	
	$query = 'SELECT email FROM USERS WHERE username=\''.$NICK.'\'';

	$result = $db->query($query);

	if( $result == FALSE )
		echo "Wystąpił błąd".$NICK;
	
	if( $row = mysqli_fetch_array( $result ) )
		$result = $row['email'];

	if( $result !== $EMAIL ){
		echo "WRONG EMAIL!";
	}
	else{
		$CODE = rand(100000, 999999);
		$TIMESTAMP = time() + (20*60);
		$q = 'INSERT INTO codes(username, code, timestamp ) VALUES (\''.$NICK.'\',\''.$CODE.'\',\''.$TIMESTAMP.'\')';

		$result = $db->query($q);

		if( $result == FALSE )
			echo "hehe";

		mail($EMAIL,'recovery code', $CODE );
		

		header("location: http://".$_SERVER['HTTP_HOST']."/kryptografia/recovery/checkForm.php");
	}


?>
