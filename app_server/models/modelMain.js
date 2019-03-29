/*
 * GET user list page.
 */
module.exports.get_destinations = function(req, res) 
{
    var db = req.db;
    var collection = db.get('destination');
    collection.find({}, {}, 
                    function(err, docs)
                    {	console.log(docs);
                        res.render('userlist', { "destlist" : docs });
                    });
};


/*
 * POST add user page.
 */
module.exports.post_adddest = function(req, res) 
{
    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes.
    var cityName = req.body.cityName;
    var hotelName = req.body.hotelName;
    var pricePerNight = req.body.pricePerNight;
    var hotelAddress = req.body.hotelAddress;
    var contactNumber = req.body.contactNumber;

    // Set our collection.
    var collection = db.get('destination');

    // Submit to the database.
    collection.insert( { "city" : cityName,
                         "hotel_name" : hotelName,
                         "hotel_address" : hotelAddress,
                         "phone" : contactNumber,
                         "cost" :pricePerNight},
                       function (err, doc) 
                       {
                           if (err) {
                               res.send("Insert failed.");
                           }
                           else {
                               // Forward to success page
                        	   res.render('index', { "title": 'admin dashboard.',"message":'Destination details saved successfully' });
                           }
                       });
   
};

/*
 * Needs to be updated
 */
module.exports.post_deletedest = function(req, res) 
{
    var uname = req.params.hotelName;
    var db = req.db;
    var collection = db.get('destination');

    collection.remove( { "hotel_name" : hotelName },
                       function (err, doc) 
                       {
                           if (err) {
                               res.send("Delete failed.");
                           }
                           else {
                               res.send("Successfully deleted " + uname);
                           }
                       });
};

//To load json data to database
module.exports.post_loaddataset = function(req, res){

    var data = require('../../MOCK_DATA.json');
    var client = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
   client.connect(url, function(err, db) {
        if (err) throw err;
        var dbase = db.db("travelguru");
      //  if (dbase.collection("destination")) {
		    dbase.createCollection("destination", function(err, res) {
		        if (err) throw err;
		        console.log("Collection created!");
		        dbase.collection("destination").insertMany(data, function (err, result) {
		            if (err) throw err;
		            
		        });	
		    });
     //   }
	  // 	 else {
	  // 		console.log("here");
	  // 		res.render('index', { "title": 'admin dashboard.',"message":'Records already uploaded' });
	//	 }
    });
   res.render('index', { "title": 'admin dashboard.',"message":'1000 Records inserted successfully' });
};


//MongoDB Search Destination
module.exports.searchCity = function(req, res)
{
    var hotelName = req.body.hotelName;
    var db = req.db;
    var collection = db.get('destination');
    
    collection.find( { hotel_name : hotelName }, 
                     function(err, doc) 
                     {
                         if (err) {
                             res.send("Find failed.");
                         }
                         else {
                        	 console.log(doc);
                        	 res.render('update_delete', { "destlist" : doc });
                         }
                     });
};