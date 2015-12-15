var express = require('express');
var path = require('path');

var app = express();
app.set('port', (process.env.PORT || 5000));

var rootPath = path.normalize(__dirname);

app.use(express.static(rootPath + '/app'));

var port = app.get('port');
app.listen(port);
console.log('Listening on port ' + port + '...');