const mongoose = require('mongoose');
const { Schema } = mongoose;

const flagSchema = new Schema ({
    question: {
        type: Number,
        required: true
    },
    flag: {
        type: String,
        required: true
    }
})


module.exports =  mongoose.model('flag', flagSchema);