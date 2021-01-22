const Gallery = require("../models/gallery")
const domain = "https://test-upload-vue.herokuapp.com/"
class GalleryController{
  static async showAll(req,res){
    try {
      const galleries = await Gallery.find()
      res.status(200).json(galleries);
    } catch (error) {
      res.status(500).json({error})
    }
  }

  static async add(req,res){
    try {
      const result = req.files.map(el => {return {url:domain + el.path,name:el.originalname}})
      res.status(201).json(result)
    } catch (error) {
      res.status(500).json({error})
    }
  }

  static async addGallery(req,res){
    try {
      const {data} = req.body
      const photos = await Gallery.create(data)
      res.status(201).json(photos.ops)
    } catch (error) {
      res.status(500).json({error})
    }
  }
}

module.exports = GalleryController