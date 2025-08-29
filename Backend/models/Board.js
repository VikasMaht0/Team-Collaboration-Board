const mongoose = require('mongoose');


const boardSchema = new mongoose.Schema(
{
name: {
type: String,
required: [true, 'Board name is required'],
trim: true,
minlength: 2,
maxlength: 80,
},
},
{ timestamps: true }
);


module.exports = mongoose.model('Board', boardSchema);