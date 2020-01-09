const express = require('express');
const router = express.Router();


const homeController = require('../controllers/home_controller');
const registerController = require('../controllers/register_controller');
const registerControllerTeam = require('../controllers/registerTeam_controller');


console.log("The index.js in routes is successfully loaded");



// router.get('/', homeController.home);
// router.get('/api/register-single', registerController.display);
// router.post('/api/register-single', registerController.register);
// router.post('/api/confirm-single', registerController.confirmData);

// router.get('/api/register-single', registerController.display);
router.post('/api/register-single', registerController.register);
router.post('/api/confirm-single', registerController.confirmData);

router.post('/api/confirm-contingent', registerControllerTeam.confirmData);
router.get('/api/register-contingent', registerControllerTeam.displayContingent);
router.post('/api/register-contingent', registerControllerTeam.registerContingent);

module.exports = router;