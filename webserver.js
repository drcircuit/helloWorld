/**
 * Created by Espen on 2/10/2016.
 */
var express = require('express');
var webserver = express();
webserver.use(express.static(__dirname + '/public'));
webserver.listen(404);
console.log ('Hello World! I am listening on port 404');