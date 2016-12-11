function getCookie(name)
{
	var re = new RegExp(name + "=([^;]+)");
	var value = re.exec(document.cookie);
	return (value != null) ? unescape(value[1]) : null;
}


var jestZajety = false;
var stan = 0;
var lastStan = -1;

//zwaraca status chatu
function getStateOfChat() {
		$.ajax({
			type: "POST",
			url: "History.php",
			data: {'whatToDo': 'getState'},
			dataType: "json",	
			success : function(data) {
				stan = data.stan;
				if( stan == lastStan )
					jestZajety = true;
				else 
					jestZajety = false;
				lastStan = stan;
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
					out+= arr[i].myDate;
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

//wysyłamy komunikat
function sendChat(msg, nick) { 
	$.ajax({
		type    : "POST",
		url     : "myChat.php",
		data    : {'whatToDo': 'send', 'msg': msg, 'NICK': nick},
		dataType: "json",
		success : function(data){
			// console.log(data);
		},
		error : function (jqXHR, textStatus, errorThrown){
			console.log(jqXHR);
		}
	});
}



function Chat () {
    this.update   = updateChat;
    this.send     = sendChat;
    this.getState = getStateOfChat;
}

