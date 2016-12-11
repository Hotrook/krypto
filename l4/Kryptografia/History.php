<?php
require_once("MyDatabase.php");
// function report($txt){
// 	$handle = fopen('log.txt', 'a');
// 	fwrite($handle, $txt ."\n");
// 	fclose($handle);
// }


$do = (isset($_POST['whatToDo'])?$_POST['whatToDo']:"");
$username = $_POST["username"];
$odp = array();


switch($do) {
	case('getState'):

		break;    	
	case('update'):
		$db = myDB();
		$q  = "SELECT recipient, account_number, myDate FROM history WHERE username='".$username."'";
		$result = $db -> query($q);
		while ($row = $result->fetch_assoc()) {
			$odp[] = $row;
		}
		// report(sizeof($odp));

		$db->close();
		break;
	case('send'):
		// //report("INSERT query");
		// $nick = $_POST['NICK'];
		// $msg  = strip_tags($_POST['msg']);
		// $db   = myDB();
		// $q    = "INSERT INTO mychat(NICK,msg) VALUES(?,?)";
		// $stmt = $db->prepare($q);
		// $stmt-> (bind_param)("ss", $nick, $msg);
		// if ($stmt -> execute()){
		// 	//report("INSERT OK");
		// } else{
		// 	//report("INSERT BŁAD");
		// };
		// $db->close();
		$odp['stan'] = "1";
		break;
}
//report(json_encode($odp));
echo json_encode($odp);
?>