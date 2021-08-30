let mongoose = require('mongoose');

let trashSchema = mongoose.Schema({
    latitude: Number,
    longitude: Number,
    color: String,
    type: String,
})

let trashModel = mongoose.model('trash', trashSchema);
module.exports= trashModel;