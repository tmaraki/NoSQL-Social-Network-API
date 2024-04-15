const router = require('express').Router();

const{
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/user-controller');

router.route('/users').get(getAllUsers).get(getUserById).post(createUser).put(updateUserById).delete(deleteUser);
router.route('/users/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;