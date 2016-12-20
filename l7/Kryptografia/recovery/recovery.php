<!DOCTYPE html>

<html>
<head>
	<meta charset="utf-8">
	<!-- <link rel="stylesheet"  href="bootstrap/css/bootstrap.min.css"> -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<!-- <link rel="stylesheet"  href="bootstrap/css/bootstrap-theme.css"> -->
	<link rel="stylesheet" type="text/css" href="../css/style.css">
	<script src="../handler.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

	<script>

		function emailChange(){
			var id = document.getElementById("email_verification");
			var id2 = document.getElementById("question_verification");
			id.style.visibility = "visible";
			id2.style.visibility = "hidden";
		}
		function questionChange(){
			var id2 = document.getElementById("email_verification");
			var id = document.getElementById("question_verification");
			id.style.visibility = "visible";
			id2.style.visibility = "hidden";
			setQuestions();
		}
		function saveCookie(){
			var id = document.getElementById("username");
			document.cookie ="NICK="+id.value;
		}
		function setQuestions(){
		    var username = getCookie("NICK");
		    console.log(username);
			$.ajax({
				type    : "POST",
				url     : "questions.php",
				data    : {'NICK': username , "TYPE": "questions"},
				dataType: "json",
				success : function(data) {
					$("#question1").html(data.question1);
					$("#question2").html(data.question2);
				},
				error : function (jqXHR, textStatus, errorThrown){
					console.warn(jqXHR.responseText)
					console.log("Bład po SELECT: " + textStatus + " ; " + errorThrown + ";");
				}
			});
		}
	</script>

</head>
<body>

	<div id="logowanie" class="panel panel-primary">
		<div class="panel-heading">
			<h3 class="panel-title">Wybierz metodę przywrócenia hasła.</h3>
		</div>
		<div class="button">
			<span>Twój NICK: 	  </span> <br> <input id="username" type="text" name="NICK" ><br>
			<input  type="submit" class="button" value="Potwierdzam" onclick="saveCookie()">
		</div>
		<br/>
		<div class="button"><button onclick="emailChange()" type="button">Wyślij do mnie email</button></div>
			<form id="email_verification" method="post" action="./email.php">
				<span>Twój email:     </span> <br> <input type="text" name="email" > <br><br>
				<input  type="submit" class="button" value="Potwierdzam">
				<br/>
			</form>
		<div class="button"><button onclick="questionChange()" type="button">Weryfikacja poprzez pytania zabezpieczające</button></div>
			<form id="question_verification" method="post" action="./questions.php">
				<span id="question1"></span> <br> <input type="text" name="ANSWER1" ><br>
				<span id="question2"></span> <br> <input type="text" name="ANSWER2" > <br><br>
				<input  type="submit" class="button" value="Potwierdzam">
				<br/>
			</form>

	</div>


</body>
</html>