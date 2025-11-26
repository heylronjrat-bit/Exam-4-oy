import { Router } from "express";
import Movies from "../controller/movies.controller.js";

const router = Router()

router 
    .post('/', Movies.create)
    .get('/', Movies.get)
    .get('/:id', Movies.getById)
    .patch('/:id', Movies.update)
    .delete('/:id', Movies.delete)

export default router