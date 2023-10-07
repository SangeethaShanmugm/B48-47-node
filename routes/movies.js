import express from "express"
const router = express.Router()

import { getAllMovies, getMovieById, deleteMovieById, addMovies, updateMovies } from "../helpers.js"
import { auth } from "../middleware/auth.js"

router.get('/', async (req, res) => {
    const { language, rating } = req.query
    console.log(req.query, language)
    if (req.query.rating) {
        req.query.rating = +req.query.rating
    }
    const movie = await getAllMovies(req)
    res.send(movie);
})

//get movies by id
router.get('/:id', async (req, res) => {
    const { id } = req.params
    console.log(req.params, id)
    const movie = await getMovieById(id)
    movie ? res.send(movie) : res.status(401).send({ message: "No movies found" })
})

//delete by id
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    console.log(req.params, id)
    const movie = await deleteMovieById(id);
    movie ? res.send(movie) : res.status(401).send({ message: "No movies found" })
})

//add movies
router.post('/', async (req, res) => {
    const newMovies = req.body
    console.log(newMovies)
    const result = await addMovies(newMovies)
    res.send(result)
})

//update movies
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const updatedMovies = req.body
    const result = await updateMovies(updatedMovies, id)
    res.send(result)
})


export const moviesRouter = router