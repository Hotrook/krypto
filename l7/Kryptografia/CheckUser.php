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
	if(isset($_POST['g-recaptcha-response'] ) ){
		$CAPTCHA = $_POST['g-recaptcha-response'];

		$secret = "6LcXQw8UAAAAAEQAS2wHvPoGt76DTHnfiSctdQH6";
		$ip = $_SERVER['REMOTE_ADDR'];
		$response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secret."&response=".$CAPTCHA."&remoteip=".$ip);
		$responseKeys = json_decode($response, true );

		if( intval( $responseKeys["success"]) !== 1 ){
			echo '<h2>You are spammer ! Get the @$%K out</h2>';
		}
		else{
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
				if( $NICK != 'admin')
					header("location: http://" . $_SERVER['HTTP_HOST'] . "/kryptografia/MainPage.php?");
				else{
					header("location: http://" .$_SERVER["HTTP_HOST"] . "/kryptografia/AdminPage.php?");
				}
				exit;
			}
			else{
				header("location: http://" . $_SERVER['HTTP_HOST'] ."/kryptografia/index.html");
			}
		}
	}	
	else{
		echo "Somehting is wrong.";
	}	
?>
