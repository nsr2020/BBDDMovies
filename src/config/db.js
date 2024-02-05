const mongoose = require("mongoose")



const connectDB = async () =>{
  try{ 
  
    await mongoose.connect(process.env.DB_URL)
    console.log("BBDD funcionando correctamente 🎈 ");
  }catch (error){
      console.log("La bbdd está echando humo, ha dado error 🎃");
  }

} 

module.exports = { connectDB };//con llaves si es funcion y sin llaves si es otra cosa, como una variable etc..