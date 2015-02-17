module.exports = function(app) {

    app.get('/course/list/:subject/:courseNum', function(req, res) {

        // get the courses collection
        var courses = app.db.get('courses')

        var q = {
            'Subject': req.params.subject,
            'Course': req.params.courseNum
        }

        // execute the query to find those matched limiting to 20
        courses.find(q,
            function(err, docs) {
            
            res.render('course/field_name.jade', {
                courses: docs
            })
        })
    })

}