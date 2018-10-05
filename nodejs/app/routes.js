var Subjects = require('./models/SubjectViews');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes	
	// sample api route
 app.get('/api/data', function(req, res) {
  // use mongoose to get all nerds in the database
  Subjects.find({}, {'_id': 0, 'name': 1, 'Week_1': 1, 'Week_2': 1, 'Week_3': 1, 'Week_4': 1, 'Week_5': 1, 'Week_6': 1, 'Week_7': 1, 'Week_8': 1, 'Week_9': 1, 'Week_10': 1, 'Week_11': 1, 'Week_12': 1, 'Week_13': 1},
    function(err, subjectDetails) {
      // if there is an error retrieving, send the error. 
         // nothing after res.send(err) will execute
      if (err) 
      res.send(err);
      res.json(subjectDetails); // return all nerds in JSON format
  });
 });
}

 
