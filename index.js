require("dotenv").config(); // se pone en primer lugar, solo necesitamos configuarla, para acceder a las variables de entorno.

const express = require("express");
const { connectDB } = require("./src/config/db");
const { movieRoutes } = require("./src/api/routes/movie");
connectDB(); 
const app = express();




app.use(express.json()) //nos sirve para que el sevidor sepa interpretar req.body de formato json

app.use("/api/v1/movies",movieRoutes);

app.use("/ping", (req, res, next) =>{
  return res.status(200).json("pong")
})

app.use("*", (req, res, next) =>{
  return res.status(404).json("Route not found")
})

app.listen(8000, ()  =>{
  console.log("servidor desplegado en http://localhost:8000");
})
  
