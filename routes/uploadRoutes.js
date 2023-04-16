const route = require('express').Router();
const uploadImage = require('../middlewares/uploadImage')
const upload = require('../middlewares/upload')
const uploadController = require('../controllers/uploadController');
const multer = require('multer');



route.post('/api/upload', uploadImage, upload,uploadController.uploadImage)

module.exports = route;