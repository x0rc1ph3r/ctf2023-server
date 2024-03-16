const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        default: 0
    },
    questions: {
        type: Map,
        of: {
            solved: {
                type: Boolean,
                default: false
            },
            timestamp: {
                type: Date,
                default: Date.now
            }
        },
        default: new Map()
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', UserSchema);