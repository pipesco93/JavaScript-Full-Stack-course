// ************ Require's ************
const express = require('express');
const router = express.Router();


// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ************ Require multer & path ************
const path = require("path");
const multer = require("multer");

// ************ Configuracion de disco de almacenamiento ************
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,"../../public/images/products/"));
    },

    filename: (req, file, cb) => {
        const newFile = `prod-${Date.now()}_img${path.extname(file.originalname)}`//date now milisegundos desde 1970, un numero muy grande,
        // path.extname me trae la extension del archivo original
        cb(null,newFile);
    }
});

const upload = multer({storage})


/*** GET ALL PRODUCTS ***/
router.get('/', productsController.index);

/*** CREATE ONE PRODUCT ***/
router.get('/create', productsController.create);
router.post('/create', upload.single('img'), productsController.store);


/*** GET ONE PRODUCT ***/
router.get('/detail/:id', productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get('/edit/:id', productsController.edit);
router.put('/edit/edit-prod', productsController.update);


/*** DELETE ONE PRODUCT***/
router.delete('/:id', productsController.destroy);


module.exports = router;
