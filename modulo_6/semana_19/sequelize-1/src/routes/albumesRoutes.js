const express = require('express');
const router = express.Router();
const {getAllAlbumes} = require('../controllers/albumesController');

router.get('/albumes',getAllAlbumes);
router.get('/albumes/:id',(req,res)=>res.send('Soy albumes por id'));

module.exports = router;