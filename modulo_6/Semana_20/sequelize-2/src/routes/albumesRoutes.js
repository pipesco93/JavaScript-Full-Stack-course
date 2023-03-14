const express = require('express');
const router = express.Router();
const {getAllAlbumes, getAlbumById} = require('../controllers/albumesController');

router.get('/albumes',getAllAlbumes);
router.get('/albumes/:id',getAlbumById);

router.get('/artist',)
router.get('/new-artist')

module.exports = router;