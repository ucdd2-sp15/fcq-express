module.exports = function(app) {

    app.get('/instructor/view/:name', function(req, res) {

        // get the courses collection
        var courses = app.db.get('instructors')

        var name = req.params.name // <--- req.params.name
        console.log()

        var q = {'name': name}

        // execute the query to find those matched limiting to 20
        courses.findOne(q, function(err, doc) {

            res.render('instructor/view.jade', {
                item: doc
            })
        })
    })
}
