var express = require('express');
var app = express(); 
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
// serves files from the root directory
app.use(express.static('./'));
app.listen(port, ip, function () {    
  console.log('Listening at http://localhost:8080');  
});