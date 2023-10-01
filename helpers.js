import { client } from "./index.js";

export async function getAllMovies(req) {
    return await client.db("b48-47-db").collection("movies").find(req.query).toArray();
}
export async function getMovieById(id) {
    return await client.db("b48-47-db").collection("movies").findOne({ id: id });
}
export async function deleteMovieById(id) {
    return await client.db("b48-47-db").collection("movies").deleteOne({ id: id });
}
export async function addMovies(newMovies) {
    return await client.db("b48-47-db").collection("movies").insertMany(newMovies);
}
