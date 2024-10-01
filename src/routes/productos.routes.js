import { Router } from "express";
import { crearProducto, leerPrueba, listarProductos } from "../controllers/producto.controllers.js";

//app.get("/prueba", (req, res) => {
//res.send("Desde el backend del proyecto crudCafe");
// });
const router = Router();
router.route("/prueba").get(leerPrueba);
router.route("/producto").post(crearProducto).get(listarProductos)

export default router; 
