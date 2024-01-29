const mongoose = require("mongoose")

const urlDb = 'mongodb://localhost:27017/proyecto-basico-express-movies'

const connectDB = async () =>{
  try{ 
    /* console.log(process.env.DB_URL); */
    await mongoose.connect(process.env.DB_URL)
    console.log("BBDD funcionando correctamente 🎈 ");
  }catch (error){
      console.log("La bbdd está echando humo, ha dado error 🎃");
  }

/*   try {
    await mongoose.connect(urlDb, { useNewUrlParser: true, useUnifiedTopology: true});
    console.log(`Conected with db succesfully`);
}catch(error) {
    console.log('Error to connect with db')
}; */

} 

module.exports = { connectDB };//con llaves si es funcion y sin llaves si es otra cosa, como una variable etc..