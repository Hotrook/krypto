function dosth() {
	var recipient = document.getElementById("recipient").value;
	var account_number = document.getElementById("account_number").value;
	var date = document.getElementById("date").value;
	document.cookie ="ACCOUNT_NUMBER="+account_number;
	document.cookie ="RECIPIENT="+recipient;
	document.cookie ="DATE="+date;
	location.href = "./confirmation.php";
};


function send(){
		var username = getCookie("NICK");
		var recipient = getCookie("RECIPIENT");
		var account_number = getCookie("ACCOUNT_NUMBER");
		var date = getCookie("DATE");
		$.ajax({
			type    : "POST",
			url     : "New.php?" + new Date().getTime(),
			data    : {'username': username,'recipient': recipient, 'account_number': account_number, 'date': date },
			dataType: "json",
			success : function() {
				location.href = "./MainPage.php";

			},
			error : function (jqXHR, textStatus, errorThrown){
				console.log("Bład po SELECT: " + textStatus + " ; " + errorThrown + ";");
				console.log(jqXHR);
			}
		});
}

