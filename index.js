// const express = require('express')
// const { MongoClient } = require('mongodb');
import express from "express"
import { MongoClient } from "mongodb"
import * as dotenv from 'dotenv'
import { moviesRouter } from "./routes/movies.js"
import { usersRouter } from "./routes/users.js"
import cors from 'cors'

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(express.json()) //Inbuilt middleware => to say express that the data is in json
app.use(cors())

//mongodb connection

const MONGO_URL = process.env.MONGO_URL
//"mongodb://127.0.0.1:27017"
//mongodb://localhost:27017
async function createConnection() {
    const client = new MongoClient(MONGO_URL)
    await client.connect()
    console.log("Mongodb is connected")
    return client
}

export const client = await createConnection()


//REST Api endpoints
//req => what we send to server
//res => what we receive from server
app.get('/', (req, res) => {
    res.send('Hello Everyone🥳🥳🥳')
})

app.use("/movies", moviesRouter)

app.use("/users", usersRouter)

app.listen(PORT, () => console.log("The server started on the port", PORT))



