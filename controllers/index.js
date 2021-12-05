const router = require('express').Router();

// import routes as a variable
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashRoutes = require('./dash-routes.js');

// assign var routes to an API route using /variable name
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashRoutes);

module.exports = router;
