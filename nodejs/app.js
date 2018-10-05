var express = require("express");
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/scores";

app.set("port",process.env.PORT||300)
var server = app.listen(app.get("port"),()=>{
  console.log("Listening on PORT: "+ app.get("port"))
});

app.use(express.static(__dirname + '/public')); 

app.get('/fetch.json', (req, res) => {
	/*
  Data.find({})
    .then(sample => {
      res.json(sample)
    })
    */

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