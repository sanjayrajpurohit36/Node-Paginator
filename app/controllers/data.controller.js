const BookModel = require('../models/data.model.js'); // Object of model

module.exports = {

    test: function (req, res) {
        return res.status(200).send ({
            message: 'Working fine'
        })
    },
    
    /** 
    *  @URL: GET http://localhost:8000/api/show	
    *  @desc: A show route to get all the data from books db and record collection 
    *  @Auhor: Sanjay Rajpurohit
    *  @Return: json responce
    */
    show: function (req, res) {
        var dbo = req.app.db.db("student");         
        var test = dbo.collection('record');        
        test.find().toArray().then(function (result) {
        let page_size = 100;
        let no_of_pages = Math.ceil(result.length / page_size); 
        let current_page = parseInt(req.query["page_no"]);
        if(isNaN(current_page)) current_page = 0;
        let current_data = result.slice(current_page * page_size, (current_page + 1) * page_size)
        return res.status(200).send({
                data: current_data,
                no_of_pages: no_of_pages,
                total_data: result.length,
                current_page: current_page,
                message: "Complete data fetched",
                error: ''
            });   
        });
    },
    insert: function(req, res) {
        var dbo = req.app.db.db("student");
        var test = dbo.collection('record'); 
        for(let i=0;i<1000;i++) {  test.insert({"id": i, "name": "Test " + i, age: i+15}) };    
        return res.status(200).send({message: "Record inserted"});
    }
}