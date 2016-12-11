<?php
require_once("MyDatabase.php");
// function report($txt){
// 	$handle = fopen('log.txt', 'a');
// 	fwrite($handle, $txt ."\n");
// 	fclose($handle);
// }


$do = (isset($_POST['whatToDo'])?$_POST['whatToDo']:"");
$recipient = (isset($_POST['recipient'])?$_POST['recipient']:"");
$account_number = (isset($_POST['account_number'])?$_POST['account_number']:"");
$title = (isset($_POST['title'])?$_POST['title']:"");
$username = $_POST["username"];

$odp = array();


switch($do) {
	case('getState'):

		break;    	
	case('update'):
		$db = myDB();
		$q  = "SELECT recipient, account_number, title FROM history WHERE state=1 and username='".$username."'";
		$result = $db -> query($q);
		while ($row = $result->fetch_assoc()) {
			$odp[] = $row;
		}
		// report(sizeof($odp));

		$db->close();
		break;
	case('updateAdmin'):
		$db = myDB();
		$q  = "SELECT username, recipient, account_number, title FROM history WHERE state=0";
		$result = $db -> query($q);
		while ($row = $result->fetch_assoc()) {
			$odp[] = $row;
		}
		$temp = count($odp);
		// report(sizeof($odp));

		$db->close();
		break;
	case('accept'):
		$db = myDB();
		$q = "UPDATE history SET state=1 WHERE username='".$username."' and recipient='".$recipient."' and title='".$title."'";
		$result = $db -> query($q);

	break;
}
//report(json_encode($odp));
echo json_encode($odp);
		// header("location: "+$temp);
?>