var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sat, 10 Dec 2016 19:38:15 GMT\x0aServer: Apache/2.4.23 (Unix) OpenSSL/1.0.2j PHP/5.6.28 mod_perl/2.0.8-dev Perl/v5.16.3\x0aX-Powered-By: PHP/5.6.28\x0aContent-Range: bytes 0-1554/1555\x0aContent-Length: 1555\x0aKeep-Alive: timeout=5, max=84\x0aConnection: Keep-Alive\x0aContent-Type: text/html; charset=UTF-8\x0a\x0ago\xc5\x9b\xc4\x87\x0a\x3c!DOCTYPE html\x3e\x0a\x3chtml lang=\x22pl\x22\x3e\x0a\x3chead\x3e\x0a\x3cmeta charset=\x22utf-8\x22/\x3e\x0a\x3clink rel=\x22stylesheet\x22 href=\x22https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\x22 integrity=\x22sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7\x22 crossorigin=\x22anonymous\x22\x3e\x0a\x0a\x3cscript src=\x22js/jquery-1.12.3.min.js\x22\x3e\x3c/script\x3e\x0a\x3cscript src=\x22./mychat.js\x22\x3e\x3c/script\x3e\x0a\x3cscript src=\x22./handler.js\x22\x3e\x3c/script\x3e\x0a\x0a\x3cscript\x3e\x0avar nick = getCookie(\x22NICK\x22);\x0aif (nick == null){\x0a\x09nick = \x22go\xc5\x9b\xc4\x87\x22;\x0a\x09alert(\x22Wej\xc5\x9bcie na stron\xc4\x99 bez nick\x27a\x22);\x0a}\x0avar timer; //to sie mo\xc5\xbce przyda\xc4\x87 do wy\xc5\x82\xc4\x85cznenia chata\x0a\x0a$.ajaxSetup({ cache: false });\x0a\x0a$(document).ready(function() {   \x09\x0a\x09$(\x22#NICK\x22).html(nick);\x0a\x0a\x0a\x09updateAdmin(nick);\x0a\x09// timer = setInterval(function(){ updateChat(nick); }, 200000);\x0a});\x0a\x3c/script\x3e\x0a\x3clink rel=\x22stylesheet\x22 type=\x22text/css\x22 href=\x22css/MainPage.css\x22\x3e\x0a\x0a\x3c/head\x3e\x0a\x0a\x3cbody\x3e\x0a\x3cnav class=\x22navbar navbar-inverse navbar-fixed-top\x22\x3e\x0a\x09\x3cdiv class=\x22container\x22\x3e\x0a\x09\x09\x3cdiv class=\x22navbar-header\x22\x3e\x0a\x09        \x3ca class=\x22navbar-brand\x22 href=\x22#\x22\x3eWitaj, go\xc5\x9b\xc4\x87\x3c/a\x3e\x0a\x09\x09\x3c/div\x3e\x0a\x0a\x09\x09\x3cdiv id=\x22navbar\x22 class=\x22navbar-collapse collapse\x22\x3e\x0a          \x3cul class=\x22nav navbar-nav\x22\x3e\x0a            \x3cli\x3e\x3ca href=\x22./index.html\x22\x3eWyloguj\x3c/a\x3e\x3c/li\x3e\x0a            \x3cli\x3e\x3ca href=\x22./transfer.php\x22\x3eWykonaj nowy przelew\x3c/a\x3e\x3c/li\x3e\x0a          \x3c/ul\x3e\x0a        \x3c/div\x3e\x0a    \x3c/div\x3e\x0a\x3c/nav\x3e\x0a\x0a\x3cdiv class=\x22jumbotron\x22\x3e\x0a\x09\x3cdiv id=\x22header\x22\x3e\x0a\x09\x09\x3ch1 id=\x27header-text\x27\x3e\x0a\x09\x09\x09Strona Banku\x0a\x09\x09\x3c/h1\x3e\x0a\x09\x09\x3cp id=\x22qoute\x22\x3e\x0a\x09\x09\x09\x3c!-- \x22Jest przepi\xc4\x99kna i cudowna.\x22 ~ Paulo Coelho  --\x3e\x0a\x09\x09\x3c/p\x3e\x0a\x09\x3c/div\x3e\x0a\x3c/div\x3e \x0a\x0a\x0a\x3cdiv class=\x22container\x22 id=\x22history\x22\x3e\x0a\x3c/div\x3e\x0a\x0a\x0a\x3c/body\x3e\x0a\x3c/html\x3e\x0ay\x3e\x0a\x3c/ht0\x06'}