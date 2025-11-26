import Movies from '../schema/movies.schema.js'
import successRes from '../utils/successRes.js'
import { CustomError } from '../utils/customError.js'
import { errorHandle } from '../utils/errorHandle.js'

class MoviesController {
    async get(_req, res) {
        try {
            const movies = await Movies.find()
            return successRes(res, movies)
        } catch (error) {
            return errorHandle(res, error)
        }
    }

    async getById(req, res) {
        try {
            const movie = await Movies.findById(req.params?.id)
            if (!movie) { throw new CustomError('Movie not found', 404) }
            return successRes(res, movie)
        } catch (error) {
            return errorHandle(res, error)
        }
    }

    async create(req, res) {
        try {
            const { title } = req.body
            const exists = await Movies.findOne({ title })
            if (exists) { throw new CustomError('Movie already exists', 409) }
            const newMovie = await Movies.create(req.body)
            return successRes(res, newMovie, 201)
        } catch (error) {
            return errorHandle(res, error)
        }
    }

    async update(req, res) {
        try {
            const movie = await Movies.findByIdAndUpdate(req.params?.id, req.body, { new: true })
            if (!movie) { throw new CustomError('Movie not found', 404) }
            return successRes(res, movie)
        } catch (error) {
            return errorHandle(res, error)
        }
    }

    async delete(req, res) {
        try {
            const movie = await Movies.findByIdAndDelete(req.params?.id)
            if (!movie) { throw new CustomError('Movie not found', 404) }
            return successRes(res, {})
        } catch (error) {
            return errorHandle(res, error)
        }
    }
}

export default new MoviesController()