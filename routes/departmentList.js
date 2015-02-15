module.exports = function(app) {

    app.get('/department/list', function(req, res) {

        // get the courses collection
        var courses = app.db.get('departments')

        var q = {}

        // execute the query to find those matched limiting to 20
        courses.find(q, {
            limit: 10
        }, function(err, docs) {
            
            res.render('department/list.jade', {
                departments: docs
            })
        })
    })

}