var mongoose = require('mongoose');


var notesSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Notes = mongoose.model('Notes', notesSchema);

module.exports = Notes;


