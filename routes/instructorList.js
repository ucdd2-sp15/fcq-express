module.exports = function(app) {

    app.get('/instructor/list', function(req, res) {

        // get the instructors collection
        var instructors = app.db.get('instructors')

        var q = {}

        // execute the query to find those matched limiting to 20
        instructors.find(q, {
            limit: 20
        }, function(err, instructors) {
            res.render('instructor/list.jade', {
                instructors: instructors
            })
        })
    })

}