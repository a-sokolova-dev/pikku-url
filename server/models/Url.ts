import mongoose from 'mongoose'

const UrlSchema = new mongoose.Schema({
  createdAt: {
    default: Date.now,
    type: String
  },
  longUrl: {
    required: true,
    type: String
  },
  shortUrl: {
    required: true,
    type: String
  }
})

export default mongoose.model('Url', UrlSchema)
