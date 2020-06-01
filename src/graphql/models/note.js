const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
  title: String,
  createdAt: String,
  categoryId: String,
})

module.exports = mongoose.model('Note', noteSchema)
