const mongoose = require("mongoose");


const movieSchema = new mongoose.Schema(
  {
    title: {type:String, required: true},
    director: {type:String, required:true},  // como tiene que ser el objeto
    year: {type:Number, required: true},
    genre:{type:String, required:true}
  },
  {
    timestamps: true,
    collection: "movies"   // las opciones 
  }
)

const Movie = mongoose.model("Movie", movieSchema, "movies")

module.exports = Movie;