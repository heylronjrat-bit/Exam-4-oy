import { Schema, model } from 'mongoose'

const moviesSchema = new Schema({
    title: { type: String, unique: true, required: true },
    description: { type: String, unique: true },
    language: { type: String, required: true, enum: ['English', 'Russian', 'Uzbek', 'Spanish', 'Italian'] },
    genre: { type: String, required: true }
}, {
    versionKey: false
})

export default model('Movies', moviesSchema)