var https = require('https');
var fs = require('fs');
var tls = require('tls');
var url = require('url');


// require('ssl-root-cas').inject();
// require('ssl-root-cas').addFile('/Users/sebastianmroz/Desktop/CODING/InfaPWR/3rok/krypto/l5/z1.1/CAert.crt');

var express = require('express');

var options = {
    key: fs.readFileSync('/Users/sebastianmroz/Desktop/CODING/InfaPWR/3rok/krypto/l5/z1.1/privkeyA1.pem'),
    cert: fs.readFileSync('/Users/sebastianmroz/Desktop/CODING/InfaPWR/3rok/krypto/l5/z1.1/certA1.crt'),
};


var app = express();
const PORT = 3000;

function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

var server = https.createServer(options, (request, response) => {
var pathname = url.parse(request.url).pathname;
   
   // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");
   
   // Read the requested file content from file system
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else {	
         //Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
         
         // Write the content of the file to response body
         response.write(data.toString());		
      }
      // Send the response body 
      response.end();
   });   
	}).listen(PORT, function(){
    console.log("Server listening on: https://localhost:%s", PORT);
});
