const {getDatabase} = require('../config/config')
const Gallery = getDatabase().collection('galleries')
const { ObjectId } = require('mongodb')

class GalleryModel {
  static find() {
    return Gallery.find().toArray()
  }

  static create(data){
    return Gallery.insertMany(data)
  }

  static destroy(id){
    return Gallery.deleteOne({
      _id: ObjectId(id)
    })
  }
}

module.exports = GalleryModel