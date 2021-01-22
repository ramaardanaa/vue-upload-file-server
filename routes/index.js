const GalleryController = require("../controllers/galleryController")
const router = require("express").Router()
const storage = require('../middlewares/multer')
const multer = require('multer')
const upload = multer({
  storage
})

router
  .get('/galleries',GalleryController.showAll)
  .post('/galleries',GalleryController.addGallery)
  .post('/upload',upload.array('photo',10), GalleryController.add)
module.exports = router