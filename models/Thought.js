const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: timestampt => new Date(timestamp).toLocalString(),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJson: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

const Thought= model('thought', thoughtSchema)

module.exports = Thought