import { Router } from "express";
import { crearProducto, leerPrueba } from "../controllers/producto.controllers.js";

//app.get("/prueba", (req, res) => {
//res.send("Desde el backend del proyecto crudCafe");
// });
const router = Router();
router.route("/prueba").get(leerPrueba);
router.route("/producto").post(crearProducto);

export default router; 
