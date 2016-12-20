<?php
	require("../MyDatabase.php");
	require("../Hash.php");

	$NICK = (string)isset($_POST['NICK'])?$_POST['NICK']:"";
	$TYPE = (string)isset($_POST['TYPE'])?$_POST['TYPE']:"";


	$db = myDb();
	mysqli_select_db($db,"ajax_demo");
	
	if( $TYPE == "questions"){
		$query = 'SELECT question1, question2 FROM USERS WHERE username=\''.$NICK.'\'';

		$result = mysqli_query($db,$query);

		if( $result == FALSE )
			echo "Wystąpił błąd".$NICK;
		
		if( $row = mysqli_fetch_array( $result ) )
			$a = array("question1"=>$row['question1'] , "question2"=> $row["question2"]);

		echo json_encode($a);
	}
	else if( $TYPE == ""){
		$ANSWER1 = (string)$_POST['ANSWER1'];
		$ANSWER1 = (string)$_POST['ANSWER2'];

		$query = 'SELECT answer1, answer2 FROM USERS WHERE username=\''.$NICK.'\'';

		$result = mysqli_query($db,$query);

		if( $result == FALSE )
			echo "Wystąpił błąd".$NICK;
		
		if( $row = mysqli_fetch_array( $result ) )
			$a = array("answer1"=>$row['answer1'] , "answer2"=> $row["answer2"]);

		$SALT = substr( $a['answer1'], 16, 16 );
		$answer1_hashed = Hash::hashFunctionWithSalt($ANSWER1, $SALT);
		$SALT = substr( $a['answer2'], 16, 16 );
		$answer2_hashed = Hash::hashFunctionWithSalt($ANSWER2, $SALT);

		if( $answer1_hashed1 == $a['answer1'] && 
			$answer2_hashed1 == $a['answer2'] ){
			header("location: http://".$_SERVER['HTTP_HOST']."/kryptografia/recovery/recoveryPass.php");
		}
		else{
			echo "INCORRECT ANSWERS!!!";
		}

	}
?>
