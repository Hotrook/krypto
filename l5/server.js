var https = require('https');
var fs = require('fs');
var tls = require('tls');

// require('ssl-root-cas').inject();
// require('ssl-root-cas').addFile('/Users/sebastianmroz/Desktop/CODING/InfaPWR/3rok/krypto/l5/z1.1/CAert.crt');

var express = require('express');

var options = {
    key: fs.readFileSync('/Users/sebastianmroz/Desktop/CODING/InfaPWR/3rok/krypto/l5/z1.1/privkeyA.pem'),
    cert: fs.readFileSync('/Users/sebastianmroz/Desktop/CODING/InfaPWR/3rok/krypto/l5/z1.1/certA.crt'),
};


var app = express();
const PORT = 3000;

function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

var server = https.createServer(options, (req, res) => {
	  res.writeHead(200);
	  res.end('hello world\n');
	}).listen(PORT, function(){
    console.log("Server listening on: https://localhost:%s", PORT);
});
