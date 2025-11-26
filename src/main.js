import express from 'express'
import { config } from 'dotenv'
config()
import router from './router/movies.router.js'
import { connectDB } from './config/server.js'

const app = express()
const PORT = process.env.PORT

app.use('/api/movies', router)

await connectDB()

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))