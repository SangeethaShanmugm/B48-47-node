import { client } from "./index.js";
import bcrypt from "bcrypt";
async function getAllMovies(req) {
    return await client.db("b48-47-db").collection("movies").find(req.query).toArray();
}
async function getMovieById(id) {
    return await client.db("b48-47-db").collection("movies").findOne({ id: id });
}
async function deleteMovieById(id) {
    return await client.db("b48-47-db").collection("movies").deleteOne({ id: id });
}
async function addMovies(newMovies) {
    return await client.db("b48-47-db").collection("movies").insertMany(newMovies);
}

async function updateMovies(updatedMovies, id) {
    return await client.db("b48-47-db").collection("movies").updateOne(
        { id: id },
        { $set: updatedMovies }
    );
}


async function genPassword(password) {
    const salt = await bcrypt.genSalt(10)//bcrypt.genSalt(no. of rounds)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
}

async function createUser(username, hashedPassword) {
    return await client.db("b48-47-db").collection("users").insertOne({ username: username, password: hashedPassword });
}

async function getUserName(username) {
    return await client.db("b48-47-db").collection("users").findOne({ username: username });
}


export { getAllMovies, getMovieById, deleteMovieById, addMovies, updateMovies, genPassword, createUser, getUserName }