import { client } from "./index.js";

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

export { getAllMovies, getMovieById, deleteMovieById, addMovies, updateMovies }