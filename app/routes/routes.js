module.exports = function(app) {
    const Data = require('../controllers/data.controller.js'); 
    /*
	Test route to make sure everything is working (accessed at GET http://localhost:8080/api/test)	
	A simple get route
    */
	app.get('/test', Data.test);
    
    /** 
    *  @URL: GET http://localhost:8080/api/show	
    *  @desc: A show route to get all the data from books db and record collection 
    *  @Auhor: Sanjay Rajpurohit
    *  @Return: json responce
    */
    app.get('/show', Data.show);
    
    /** 
    *  @URL: GET http://localhost:8080/api/insert	
    *  @desc: An insert route to insert 1000 documents(data) into books db and record collection 
    *  @Auhor: Sanjay Rajpurohit
    *  @Return: success message
    */
    app.get('/insert', Data.insert);
    
}