var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sat, 10 Dec 2016 19:28:15 GMT\x0aServer: Apache/2.4.23 (Unix) OpenSSL/1.0.2j PHP/5.6.28 mod_perl/2.0.8-dev Perl/v5.16.3\x0aLast-Modified: Fri, 09 Dec 2016 16:24:39 GMT\x0aETag: \x22d0d-5433c30c6ffc0\x22\x0aAccept-Ranges: bytes\x0aContent-Length: 3341\x0aContent-Range: bytes 0-3340/3341\x0aKeep-Alive: timeout=5, max=24\x0aConnection: Keep-Alive\x0aContent-Type: application/x-javascript\x0a\x0a// function getCookie(name)\x0d\x0a// {\x0d\x0a// \x09var re = new RegExp(name + \x22=([^;]+)\x22);\x0d\x0a// \x09var value = re.exec(document.cookie);\x0d\x0a// \x09return (value != null) ? unescape(value[1]) : null;\x0d\x0a// }\x0d\x0a\x0d\x0a\x0d\x0a// var jestZajety = false;\x0d\x0a// var stan = 0;\x0d\x0a// var lastStan = -1;\x0d\x0a\x0d\x0a// //zwaraca status chatu\x0d\x0a// function getStateOfChat() {\x0d\x0a// \x09\x09$.ajax({\x0d\x0a// \x09\x09\x09type: \x22POST\x22,\x0d\x0a// \x09\x09\x09url: \x22History.php\x22,\x0d\x0a// \x09\x09\x09data: {\x27whatToDo\x27: \x27getState\x27},\x0d\x0a// \x09\x09\x09dataType: \x22json\x22,\x09\x0d\x0a// \x09\x09\x09success : function(data) {\x0d\x0a// \x09\x09\x09\x09stan = data.stan;\x0d\x0a// \x09\x09\x09\x09if( stan == lastStan )\x0d\x0a// \x09\x09\x09\x09\x09jestZajety = true;\x0d\x0a// \x09\x09\x09\x09else \x0d\x0a// \x09\x09\x09\x09\x09jestZajety = false;\x0d\x0a// \x09\x09\x09\x09lastStan = stan;\x0d\x0a// \x09\x09\x09}\x0d\x0a\x0d\x0a// \x09\x09});\x0d\x0a// }\x0d\x0a\x0d\x0a// //Updates the chat\x0d\x0a// function updateChat(nick) {\x0d\x0a// \x09\x09$.ajax({\x0d\x0a// \x09\x09\x09type    : \x22POST\x22,\x0d\x0a// \x09\x09\x09url     : \x22History.php?\x22 + new Date().getTime(),\x0d\x0a// \x09\x09\x09data    : {\x27whatToDo\x27: \x27update\x27, \x27username\x27: nick },\x0d\x0a// \x09\x09\x09dataType: \x22json\x22,\x0d\x0a// \x09\x09\x09success : function(data) {\x0d\x0a// \x09\x09\x09\x09var arr = data;\x0d\x0a// \x09\x09\x09\x09var i;\x0d\x0a// \x09\x09\x09\x09var out = \x22\x3ch2 id=\x27cos\x27\x3eHistoria przelew\xc3\xb3w\x3c/h2\x3e\x3ctable class=\x5c\x22table table-condensed\x5c\x22\x3e\x22;\x0d\x0a// \x09\x09\x09\x09out += \x22\x3cthead\x3e\x3ctr\x3e\x3cth\x3eOdbiorca\x3c/th\x3e\x3cth\x3eNumer konta\x3c/th\x3e\x3cth\x3eData\x3c/th\x3e\x3c/tr\x3e\x3c/thead\x3e\x3ctbody\x3e\x22\x0d\x0a\x09\x09\x09\x09\x0d\x0a// \x09\x09\x09\x09for(i = 0; i \x3c arr.length; i++) {\x0d\x0a// \x09\x09\x09\x09\x09out += \x22\x3ctr\x3e\x22;\x0d\x0a// \x09\x09\x09\x09\x09out+= \x22\x3ctd\x3e\x22; \x0d\x0a// \x09\x09\x09\x09\x09out+= arr[i].recipient +\x0d\x0a// \x09\x09\x09\x09\x09\x22\x3c/td\x3e\x3ctd\x3e\x22 +\x0d\x0a// \x09\x09\x09\x09\x09arr[i].account_number +\x0d\x0a// \x09\x09\x09\x09\x09\x22\x3c/td\x3e\x3ctd\x3e\x22; \x0d\x0a// \x09\x09\x09\x09\x09out+= arr[i].title;\x0d\x0a// \x09\x09\x09\x09\x09out+= \x22\x3c/td\x3e\x3c/tr\x3e\x22;\x0d\x0a// \x09\x09\x09\x09}\x0d\x0a// \x09\x09\x09\x09out += \x22\x3c/tbody\x3e\x3c/table\x3e\x22;\x0d\x0a// \x09\x09\x09\x09$(\x27#history\x27).html(out);\x09\x0d\x0a\x0d\x0a// \x09\x09\x09},\x0d\x0a// \x09\x09\x09error : function (jqXHR, textStatus, errorThrown){\x0d\x0a// \x09\x09\x09\x09console.log(\x22B\xc5\x82ad po SELECT: \x22 + textStatus + \x22 ; \x22 + errorThrown + \x22;\x22);\x0d\x0a// \x09\x09\x09\x09console.log(jqXHR);\x0d\x0a// \x09\x09\x09}\x0d\x0a// \x09\x09});\x0d\x0a\x0d\x0a// }\x0d\x0a\x0d\x0a\x0d\x0a// function updateAdmin(nick) {\x0d\x0a// \x09\x09$.ajax({\x0d\x0a// \x09\x09\x09type    : \x22POST\x22,\x0d\x0a// \x09\x09\x09url     : \x22History.php?\x22 + new Date().getTime(),\x0d\x0a// \x09\x09\x09data    : {\x27whatToDo\x27: \x27updateAdmin\x27, \x27username\x27: nick },\x0d\x0a// \x09\x09\x09dataType: \x22json\x22,\x0d\x0a// \x09\x09\x09success : function(data) {\x0d\x0a// \x09\x09\x09\x09var arr = data;\x0d\x0a// \x09\x09\x09\x09console.log(arr);\x0d\x0a// \x09\x09\x09\x09var i;\x0d\x0a// \x09\x09\x09\x09var out = \x22\x3ch2 id=\x27cos\x27\x3eHistoria przelew\xc3\xb3w\x3c/h2\x3e\x3ctable class=\x5c\x22table table-condensed\x5c\x22\x3e\x22;\x0d\x0a// \x09\x09\x09\x09out += \x22\x3cthead\x3e\x3ctr\x3e\x3cth\x3eOdbiorca\x3c/th\x3e\x3cth\x3eNumer konta\x3c/th\x3e\x3cth\x3eData\x3c/th\x3e\x3c/tr\x3e\x3c/thead\x3e\x3ctbody\x3e\x22\x0d\x0a\x09\x09\x09\x09\x0d\x0a// \x09\x09\x09\x09for(i = 0; i \x3c arr.length; i++) {\x0d\x0a// \x09\x09\x09\x09\x09out += \x22\x3ctr\x3e\x22;\x0d\x0a// \x09\x09\x09\x09\x09out+= \x22\x3ctd\x3e\x22; \x0d\x0a// \x09\x09\x09\x09\x09out+= arr[i].recipient +\x0d\x0a// \x09\x09\x09\x09\x09\x22\x3c/td\x3e\x3ctd\x3e\x22 +\x0d\x0a// \x09\x09\x09\x09\x09arr[i].account_number +\x0d\x0a// \x09\x09\x09\x09\x09\x22\x3c/td\x3e\x3ctd\x3e\x22; \x0d\x0a// \x09\x09\x09\x09\x09out+= arr[i].title;\x0d\x0a// \x09\x09\x09\x09\x09out+= \x22\x3c/td\x3e\x3c/tr\x3e\x22;\x0d\x0a// \x09\x09\x09\x09}\x0d\x0a// \x09\x09\x09\x09out += \x22\x3c/tbody\x3e\x3c/table\x3e\x22;\x0d\x0a// \x09\x09\x09\x09$(\x27#history\x27).html(out);\x09\x0d\x0a\x0d\x0a// \x09\x09\x09},\x0d\x0a// \x09\x09\x09error : function (jqXHR, textStatus, errorThrown){\x0d\x0a// \x09\x09\x09\x09console.log(\x22B\xc5\x82ad po SELECT: \x22 + textStatus + \x22 ; \x22 + errorThrown + \x22;\x22);\x0d\x0a// \x09\x09\x09\x09console.log(jqXHR);\x0d\x0a// \x09\x09\x09}\x0d\x0a// \x09\x09});\x0d\x0a\x0d\x0a// }\x0d\x0a\x0d\x0a// //wysy\xc5\x82amy komunikat\x0d\x0a// function sendChat(msg, nick) { \x0d\x0a// \x09$.ajax({\x0d\x0a// \x09\x09type    : \x22POST\x22,\x0d\x0a// \x09\x09url     : \x22myChat.php\x22,\x0d\x0a// \x09\x09data    : {\x27whatToDo\x27: \x27send\x27, \x27msg\x27: msg, \x27NICK\x27: nick},\x0d\x0a// \x09\x09dataType: \x22json\x22,\x0d\x0a// \x09\x09success : function(data){\x0d\x0a// \x09\x09\x09// console.log(data);\x0d\x0a// \x09\x09},\x0d\x0a// \x09\x09error : function (jqXHR, textStatus, errorThrown){\x0d\x0a// \x09\x09\x09console.log(jqXHR);\x0d\x0a// \x09\x09}\x0d\x0a// \x09});\x0d\x0a// }\x0d\x0a\x0d\x0a\x0d\x0a\x0d\x0a// function Chat () {\x0d\x0a//     this.update   = updateChat;\x0d\x0a//     this.send     = sendChat;\x0d\x0a//     this.getState = getStateOfChat;\x0d\x0a// }\x0d\x0a\x0d\x0a {len!'}