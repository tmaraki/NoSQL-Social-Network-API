const { User } = require('../models');

const UserController = {
    //Get all users
    async getAllUsers(req,res) {
        try{
            const users = await User.find({});
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //Get user by ID
    async getUserById (req,res) {
        try {
            const user = await User.findOne({_id: req.params.userId});
            if(!user) {
                res.status(400).json({ message: 'User not found'})
            } else {
                res.json({ message: `Successfully found user "${user}"`});
            }
        } catch (error) {
            res.status(500).json(err);
        }
    },

    //Create new user
    async createUser (req,res) {
        try{
            const user = await User.create(req.body);
            res.status(201).json({ message: 'Successfully created new user!'});
        } catch (err) {
            res.status(500).json({ message: 'Unable to create new user'});
        }
    },

    //Update user by ID
    async updateUserById(req,res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
                new: true,
            });
            if(!user) {
                res.status(404).json({ message: 'User not found'});
            } else {
                res.json(user);
            }
        } catch (error) {
            res.status(500).json(err);  
        }
    },

    //Delete user
    async deleteUser(req,res) {
        try {
            const user = await User.findByIdAndDelete({_id: req.params.userId});
            res.status(200).json({ message: 'Successfully deleted user'});
        } catch (err){
            res.status(500).json({ message: 'Cannot delete user'});
        }
    },

    //Add friend to user's friend list
    async addFriend(req,res) {
        try{
            const user = await User.findOneAndUpdate(
                {_id: req.params.userId},
                { $addToSet: { friends: req.body.friendId || req.params.friendId} },
                { new: true }
            );
            user ? res.json(user): res.status(404).json({message: 'User not found'})
        } catch(err){
            res.status(500).json(err);
        }
    },

    //Delete friend from user's friend list
    async deleteFriend(req,res) {
        try{
            const user = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$pull: {users: {userId: req.params.userId}}},
                {runValidators: true, new: true}
            );
            if (!user) {
                res.status(404).json({ message: 'User not found'});
            } else {
                res.json({ message: 'Successfully removed friend'});
            }        
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = UserController