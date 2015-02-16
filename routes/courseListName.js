module.exports = function(app) {

    app.get('/course/list/name/:subject/:number', function(req, res) {

        // get the courses collection
        var courses = app.db.get('courses')

        // compose a query
        var q = {'Subject': (req.params.subject),'Course': (req.params.number) } 

        // execute the query to find those matched limiting to 20
        courses.find(q, {
            limit: 100
        }, function(err, docs) {

            res.render('course/list.jade', {
                courses: docs

            })
            console.log(docs)
        })
    })

}