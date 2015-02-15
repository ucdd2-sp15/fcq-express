var express = require('express')
var app = express()

// dburl to a mongodb server hosted in the cloud (i.e., mongolab)
var dburl = 'mongodb://ucdd:hackathon@ds043971.mongolab.com:43971/fcq'

// get db
var db = require('monk')(dburl)

// set the database
app.db = db


// use jade as the view engine
app.set('view engine', 'jade');

// set where the static contents are (e.g., css, js)
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index.jade')
})

// load routes for note, account, context
require('./routes/courseList')(app)
require('./routes/courseListTerm')(app)
require('./routes/courseListName')(app)
require('./routes/departmentList')(app)
require('./routes/instructorList')(app)
require('./routes/instructorView')(app)

app.set('port', (process.env.PORT || 3000))

var server = app.listen(app.get('port'), function() {

    var host = server.address().address
    var port = server.address().port
    console.log('App listening at http://%s:%s', host, port)
})