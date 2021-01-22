const express = require('express');
require("dotenv").config()
const app = express()
const PORT =  process.env.PORT || 3000;
require("./config/config")
const cors = require('cors')
const mongo = require("./config/config");

mongo.connect(function (err) {
  if (!err) {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cors())

    app.use('/public', express.static('public'))
    app.use("/",require("./routes"))

    app.listen(PORT, () => {
      console.log(`listen to ${PORT}`);
    })
  }
})