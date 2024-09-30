import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import "./src/database/databaseConnection.js"
import productoRouter from "./src/routes/productos.routes.js";

//1- configurar un puerto
const app = express();

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.info("Estoy escuchando el puerto " + app.get("port"));
});

//2- configurar middlewares
app.use(cors()); //permite conexiones remotas
app.use(morgan("dev")); // nos da informacion extra en la terminal
app.use(express.json()); // interpreta los datos del body en el formato json
app.use(express.urlencoded({ extended: true })); // interpretar datos enviados de formularios
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//console.log(__filename)
//console.log(__dirname)
//console.log(path.join(__dirname,"/public"))
app.use(express.static(path.join(__dirname, "/public"))); //configuramos un archivo estatico para ver el index.html en la ruta prinipal

//3- configurar las rutas
app.use("/api",productoRouter)