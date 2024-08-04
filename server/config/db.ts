import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI!)
    // eslint-disable-next-line no-console
    console.log('Database Connected')
  } catch (err) {
    process.exit(1)
  }
}

export default connectDB
