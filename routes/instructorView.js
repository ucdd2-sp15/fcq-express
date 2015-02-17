module.exports = function(app) {

    app.get('/view/instructor/:name', function(req, res) {

        // get the courses collection
        var courses = app.db.get('instructors')

        var name = req.params.name.replace("%20", " ") // <--- req.params.name

        var q = {'name': name}

        // execute the query to find those matched limiting to 20
        courses.findOne(q, function(err, doc) {
            
            res.render('instructor/view.jade', {
                item: doc
            })
        })
    })

    app.get('/course/list/instructor/:name', function(req,res){

        var courses = app.db.get('instructors')

        var name = req.params.name.replace("%20", " ")
        
        var q = {'name': name}

        courses.findOne(q, function(err, doc){
            res.render('instructor/view.jade',{
                item: doc
            })
        })
    })
}