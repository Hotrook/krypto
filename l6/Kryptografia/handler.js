function dosth() {
	var recipient = document.getElementById("recipient").value;
	var account_number = document.getElementById("account_number").value;
	var title = document.getElementById("title").value;
	document.cookie ="ACCOUNT_NUMBER="+account_number;
	document.cookie ="RECIPIENT="+recipient;
	document.cookie ="TITLE="+title;
	console.log( account_number );
	console.log( recipient );
	console.log( title );
	location.href = "./confirmation.php";
};




function send(){
		var username = getCookie("NICK");
		var recipient = getCookie("RECIPIENT");
		var account_number = getCookie("ACCOUNT_NUMBER");
		var title = getCookie("TITLE");
		$.ajax({
			type    : "POST",
			url     : "New.php?" + new Date().getTime(),
			data    : {'username': username,'recipient': recipient, 'account_number': account_number, 'title': title },
			dataType: "json",
			success : function() {
				location.href = "./MainPage.php";

			},
			error : function (jqXHR, textStatus, errorThrown){
				console.log("Bład po SELECT: " + textStatus + " ; " + errorThrown + ";");
				console.log(errorThrown);
				console.log(textStatus);
				console.log(jqXHR);
			}
		});
}




//Updates the chat
function updateChat(nick) {
		$.ajax({
			type    : "POST",
			url     : "History.php?" + new Date().getTime(),
			data    : {'whatToDo': 'update', 'username': nick },
			dataType: "json",
			success : function(data) {
				var arr = data;
				var i;
				var out = "<h2 id='cos'>Historia przelewów</h2><table class=\"table table-condensed\">";
				out += "<thead><tr><th>Odbiorca</th><th>Numer konta</th><th>Data</th></tr></thead><tbody>"
				
				for(i = 0; i < arr.length; i++) {
					out += "<tr>";
					out+= "<td>"; 
					out+= arr[i].recipient +
					"</td><td>" +
					arr[i].account_number +
					"</td><td>"; 
					out+= arr[i].title;
					out+= "</td></tr>";
				}
				out += "</tbody></table>";
				$('#history').html(out);	

			},
			error : function (jqXHR, textStatus, errorThrown){
				console.log("Bład po SELECT: " + textStatus + " ; " + errorThrown + ";");
				console.log(jqXHR);
			}
		});

}


function updateAdmin(nick) {
		$.ajax({
			type    : "POST",
			url     : "History.php?" + new Date().getTime(),
			data    : {'whatToDo': 'updateAdmin', 'username': nick },
			dataType: "json",
			success : function(data) {
				var arr = data;
				console.log(arr);
				var i;
				var out = "<h2 id='cos'>Historia przelewów</h2><table class=\"table table-condensed\">";
				out += "<thead><tr><th>Nadawca</th><th>Odbiorca</th><th>Numer konta</th><th>Tytuł</th></tr></thead><tbody>"
				
				for(i = 0; i < arr.length; i++) {
					out += "<tr>";
					out+= "<td>"; 
					out+= arr[i].username; 
					out+="</td><td>"
					out+= arr[i].recipient +
					"</td><td>" +
					arr[i].account_number +
					"</td><td>"; 
					out+= arr[i].title;
					out+= "</td><td>";
					out+= "<div id=\"chbox\" class=\"checkbox\"><label><input id=\"original\" type=\"checkbox\" value=\"\"></label></div></td></tr>"
				}
				out += "</tbody></table>";
					out+="  <button onclick=\"admin()\" class=\"btn btn-primary\" id=\"input\">Zatwierdź</button>"
				$('#history').html(out);	

			},
			error : function (jqXHR, textStatus, errorThrown){
				console.log("Bład po SELECT: " + textStatus + " ; " + errorThrown + ";");
				console.log(jqXHR);
			}
		});

}



function getCookie(name)
{
	var re = new RegExp(name + "=([^;]+)");
	var value = re.exec(document.cookie);
	return (value != null) ? unescape(value[1]) : null;
}


function admin(){
	var elem = document.getElementsByTagName('tr');
		console.log( elem);
	for ( var i = 1 ; i < elem.length  ; i++ ){
		console.log( elem[ i ] );
		var temp = elem[i].childNodes[4].childNodes[ 0 ].childNodes[ 0 ].childNodes[ 0 ];
		if( temp.checked ){

			var username =  elem[ i ].childNodes[ 0 ].textContent;
			var recipient =  elem[ i ].childNodes[ 1 ].textContent;
			var account_number =  elem[ i ].childNodes[ 2 ].textContent;
			var title =  elem[ i ].childNodes[ 3 ].textContent;
			console.log( username,recipient,account_number,title);
			$.ajax({
				type    : "POST",
				url     : "History.php?" + new Date().getTime(),
				data    : {'whatToDo': 'accept', 'username': username,'recipient': recipient, 'account_number': account_number, 'title': title },
				dataType: "json",
				success : function() {
					location.href = "./AdminPage.php";

				},
				error : function (jqXHR, textStatus, errorThrown){
					console.log("Bład po SELECT: " + textStatus + " ; " + errorThrown + ";");
					console.log(jqXHR);
				}
			});
		}
	}


}