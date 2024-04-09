const { Thought, User, Reaction } = require('../models');
const {Types} = require('mongoose');

const ThoughtController = {
    async getAllThoughts(req,res) {
        try {
            const thoughts = await Thought.find({});
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getThoughtsById (req,res) {
        try {
            const thought = await Thought.findOne({_id:req.params.thoughtId});
            if(!thought) {
                res.status(400).json({ message: 'Unable to find thought'})
            } else {
                res.json({ message: `Thought successfully found: "${thought}"`});
            }
        } catch (err) {
        res.status(500).json(err);
        }
    },

    async createThought(req,res) {
        try {
            const thought = await Thought.create(req.body);
            res.status(201).json({ message: 'New thought successfully created!'});
        } catch (err) {
            res.status(500).json({ message: 'Unable to create new thought'});
        }
    },

    async deleteThought(req, res) {
        try {
            const thought = await Thought.findByIdAndDelete({_id:req.params.thoughtId});
            res.status(200).json({ message: 'Successfully deleted thought!'});
        } catch (err) {
            res.status(500).json({ message: 'Cannot delete thought'});
        }
    },

    async updateThoughtById(req,res) {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
                new: true,
            });
            if (!thought) {
                res.status(404).json({ message: 'Thought not found'});
            } else {
                res.json(thought);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createReaction(req,res) {
        try {
            const thought = await Thought.findOneAndUpdate({_id: req.params.thoughtId});
        } catch (err) {
            res.status(500).json(err);
        }
    },
}