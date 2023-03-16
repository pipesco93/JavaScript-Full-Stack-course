const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/moviesController');

router.post('/new-movie', controller.createMovie);



module.exports = router;