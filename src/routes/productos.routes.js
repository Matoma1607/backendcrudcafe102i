import { Router } from "express";
import { leerPrueba } from "../controllers/producto.controllers.js";

//app.get("/prueba", (req, res) => {
//res.send("Desde el backend del proyecto crudCafe");
// });
const router = Router();
router.route("/prueba").get(leerPrueba);

export default router; 
