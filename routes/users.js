import express from "express"
const router = express.Router()

//register||signup
router.post('/', async (req, res) => {
    const { username, password } = req.body
})



export const usersRouter = router