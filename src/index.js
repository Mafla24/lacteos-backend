const express = require ("express");
const mongoose = require ("mongoose");
require("dotenv").config();
const productosRoutes = require("./routes/productos");

const app = express();
const port = 9000;

// rutas
app.get("/", (req, res) => {
    res.send("Bienvenidos a esta API");
}); 

//prefijos

app.use('/api', );

// conexion a mongodb por medio de mongoose

mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log("Conexion con mongodb web "))
    .catch((error) => console.error(error));

app.listen(port, () => console.log("El servidor esta escuchando el puerto", port));