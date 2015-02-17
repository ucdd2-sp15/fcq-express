module.exports = function(app) {

    app.get('/course/list', function(req, res) {
        var _ = require('lodash')
        // get the courses collection
        var courses = app.db.get('courses')

        var q = {}

        // execute the query to find those matched limiting to 20
        courses.find(q, {
            limit: 20
        }, function(err, docs) {
            
            res.render('course/list.jade', {
                _ : _,
                courses: docs
            })
        })
    })

}