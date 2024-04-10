const router = require('express').Router();
//importing user and thought routes
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

//creating endpoints
router.use('/user',userRoutes);
router.use('/thought',thoughtRoutes);

// exporting router
module.exports = router;