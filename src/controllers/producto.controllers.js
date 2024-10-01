import Producto from "../database/model/producto.js";

export const leerPrueba = (req, res) => {
  res.send("Desde el backend del proyecto crudCafe");
};
export const crearProducto = async (req, res) => {
  try {
    // validad datos para crear producto
    // pedir al modelo producto que genere uno nuevo
    const productoNuevo = new Producto(req.body);
    //guardo en la BD
    await productoNuevo.save();
    //enviar una respuesta al front
    res.status(201).json({
      mensaje: "El producto fue creado correctamente",
    });
  } catch (error) {
    //envio una respuesta al front algo fallo
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo crear un producto",
    });
  }
};

export const listarProductos = async(req, res)=>{
  try {
    //pedir a laBD la collection de productos
    const productos = await Producto.find()
    //enviar en la respuesta la lista de productos
    res.status(200).json(productos);
  } catch (error) {
    //enviar un mensaje de error   
    console.error(error);
    res.status(404).json({
      mensaje: "Ocurrio un error, no se encontraron los productos"
    }) 
  }
}