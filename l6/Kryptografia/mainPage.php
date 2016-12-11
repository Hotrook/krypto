<?php
  $NICK = (isset($_COOKIE['NICK'])?$_COOKIE['NICK']:"gość");
  echo $NICK;
?>

<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="utf-8"/>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

<script src="js/jquery-1.12.3.min.js"></script>
<script src="./handler.js"></script>

<script>
var nick = getCookie("NICK");
if (nick == null){
	nick = "gość";
	alert("Wejście na stronę bez nick'a");
}
var timer; //to sie może przydać do wyłącznenia chata

$.ajaxSetup({ cache: false });

$(document).ready(function() {   	
	$("#NICK").html(nick);


	updateChat(nick);
	// timer = setInterval(function(){ updateChat(nick); }, 200000);
});
</script>
<link rel="stylesheet" type="text/css" href="css/MainPage.css">

<!-- <script src="./malicious.js"></script> -->
</head>

<body>
<nav class="navbar navbar-inverse navbar-fixed-top">
	<div class="container">
		<div class="navbar-header">
	        <a class="navbar-brand" href="#">Witaj, <?php echo $NICK;?></a>
		</div>

		<div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a href="./index.html">Wyloguj</a></li>
            <li><a href="./transfer.php">Wykonaj nowy przelew</a></li>
          </ul>
        </div>
    </div>
</nav>

<div class="jumbotron">
	<div id="header">
		<h1 id='header-text'>
			Strona Banku
		</h1>
		<p id="qoute">
			<!-- "Jest przepiękna i cudowna." ~ Paulo Coelho  -->
		</p>
	</div>
</div> 
<a href="./CheatSite.html">Przeczytaj nasz nowy regulamin. Teraz.</a>

<div class="container" id="history">
</div>


</body>
</html>
