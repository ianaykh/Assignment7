var express = require('express');
var http = require('http');
var path = require('path');
var redis = require('redis');
var bodyParser = require('body-parser');
var app = express();

client = redis.createClient();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
http.createServer(app).listen(3000);

client.on("error", function(err) {
    console.log("Error" + err);
});

var longurl;

    client.hget("sort1", "longurl", function(err, response) {
        callback(err, response);
    });
};

    var temp = Date.now();
    return (temp.toString(36));

}
app.post('/getUrl', function(req, res) {
    var url = req.body.url1;
        client.hget(url, "longurl", function(err, response) {
            res.json({
                "url": response
            });

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;