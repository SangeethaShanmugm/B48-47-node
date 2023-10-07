import express from "express"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { genPassword, createUser, getUserName } from "../helpers.js"
const router = express.Router()

//register||signup
router.post('/signup', async (req, res) => {
    const { username, password } = req.body
    console.log(username, password)
    //validate username
    const isUserExist = await getUserName(username)
    if (isUserExist) {
        res.send({ message: "username already exists" })
        return;
    }
    //validate password
    if (!/^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#!@%$_]).{8,}$/g.test(password)) {
        res.send({ message: 'Password Pattern does not match' })
        return
    }
    const hashedPassword = await genPassword(password)
    const result = await createUser(username, hashedPassword)
    res.send(result)
})

//login 

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    console.log(username, password)
    //validate username
    const userFromDB = await getUserName(username)
    if (!userFromDB) {
        res.status(400).send({ message: "Invalid credentials" })
        return;
    }

    const storedDbPassword = userFromDB.password
    const isPasswordMatch = await bcrypt.compare(password, storedDbPassword)
    if (!isPasswordMatch) {
        res.status(400).send({ message: "Invalid credentials" })
        return;
    }
    const token = jwt.sign({ id: userFromDB._id }, process.env.SECRET_KEY)
    res.send({ message: "Successfully Logged in", token: token })
})




export const usersRouter = router