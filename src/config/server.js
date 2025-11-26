import { connect } from 'mongoose'
import { config } from 'dotenv'
config()

export async function connectDB() {
    try {
        await connect(String(process.env.MONGO_URI))
        console.log('Connected')
    } catch (error) {
        console.log('Error on connecting database', error.message)
    }
}