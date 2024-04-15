const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    deleteThoughtById,
    updateThoughtById,
    createReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');

router.route('/thoughts').get(getAllThoughts).get(getThoughtsById).post(createThought).put(updateThoughtById).delete(deleteThoughtById);

router.route('/thoughts/:thoughtId/reactions').post(createReaction).delete(deleteReaction);

module.exports = router;