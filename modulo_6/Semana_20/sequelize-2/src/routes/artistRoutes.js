const express = require('express');
const router = express.Router();
const { getAllArtist, newArtist, createArtist, editArtist, updateArtist } = require('../controllers/artistController');


router.get('/artist',getAllArtist);
router.get('/new-artist', newArtist);
router.post('/new-artist', createArtist);

router.get('/edit', editArtist);
router.put('/edit-confirm', updateArtist);
module.exports = router;