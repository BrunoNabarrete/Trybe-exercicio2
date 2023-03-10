const express = require('express');

const app = express();
const fs = require('fs').promises;
const path = require('path');

const moviesPath = path.resolve(__dirname, './movies.json');

const readfile = async () => {
    try {
        const data = await fs.readFile(moviesPath);
        return JSON.parse(data);
    } catch (error) {
        console.log(`Arquivo não pode ser lido: ${error}`);
    }
};

app.get('/movies/:id', async (req, res) => {
    try {
        const movies = await readFile();
        const movie = movies.find(({ id }) => id === Number(req.params.id));
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

app.post('/movies', async (req, res) => {
    try {
        const { movie, price } = req.body;
        const movies = await readfile();
        const newMovie = {
            id: movies[movies.length - 1].id + 1,
            movie,
            price,
        };
        const allMovies = JSON.stringify([...movies, newMovie]);
        await fs.writeFile(moviesPath, allMovies);
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

app.put('/m')

module.exports = app;