const router = require('express').Router();
let Note = require('../models/notesModel');


router.route('/').get((req, res) => {
    Note.find()
        .then(notes => res.json(notes))
        .catch(err => res.status(400).json('Error: '+err))
})

router.route('/add').post((req, res) => {
    const description = req.body.description;

    const Notess = new Note({
        description,
    });

    Notess.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').delete((req, res) => {
    Note.findByIdAndDelete(req.params.id)
        .then(() => res.json("deleted notes!"))
        .catch(err => {
            console.log("Error: "+err);
        })
});


module.exports = router;