import React from 'react'
import './Card.css'

function Card({datos,setAllProduct,allProduct,countProductos,setcountproducts,settotal,total}) {

  const agregarProducto=(products)=>{
     
    if(allProduct.find(item=> item.id=== products.id)){
      const pproduct=allProduct.map(item=>item.id=== products.id
        ?{...item,quatity:item.quatity+1}
        :item)

        setcountproducts(countProductos+products.quatity)
        settotal(total=total+products.price*products.quatity)
        return setAllProduct([...pproduct])
    }
    settotal(total=total+products.price*products.quatity)
    setcountproducts(countProductos+products.quatity)
     setAllProduct([...allProduct,products])
  }
  return (
    <div className='card'>
      <div className='card-contenedor-img'>
         <img src={datos.urlImage} alt="imagen-card" className='imagen-card'/>     
      </div>
      <div className='card-contenedor-titulo'>
        <h4 className='card-h4'>{datos.nameProduct}</h4>
        <p>{datos.price}Lps</p>
        <button className='card-btn' onClick={()=>{agregarProducto(datos)}} type="button">Agregar</button>
      </div>
         
    </div>
  )
}

export default Card
