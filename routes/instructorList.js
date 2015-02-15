module.exports = function(app) {

    app.get('/instructor/list', function(req, res) {

        // get the courses collection
        var courses = app.db.get('instructors')

        var q = {}

        // execute the query to find those matched limiting to 20
        courses.find(q, {
            limit: 20
        }, function(err, docs) {
            
            res.render('instructor/list.jade', {
                instructors: docs
            })
        })
    })

}