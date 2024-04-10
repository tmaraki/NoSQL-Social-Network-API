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

router.route('/').get(getAllUsers).post(createUser);
router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;