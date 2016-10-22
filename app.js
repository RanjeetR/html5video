var express = require('express');


var app = express();
app.engine("html", require('ejs').renderFile);
app.use(express.static(__dirname + '/'));
app.get('/', function (req, res) {
    res.render('index');
})


app.listen(9090, function () {
    console.log('server started ........');
})