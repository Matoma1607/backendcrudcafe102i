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
export const obtenerProducto = async(req, res)=>{
  try {
    //extraer de la solicitud el id
    console.log(req.params.id)
    //pedir a laBD que bsuque ese producto que tiene tal id
    const productoBuscado = await Producto.findById(req.params.id);
    //agregar una respuesta adicional cuando productoBuscado es null
    if(!productoBuscado){
      return res.status(404).json({mensaje:"El producto no fue encontrado"})
    
    }
    //enviar en la respuesta el producto
    console.log(productoBuscado)
    res.status(200).json(productoBuscado)
  } catch (error) {
    //enviar un mensaje de error   
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo obtener el producto"
    }) 
  }
}

export const borrarProducto = async(req, res)=>{
  try {
    req.params.id
    //quiero saber si está el ide, si no esta, contesto con un codigo de error
    const productoBuscado = await Producto.findById(req.params.id)
    if(!productoBuscado){
      return res.status(404).json({
        mensaje: "El producto no fue encontrado"
      })
    }
    //le pido a laBD borrar el producto y envio la resp
    await Producto.findByIdAndDelete(req.params.id)
    res.status(200).json({mensaje:"El producto fue eliminado correctamente"})
  } catch (error) {
    console.error(error)
    res.status(500).json({
      mensaje:"Ocurrio un error al intentar borrar un producto"
    })
  }
}

export const editarProducto = async(req, res)=>{
try {
  //necesito el id y el body
  //validar los datos del body
  //pedri la bd buscar si esta el id que corresponde, sino enviar codigo de error
  const productoBuscado = await Producto.findById(req.params.id)
  if(!productoBuscado){
    return res.status(404).json({mensaje:"El producto no fue encontrado"})
  }
  //pedir a la bd que modifique el producto
  await Producto.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({mensaje:"El producto fue editado correctamente"})
} catch (error) {
  res.status(500).json({
    mensaje:"Ocurrio un error al intentar editar el producto"
  })
}
}