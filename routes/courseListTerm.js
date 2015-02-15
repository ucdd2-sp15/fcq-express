module.exports = function(app) {

    app.get('/course/list/term/:year/:term', function(req, res) {

        // get the courses collection
        var courses = app.db.get('courses')

        var yearterm = '20067'

        // compose a query to look up docs whose 'categories' field contains the word 'Doctors'
        var q = {'YearTerm' : yearterm}

        // execute the query to find those matched limiting to 20
        courses.find(q, {
            limit: 20
        }, function(err, docs) {

            res.render('course/list.jade', {
                courses: docs
            })
        })
    })

}