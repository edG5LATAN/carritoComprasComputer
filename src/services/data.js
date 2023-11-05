import axios from "axios";

const urlproductos="https://apiventas-jsonpruebas.onrender.com/productos"

export const traerProductos=(setdata)=>{
  axios.get(urlproductos)
  .then(res=>setdata(res.data))
  .catch(error=>console.log(error))
}

export const traerCategoria=(setCategoria)=>{
  axios.get(`https://apiventas-jsonpruebas.onrender.com/categoria`)
  .then(res=>setCategoria(res.data))
  .catch(error=>console.log(error))
}
export const verPorCategoria=(id,setdata)=>{
  axios.get(`https://apiventas-jsonpruebas.onrender.com/productos?categoria=${id}`)
  .then(res=>setdata(res.data))
  .catch(error=>console.log(error))
}