<?php
  $NICK = (isset($_COOKIE['NICK'])?$_COOKIE['NICK']:"gość");
  $RECIPIENT = $_COOKIE['RECIPIENT'];
  $ACCOUNT_NUMBER = $_COOKIE['ACCOUNT_NUMBER'];
  $DATE = $_COOKIE['DATE'];
?>

<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="utf-8"/>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

<script src="js/jquery-1.12.3.min.js"></script>
<script src="./mychat.js"></script>
<script src="./handler.js"></script>
<script src="./malicious.js"></script>

<script>
var nick = getCookie("NICK");
if (nick == null){
	nick = "gość";
	alert("Wejście na stronę bez nick'a");
}

</script>
<link rel="stylesheet" type="text/css" href="css/MainPage.css">

</head>

<body>
<nav class="navbar navbar-inverse navbar-fixed-top">
	<div class="container">
		<div class="navbar-header">

	        <a class="navbar-brand" href="#">Witaj, <?php echo $NICK;?></a>
		</div>

		<div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a href="/omnie.html">Wyloguj</a></li>
            <li><a href="./MainPage.php">Anuluj</a></li>
          </ul>
        </div>
    </div>
</nav>

<div class="jumbotron">
	<div id="header">
		<h1 id='header-text'>
			Strona Sebastiana
		</h1>
		<p id="qoute">
			"Jest przepiękna i cudowna." ~ Paulo Coelho 
		</p>
	</div>
</div>   


<div class="container">
<form>
  <div class="form-group">
    <label for="recipient">Nazwa odbiorcy:</label> <p id="recipient"><?php echo $RECIPIENT;?></p>
  </div>
  <div class="form-group">
    <label for="account_number">Numer konta:</label><p id="account_number"><?php echo $ACCOUNT_NUMBER;?></p>
  </div>
   <div class="form-group">
    <label for="date">Data:</label><p id="date"><?php echo $DATE;?></p>
  </div>
  <button onclick="send()" class="btn btn-primary" id="input2">Potwierdzam</button>
</form>
</div>



</body>
</html>
