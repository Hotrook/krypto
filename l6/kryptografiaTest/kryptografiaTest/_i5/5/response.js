var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sat, 10 Dec 2016 19:27:54 GMT\x0aServer: Apache/2.4.23 (Unix) OpenSSL/1.0.2j PHP/5.6.28 mod_perl/2.0.8-dev Perl/v5.16.3\x0aLast-Modified: Sat, 19 Nov 2016 11:20:04 GMT\x0aETag: \x22767-541a59aad2100\x22\x0aAccept-Ranges: bytes\x0aContent-Length: 1895\x0aContent-Range: bytes 0-1894/1895\x0aKeep-Alive: timeout=5, max=76\x0aConnection: Keep-Alive\x0aContent-Type: application/x-javascript\x0a\x0afunction getCookie(name)\x0d\x0a{\x0d\x0a\x09var re = new RegExp(name + \x22=([^;]+)\x22);\x0d\x0a\x09var value = re.exec(document.cookie);\x0d\x0a\x09return (value != null) ? unescape(value[1]) : null;\x0d\x0a}\x0d\x0a\x0d\x0a\x0d\x0avar jestZajety = false;\x0d\x0avar stan = 0;\x0d\x0avar lastStan = -1;\x0d\x0a\x0d\x0a//zwaraca status chatu\x0d\x0afunction getStateOfChat() {\x0d\x0a\x09\x09$.ajax({\x0d\x0a\x09\x09\x09type: \x22POST\x22,\x0d\x0a\x09\x09\x09url: \x22myChat.php\x22,\x0d\x0a\x09\x09\x09data: {\x27whatToDo\x27: \x27getState\x27},\x0d\x0a\x09\x09\x09dataType: \x22json\x22,\x09\x0d\x0a\x09\x09\x09success : function(data) {\x0d\x0a\x09\x09\x09\x09stan = data.stan;\x0d\x0a\x09\x09\x09\x09if( stan == lastStan )\x0d\x0a\x09\x09\x09\x09\x09jestZajety = true;\x0d\x0a\x09\x09\x09\x09else \x0d\x0a\x09\x09\x09\x09\x09jestZajety = false;\x0d\x0a\x09\x09\x09\x09lastStan = stan;\x0d\x0a\x09\x09\x09}\x0d\x0a\x0d\x0a\x09\x09});\x0d\x0a}\x0d\x0a\x0d\x0a//Updates the chat\x0d\x0afunction updateChat(nick) {\x0d\x0a\x09\x09$.ajax({\x0d\x0a\x09\x09\x09type    : \x22POST\x22,\x0d\x0a\x09\x09\x09url     : \x22myChat.php?\x22 + new Date().getTime(),\x0d\x0a\x09\x09\x09data    : {\x27whatToDo\x27: \x27update\x27},\x0d\x0a\x09\x09\x09dataType: \x22json\x22,\x0d\x0a\x09\x09\x09success : function(data) {\x0d\x0a\x09\x09\x09\x09var arr = data;\x0d\x0a\x09\x09\x09\x09var i;\x0d\x0a\x09\x09\x09\x09var out = \x22\x3ctable\x3e\x22;\x0d\x0a\x0d\x0a\x09\x09\x09\x09getStateOfChat();\x0d\x0a\x09\x09\x09\x09if(!jestZajety){\x0d\x0a\x09\x09\x09\x09\x09for(i = 0; i \x3c arr.length; i++) {\x0d\x0a\x09\x09\x09\x09\x09\x09out += \x22\x3ctr\x3e\x22;\x0d\x0a\x09\x09\x09\x09\x09\x09if (nick == arr[i].NICK){\x0d\x0a\x09\x09\x09\x09\x09\x09\x09out+= \x22\x3ctd class=\x27thisIsMe\x27\x3e\x22; \x0d\x0a\x09\x09\x09\x09\x09\x09} else {\x0d\x0a\x09\x09\x09\x09\x09\x09\x09out+= \x22\x3ctd class=\x27thisIsFiend\x27\x3e\x22;\x0d\x0a\x09\x09\x09\x09\x09\x09}\x0d\x0a\x09\x09\x09\x09\x09\x09out+= arr[i].NICK +\x0d\x0a\x09\x09\x09\x09\x09\x09\x22\x3c/td\x3e\x3ctd\x3e\x22 +\x0d\x0a\x09\x09\x09\x09\x09\x09arr[i].time +\x0d\x0a\x09\x09\x09\x09\x09\x09\x22\x3c/td\x3e\x3ctd class=\x27msg\x27\x3e\x22; \x0d\x0a\x09\x09\x09\x09\x09\x09if (i==0){ \x0d\x0a\x09\x09\x09\x09\x09\x09\x09out+= \x22\x3cstrong\x3e\x22 + arr[i].msg + \x22\x3c/strong\x3e\x22;\x0d\x0a\x09\x09\x09\x09\x09\x09} else {\x0d\x0a\x09\x09\x09\x09\x09\x09\x09out+= arr[i].msg;\x0d\x0a\x09\x09\x09\x09\x09\x09}\x0d\x0a\x09\x09\x09\x09\x09\x09out+= \x22\x3c/td\x3e\x3c/tr\x3e\x22;\x0d\x0a\x09\x09\x09\x09\x09}\x0d\x0a\x09\x09\x09\x09\x09out += \x22\x3c/table\x3e\x22;\x0d\x0a\x09\x09\x09\x09\x09$(\x27#chat\x27).html(out);\x09\x0d\x0a\x09\x09\x09\x09}\x09\x09\x09\x0d\x0a\x0d\x0a\x09\x09\x09},\x0d\x0a\x09\x09\x09error : function (jqXHR, textStatus, errorThrown){\x0d\x0a\x09\x09\x09\x09console.log(\x22B\xc5\x82ad po SELECT: \x22 + textStatus + \x22 ; \x22 + errorThrown + \x22;\x22);\x0d\x0a\x09\x09\x09\x09console.log(jqXHR);\x0d\x0a\x09\x09\x09}\x0d\x0a\x09\x09});\x0d\x0a\x0d\x0a}\x0d\x0a\x0d\x0a\x0d\x0a\x0d\x0afunction Chat () {\x0d\x0a    this.update   = updateChat;\x0d\x0a    this.send     = sendChat;\x0d\x0a    this.getState = getStateOfChat;\x0d\x0a}\x0d\x0a$(document).ready(function(){\x0d\x0a\x09$(\x22#input\x22).click(function(){\x0d\x0a\x09\x09console.log( \x22dzialam!!!!!!\x22);\x0d\x0a\x09\x09alert(\x22czesc sebastian\x22);\x0d\x0a\x09});\x0d\x0a});'}