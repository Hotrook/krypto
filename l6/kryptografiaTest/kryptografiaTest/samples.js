var mime_samples = [
  { 'mime': 'application/javascript', 'samples': [
    { 'url': 'http://10.0.2.2/kryptografia/js/handlers.js', 'dir': '_m0/0', 'linked': 5, 'len': 650 },
    { 'url': 'http://10.0.2.2/kryptografia/js/mychat.js', 'dir': '_m0/1', 'linked': 2, 'len': 1895 },
    { 'url': 'http://10.0.2.2/kryptografia/handler.js', 'dir': '_m0/2', 'linked': 2, 'len': 4568 } ]
  },
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://10.0.2.2/kryptografia/', 'dir': '_m1/0', 'linked': 5, 'len': 1058 },
    { 'url': 'http://10.0.2.2/kryptografia/0/', 'dir': '_m1/1', 'linked': 0, 'len': 332 },
    { 'url': 'http://10.0.2.2/kryptografia/css/', 'dir': '_m1/2', 'linked': 2, 'len': 1131 },
    { 'url': 'http://10.0.2.2/kryptografia/img/', 'dir': '_m1/3', 'linked': 2, 'len': 930 },
    { 'url': 'http://10.0.2.2/kryptografia/img/Chat-background.jpg.7z/', 'dir': '_m1/4', 'linked': 0, 'len': 1147 },
    { 'url': 'http://10.0.2.2/kryptografia/js/', 'dir': '_m1/5', 'linked': 5, 'len': 1358 },
    { 'url': 'http://10.0.2.2/kryptografia/.htaccess', 'dir': '_m1/6', 'linked': 0, 'len': 350 },
    { 'url': 'http://10.0.2.2/kryptografia/AdminPage.php', 'dir': '_m1/7', 'linked': 2, 'len': 1555 },
    { 'url': 'http://10.0.2.2/kryptografia/confirmation.php', 'dir': '_m1/8', 'linked': 5, 'len': 2196 } ]
  },
  { 'mime': 'image/jpeg', 'samples': [
    { 'url': 'http://10.0.2.2/kryptografia/img/Chat-background.jpg', 'dir': '_m2/0', 'linked': 2, 'len': 347641 } ]
  },
  { 'mime': 'text/css', 'samples': [
    { 'url': 'http://10.0.2.2/kryptografia/css/MainPage.css', 'dir': '_m3/0', 'linked': 2, 'len': 1094 },
    { 'url': 'http://10.0.2.2/kryptografia/css/style.css', 'dir': '_m3/1', 'linked': 2, 'len': 333 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://10.0.2.2/kryptografia/CheckUser.php', 'dir': '_m4/0', 'linked': 5, 'len': 586 },
    { 'url': 'http://10.0.2.2/kryptografia/CheckUser.php', 'dir': '_m4/1', 'linked': 5, 'len': 298 },
    { 'url': 'http://10.0.2.2/kryptografia/history.php', 'dir': '_m4/2', 'linked': 0, 'len': 148 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://10.0.2.2/kryptografia/js/jquery-1.12.3.min.js', 'dir': '_m5/0', 'linked': 2, 'len': 97180 },
    { 'url': 'http://10.0.2.2/kryptografia/mychat.js', 'dir': '_m5/1', 'linked': 2, 'len': 3341 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40402, 'samples': [
    { 'url': 'http://10.0.2.2/kryptografia/CheckUser.php', 'extra': 'PHP notice (HTML)', 'sid': '22012', 'dir': '_i0/0' },
    { 'url': 'http://10.0.2.2/kryptografia/CheckUser.php', 'extra': 'PHP notice (HTML)', 'sid': '22012', 'dir': '_i0/1' },
    { 'url': 'http://10.0.2.2/kryptografia/CheckUser.php', 'extra': 'PHP notice (HTML)', 'sid': '22012', 'dir': '_i0/2' },
    { 'url': 'http://10.0.2.2/kryptografia/confirmation.php', 'extra': 'PHP notice (HTML)', 'sid': '22012', 'dir': '_i0/3' },
    { 'url': 'http://10.0.2.2/kryptografia/history.php', 'extra': 'PHP notice (HTML)', 'sid': '22012', 'dir': '_i0/4' },
    { 'url': 'http://10.0.2.2/kryptografia/new.php', 'extra': 'PHP notice (HTML)', 'sid': '22012', 'dir': '_i0/5' } ]
  },
  { 'severity': 3, 'type': 40401, 'samples': [
    { 'url': 'http://10.0.2.2/kryptografia/js/jquery-1.12.3.min.js', 'extra': 'Delimited database dump', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 3, 'type': 40201, 'samples': [
    { 'url': 'http://10.0.2.2/kryptografia/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://10.0.2.2/kryptografia/AdminPage.php', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://10.0.2.2/kryptografia/confirmation.php', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://10.0.2.2/kryptografia/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css', 'sid': '0', 'dir': '_i2/3' } ]
  },
  { 'severity': 1, 'type': 20102, 'samples': [
    { 'url': 'http://10.0.2.2/kryptografia/roam', 'extra': 'Child node limit exceeded', 'sid': '0', 'dir': '_i3/0' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://10.0.2.2/kryptografia/js/jquery-1.12.3.min.js', 'extra': '', 'sid': '0', 'dir': '_i4/0' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://10.0.2.2/kryptografia/', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://10.0.2.2/kryptografia/css/MainPage.css', 'extra': '', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://10.0.2.2/kryptografia/css/style.css', 'extra': '', 'sid': '0', 'dir': '_i5/2' },
    { 'url': 'http://10.0.2.2/kryptografia/js/handlers.js', 'extra': '', 'sid': '0', 'dir': '_i5/3' },
    { 'url': 'http://10.0.2.2/kryptografia/js/jquery-1.12.3.min.js', 'extra': '', 'sid': '0', 'dir': '_i5/4' },
    { 'url': 'http://10.0.2.2/kryptografia/js/mychat.js', 'extra': '', 'sid': '0', 'dir': '_i5/5' },
    { 'url': 'http://10.0.2.2/kryptografia/handler.js', 'extra': '', 'sid': '0', 'dir': '_i5/6' },
    { 'url': 'http://10.0.2.2/kryptografia/index.html', 'extra': '', 'sid': '0', 'dir': '_i5/7' },
    { 'url': 'http://10.0.2.2/kryptografia/mychat.js', 'extra': '', 'sid': '0', 'dir': '_i5/8' },
    { 'url': 'http://10.0.2.2/kryptografia/', 'extra': '', 'sid': '0', 'dir': '_i5/9' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://10.0.2.2/kryptografia/CheckUser.php', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://10.0.2.2/kryptografia/CheckUser.php', 'extra': '', 'sid': '0', 'dir': '_i6/1' } ]
  },
  { 'severity': 0, 'type': 10601, 'samples': [
    { 'url': 'http://10.0.2.2/kryptografia/js/handlers.js', 'extra': '', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://10.0.2.2/kryptografia/confirmation.php', 'extra': '', 'sid': '0', 'dir': '_i7/1' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://10.0.2.2/kryptografia/.htaccess', 'extra': '', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://10.0.2.2/kryptografia/CheckUser.php', 'extra': '', 'sid': '0', 'dir': '_i8/1' },
    { 'url': 'http://10.0.2.2/kryptografia/history.php', 'extra': '', 'sid': '0', 'dir': '_i8/2' },
    { 'url': 'http://10.0.2.2/kryptografia/new.php', 'extra': '', 'sid': '0', 'dir': '_i8/3' } ]
  },
  { 'severity': 0, 'type': 10404, 'samples': [
    { 'url': 'http://10.0.2.2/kryptografia/css/', 'extra': 'Directory listing', 'sid': '0', 'dir': '_i9/0' },
    { 'url': 'http://10.0.2.2/kryptografia/css/?C=9876sfi;O=D', 'extra': 'Directory listing', 'sid': '0', 'dir': '_i9/1' },
    { 'url': 'http://10.0.2.2/kryptografia/css/?C=N;O=9876sfi', 'extra': 'Directory listing', 'sid': '0', 'dir': '_i9/2' },
    { 'url': 'http://10.0.2.2/kryptografia/img/', 'extra': 'Directory listing', 'sid': '0', 'dir': '_i9/3' },
    { 'url': 'http://10.0.2.2/kryptografia/img/?C=9876sfi;O=D', 'extra': 'Directory listing', 'sid': '0', 'dir': '_i9/4' },
    { 'url': 'http://10.0.2.2/kryptografia/img/?C=N;O=9876sfi', 'extra': 'Directory listing', 'sid': '0', 'dir': '_i9/5' },
    { 'url': 'http://10.0.2.2/kryptografia/js/', 'extra': 'Directory listing', 'sid': '0', 'dir': '_i9/6' },
    { 'url': 'http://10.0.2.2/kryptografia/js/?C=9876sfi;O=D', 'extra': 'Directory listing', 'sid': '0', 'dir': '_i9/7' },
    { 'url': 'http://10.0.2.2/kryptografia/js/?C=N;O=9876sfi', 'extra': 'Directory listing', 'sid': '0', 'dir': '_i9/8' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://10.0.2.2/kryptografia/.htaccess', 'extra': '', 'sid': '0', 'dir': '_i10/0' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://10.0.2.2/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i11/0' },
    { 'url': 'http://10.0.2.2/kryptografia/img/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i11/1' },
    { 'url': 'http://10.0.2.2/kryptografia/js/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i11/2' },
    { 'url': 'http://10.0.2.2/kryptografia/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i11/3' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://10.0.2.2/', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i12/0' },
    { 'url': 'http://10.0.2.2/kryptografia/', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i12/1' },
    { 'url': 'http://10.0.2.2/kryptografia/AdminPage.php', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i12/2' },
    { 'url': 'http://10.0.2.2/kryptografia/CheckUser.php', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i12/3' },
    { 'url': 'http://10.0.2.2/kryptografia/confirmation.php', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i12/4' },
    { 'url': 'http://10.0.2.2/kryptografia/history.php', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i12/5' },
    { 'url': 'http://10.0.2.2/kryptografia/new.php', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i12/6' },
    { 'url': 'http://10.0.2.2/kryptografia/', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i12/7' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://10.0.2.2/', 'extra': 'Apache/2.4.23 (Unix) OpenSSL/1.0.2j PHP/5.6.28 mod_perl/2.0.8-dev Perl/v5.16.3', 'sid': '0', 'dir': '_i13/0' } ]
  }
];

