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
			url: "myChat.php",
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
			url     : "myChat.php?" + new Date().getTime(),
			data    : {'whatToDo': 'update'},
			dataType: "json",
			success : function(data) {
				var arr = data;
				var i;
				var out = "<table>";

				getStateOfChat();
				if(!jestZajety){
					for(i = 0; i < arr.length; i++) {
						out += "<tr>";
						if (nick == arr[i].NICK){
							out+= "<td class='thisIsMe'>"; 
						} else {
							out+= "<td class='thisIsFiend'>";
						}
						out+= arr[i].NICK +
						"</td><td>" +
						arr[i].time +
						"</td><td class='msg'>"; 
						if (i==0){ 
							out+= "<strong>" + arr[i].msg + "</strong>";
						} else {
							out+= arr[i].msg;
						}
						out+= "</td></tr>";
					}
					out += "</table>";
					$('#chat').html(out);	
				}			

			},
			error : function (jqXHR, textStatus, errorThrown){
				console.log("Bład po SELECT: " + textStatus + " ; " + errorThrown + ";");
				console.log(jqXHR);
			}
		});

}



function Chat () {
    this.update   = updateChat;
    this.send     = sendChat;
    this.getState = getStateOfChat;
}
$(document).ready(function(){
	$("#input").click(function(){
		console.log( "dzialam!!!!!!");
		alert("czesc sebastian");
	});
});