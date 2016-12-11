<?php
/*.
    require_module 'standard';
    require_module 'mysqli';
.*/

/**
* @return mixed
*/

function myDb() {
	$mysqli = new mysqli('localhost', 'root', '', 'Kryptografia');
	if ($mysqli->connect_errno) {
		echo "Wystąpił błąd : " . $mysqli->connect_errno . "\n";
		echo "Błąd: " . $mysqli->connect_error . "\n";
		return false;
	} else {
		$mysqli->set_charset("utf8");
		return $mysqli;
	}
}

/**
* @param mysqli $sqli
* @param string $q query typu select
* @return string[int]
*/

function myDbSelect($mysqli, $q){
    /*. string[int] .*/ $rows   = array();
	$result = $mysqli -> query($q);
	if (!$result) {
		echo "Blad pytania: " . $q . "<br>\n";  //Nie w kodzie produkcyjnym
		echo "Numer bledu : " . $mysqli->errno . "<br>\n";
		echo "Blad: " . $mysqli->error . "\n";			
	} else {
		while ($row = $result->fetch_assoc()) {
				$rows[] = $row;
		}
	}
	return $rows;
}

?>