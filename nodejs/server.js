var express		 = require("express");
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');


// config files
var port = process.env.PORT || 300; // set our port
var db = require('./config/db');
var app = express();


// connect to our mongoDB database (commented out after you enter in your own credentials)
connectionsubject = mongoose.createConnection(db.urlSubjectViews);

/*
app.set("port",process.env.PORT||300)
var server = app.listen(app.get("port"),()=>{
  console.log("Listening on PORT: "+ app.get("port"))
});
*/

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app

app.use(express.static(__dirname + '/public')); 

/*
app.get('/fetch.json', (req, res) => {
	/*
  Data.find({})
    .then(sample => {
      res.json(sample)
    })

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var query = { name: "Alice2" };
		db.collection("FYP").find(query).toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
			res.json(result);
			db.close();
		});
	});
})
*/