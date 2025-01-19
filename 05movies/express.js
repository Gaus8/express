const express = require('express');
const movies = require('./movies.json')
const crypt = require('crypto')
const { error } = require('console');
const { validateMovie, updateMoviePartial } = require('./schema/schemaMovies');
const fs = require('fs')

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

//filtrar peliculas, todas o por genero.
app.get('/movies', (req, res) => {
  res.header('Access-Control-Allow-Origin','*');
  const { genre } = req.query;

  if (genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(
        nombre => nombre.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  return res.json(movies)
});

//filtrar peliculas por id
app.get('/movies/:id', (req, res) => {

  const { id } = req.params
  const movieFind = movies.find(movie => movie.id === id);
  return res.json(movieFind)
})

//Crear peliculas
app.post('/movies', (req, res) => {
  const result = validateMovie(req.body);

  if(result.error){
    return res.status(404).json({ error: JSON.parse(result.error.message) })
  }
  const newMovie = {
    id: crypt.randomUUID(),
    ...result.data
  };
  res.status(201).json(newMovie);

//  fs.appendFile('movies.json',`,${JSON.stringify(newMovie)}`, (err) =>{
//   if(err){
//     throw err
//   }
//   console.log("Append :)")
//  })
});

//Actualizar una paret de la pelicula
app.patch('/movies/:id', (req, res) =>{
  
  const result = updateMoviePartial(req.body);

  if(result.error){
    res.status(400).json({message:JSON.parse(result.error)})
  }

  const { id } = req.params;
  const findMovieIndex = movies.findIndex(movie => movie.id === id);

  console.log(findMovieIndex)

  if(findMovieIndex === -1){
    res.status(404).json({error:"Movie not Found!"})
  }



  const updateMovie ={
    ...movies[findMovieIndex],
    ...result.data
  } 

  movies[findMovieIndex] = updateMovie;

  return res.json(updateMovie)

})


app.listen(PORT, () => {
  console.log('http://localhost:5000');;;;
});

