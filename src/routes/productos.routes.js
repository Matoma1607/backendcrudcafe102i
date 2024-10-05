import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  leerPrueba,
  listarProductos,
  obtenerProducto,
} from "../controllers/producto.controllers.js";

//app.get("/prueba", (req, res) => {
//res.send("Desde el backend del proyecto crudCafe");
// });
const router = Router();
router.route("/prueba").get(leerPrueba);
router.route("/productos").post(crearProducto).get(listarProductos);
router.route("/productos/:id").get(obtenerProducto).delete(borrarProducto);

export default router;
