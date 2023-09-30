// const express = require('express')
// const { MongoClient } = require('mongodb');
import express from "express"
import { MongoClient } from "mongodb"
import * as dotenv from 'dotenv'
dotenv.config()
const app = express()
const PORT = process.env.PORT
app.use(express.json()) //Inbuilt middleware => to say express that the data is in json

//     {
//         id: "100",
//         name: "RRR",
//         poster:
//             "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//         rating: 8.8,
//         summary:
//             "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//         trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
//         language: "English",
//     },
//     {
//         id: "101",
//         name: "Iron man 2",
//         poster:
//             "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//         rating: 7,
//         summary:
//             "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//         trailer: "https://www.youtube.com/embed/wKtcmiifycU",
//         language: "English",
//     },
//     {
//         id: "102",
//         name: "No Country for Old Men",
//         poster:
//             "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//         rating: 8.1,
//         summary:
//             "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//         trailer: "https://www.youtube.com/embed/38A__WT3-o0",
//         language: "English",
//     },
//     {
//         id: "103",
//         name: "Jai Bhim",
//         poster:
//             "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//         summary:
//             "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//         rating: 8.8,
//         trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
//         language: "Tamil",
//     },
//     {
//         id: "104",
//         name: "The Avengers",
//         rating: 8,
//         summary:
//             "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//         poster:
//             "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//         trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
//         language: "Hindi",
//     },
//     {
//         id: "105",
//         name: "Interstellar",
//         poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//         rating: 8.6,
//         summary:
//             "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//         trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
//         language: "Telugu",
//     },
//     {
//         id: "106",
//         name: "Baahubali",
//         poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//         rating: 8,
//         summary:
//             "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//         trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
//         language: "Telugu",
//     },
//     {
//         id: "107",
//         name: "Ratatouille",
//         poster:
//             "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//         rating: 8,
//         summary:
//             "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//         trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
//         language: "Tamil",
//     }
// ];

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
const client = await createConnection()

//REST Api endpoints
//req => what we send to server
//res => what we receive from server
app.get('/', (req, res) => {
    res.send('Hello Everyone🥳🥳🥳')
})

//Task
// /movies => all the movies
// /movies?language=English => only English movies ✅
// /movies?language=English&rating=8.1 = filter by language & rating  
// /movies?rating=8 => filter by rating

app.get('/movies', async (req, res) => {
    const { language, rating } = req.query
    console.log(req.query, language)
    // let filteredMovies = movies //copy by reference => same address
    // if (language) {
    //     filteredMovies = filteredMovies.filter((mv) => mv.language === language)//different address
    // }
    if (req.query.rating) {
        req.query.rating = +req.query.rating
    }
    const movie = await client.db("b48-47-db").collection("movies").find(req.query).toArray()
    res.send(movie);
})

//get movies by id

app.get('/movies/:id', async (req, res) => {
    const { id } = req.params
    console.log(req.params, id)
    //db.movies.findOne({id: "100"})
    // const movie = movies.find((mv) => mv.id === id)
    const movie = await client.db("b48-47-db").collection("movies").findOne({ id: id })
    movie ? res.send(movie) : res.status(401).send({ message: "No movies found" })
})

//delete by id
app.delete('/movies/:id', async (req, res) => {
    const { id } = req.params
    console.log(req.params, id)
    const movie = await client.db("b48-47-db").collection("movies").deleteOne({ id: id })
    movie ? res.send(movie) : res.status(401).send({ message: "No movies found" })
})

//add movies

app.post('/movies', async (req, res) => {
    const newMovies = req.body
    console.log(newMovies)
    const result = await client.db("b48-47-db").collection("movies").insertMany(newMovies)
    // movie ? res.send(movie) : res.status(401).send({ message: "No movies found" })
    res.send(result)
})

app.listen(PORT, () => console.log("The server started on the port", PORT))