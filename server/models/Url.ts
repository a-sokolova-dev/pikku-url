import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: Date.now,
  },
});

export default mongoose.model('Url', UrlSchema);
