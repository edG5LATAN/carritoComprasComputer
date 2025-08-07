import React, { useState } from 'react'
import './Buscador.css'

function Buscador({mostrar,setbId,categoria,allProduct,setAllProduct,total,countProductos,settotal,setcountproducts}) {

  const [active,setactive]=useState(false)
   
  const eliminar=()=>{
    setAllProduct([])
    settotal(0)
    setcountproducts(0)
  }

  const ondeleteProductos=(product)=>{
    const resultado=allProduct.filter(item=>item.id!==product.id)

    settotal(total=total-product.price*product.quatity)
    setcountproducts(countProductos-product.quatity)
    setAllProduct(resultado) 
  }

  const cambio=(e)=>{
    if(e.target.value=="todos" ){
      mostrar()
    }else{
      setbId(e.target.selectedIndex)
    }
  }

  return (
    <div className='buscador'>
      <select onChange={(e)=>cambio(e)}>
        <option value="" hidden>buscador</option>
        {
          categoria.map((dat,index)=>{
            return <option key={index} id={dat.id} value={dat.nombre}>{dat.nombre}</option>
          })
        }
        <option value="todos">todos</option>
      </select>
      {/* <input type="text" placeholder='ingrese su nombre' className='buscador-input' /> */}
      {/* <button type="button">buscar</button> */}
      <p className='numero-cantidad'>{countProductos}</p>
      <span onClick={()=>setactive(!active)} class="material-symbols-outlined car">
        shopping_cart
      </span>
      <div className={`card-table ${active ? "":"hidden"}`}>
        <table>
          <thead>
          <tr>
           <td>cantidad</td>
           <td>id</td>
           <td>nombre</td>
           <td>precio</td>
           <td>Delete</td>
          </tr>
          </thead>
          <tbody>
        
            {
              allProduct.map((dat,index)=>{
                return<tr key={index}>
                <td>{dat.quatity}</td>
                <td>{dat.id}</td>
                <td>{dat.nameProduct}</td>
                <td>{dat.price} Lps</td>
                <td ><span className='delete-btn' onClick={()=>ondeleteProductos(dat)} >X</span></td>
                </tr>
                
              })
            }
          
          </tbody>
        </table>
        <h5 className='card-total'>Total <span className='total-products'>{total}</span>Lps</h5>
        <button onClick={()=>eliminar()} className='eliminar' type="button">Borrar</button>
      </div>
    </div>
  )
}

export default Buscador
