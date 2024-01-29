const Movie = require("../models/movie"); //se importa el modelo

//!Realizamos el crud completo

//? 1 el get de todas las peliculas 

const getMovies = async ( req, res,next) =>{
  try{
    const allMovies = await Movie.find();
    return res.status(200).json(allMovies)
  }catch{
    return res.status(400).json("Algo no ha ido bien")
  }
}

//? 2 el get por id (filtro para buscar por id)

const getMovieById =async( req, res, next)=>{
  try{
    const {id} = req.params;
    const movieById = await Movie.findById(id)
    return res.status(200).json(movieById)
  }catch (error){
    return res.status(400).json("Error");
  }
}
//? 3 el get por title (filtro para buscar por title)

const getMovieByTitle = async(req, res, next) =>{
  try{
    const {title} = req.params;
    const movieByTitle = await Movie.find({ title })
    return res.status(200).json(movieByTitle)
  }catch (error){
    return res.status(400).json("Error");
  }
}

//? 4 el get por genero (filtr para buscar todas que tengan el mismo genero)

const getMoviesByGenre = async(req, res, next) =>{

  try{
    const {genre} = req.params;
    const movieByGenre = await Movie.find({genre})
    return res.status(200).json(movieByGenre)
  }catch (error){
    return res.status(400).json("Error");
  }
}

//? 5 el get por año igual o superior a 2010 ( filtro >=2010)

const getMoviesByYear = async(req, res, next) =>{
  try{
    const {year} = req.params;
    const movieByYear = await Movie.find({year: {$gte:year}})
    return res.status(200).json(movieByYear)
  }catch (error){
    return res.status(400).json("Error");
  }
}

//?6 metodo post para poner peliculas en la BBDD

const postMovie = async(req, res, next) =>{

  try{
   const newVideo = new Movie(req.body)
   const movieSaved = await newVideo.save()
   return res.status(201).json(movieSaved)
  }catch (error){
    return res.status(400).json("Error");
  }

}

//? 7 metod de borrado de peliculas Delete

const deleteMovie = async(req, res, next )=>{
  try{
    const {id} = req.params;
    const movieDeleted = await Movie.findByIdAndDelete(id);
    return res.status(200).json(movieDeleted)
   }catch (error){
     return res.status(400).json("Error");
   }
}

//? método de update de datos, modificación de datos existentes mediante id

const updateMovie = async(req, res, next ) =>{
  try{
    //necesito saber que cuadro es, es decir su id, lso nuevos datos a acutalizar
    const { id } = req.params; //para el id del cuadro a modificar
    const newMovie = new Movie(req.body); // para recoger la nueva info...
    newMovie._id = id;
    //findByIdAndUpdate me va devolver el dato ANTIGUO, 
    const movieUpdated = await Movie.findByIdAndUpdate(id, newMovie, { new: true });  //al poner el parámetro new:true, le indicamos que queremos que muestre por insomnia el dato ya modificado
    return res.status(200).json(movieUpdated);

  }catch (error) {
    return res.status(400).json("Algo no ha ido bien")
  }
}



module.exports = {getMovies, getMovieById, getMovieByTitle, getMoviesByGenre, getMoviesByYear, postMovie, deleteMovie, updateMovie}
