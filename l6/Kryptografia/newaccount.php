<!DOCTYPE html>

<html>
<head>
	<meta charset="utf-8">
	<!-- <link rel="stylesheet"  href="bootstrap/css/bootstrap.min.css"> -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<!-- <link rel="stylesheet"  href="bootstrap/css/bootstrap-theme.css"> -->
	<link rel="stylesheet" type="text/css" href="css/style.css">

</head>
<body>

	<div id="logowanie" class="panel panel-primary">
		<div class="panel-heading">
			<h3 class="panel-title">Zarejestruj się</h3>
		</div>
		<form method="post" action="./AddUser.php">
			<span>Podaj NICK: </span> <br> <input type="text"     name="NICK"><br>
			<span>Podaj hasło:     </span> <br><input  type="password" name="pass" size="20" maxlength="20"> <br><br>
			<input type="submit"  class="button" value="Zarejestruj się">
		</form>

	</div>


</body>
</html>