var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();
function compile(str, path) {
    return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: compile
    }
));

var port = 3030;
app.listen(port);
console.log("Applicatin is started and listing on " + port + "...");
mongoose.connect("mongodb://localhost/multivision");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('multivision db opened');
});

var Schema = mongoose.Schema;
var msgSchema = new Schema({ message: String });

var Message = mongoose.model('Message', msgSchema);
module.exports = Message;
var NewMessage = new Message({ message: "Hello World app" });
NewMessage.save();

var mdata;
Message.find().exec(function(err, messageDoc){
mdata=messageDoc[1].message;
});

// Message.find({}, function (err, messages) {
//     return messages[1].message;
//     // console.log(messages[1].message);
//     // console.log(mdata);
// })


app.use(express.static(__dirname + '/public'));
// app.get('/partials/:partialPath', function (req, res) {
//     res.render('partials/' + req.param.partialPath);
// })
//Above code does not work as explained in pluralshight
app.get('/partials/*', function (req, res) {
    res.render('partials/' + req.params[0]);
});
//this is from net few guys who are learning the same corse had fixed this.

app.get('*', function (req, res) {
    res.render('index', { mdata:mdata });
});     