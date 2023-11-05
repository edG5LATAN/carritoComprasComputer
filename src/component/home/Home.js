import React, { useState,useEffect } from 'react'
import './Home.css'
import Card from '../card/Card'
import Buscador from '../buscador/Buscador'
import { traerCategoria, traerProductos, verPorCategoria } from '../../services/data'


function Home() {

  const [data,setdata]=useState([])
  const [categoria,setcategoria]=useState([])
  const[allProduct,setAllProduct]=useState([])
  const [total,settotal]=useState(0)
  const[bId,setbId]=useState('')
  const [countProductos,setcountproducts]=useState(0)
  
  useEffect(()=>{
    verPorCategoria(bId,setdata)
  },[bId])

  useEffect(() => {
    mostrarTodo()
  }, [])
  useEffect(()=>{
   traerCategoria(setcategoria)
  },[])

  useEffect(() => {
    traerProductos(setdata)
  }, [])
 
  const mostrarTodo=()=>{
    traerProductos(setdata)
  }

  return (
    <div className='home'>
      <Buscador setbId={setbId} mostrar={mostrarTodo} categoria={categoria} allProduct={allProduct} setAllProduct={setAllProduct} total={total} countProductos={countProductos} setcountproducts={setcountproducts} settotal={settotal}/>
      <div className='home-contenedor-card'>
      {
        data?data.map((dat,index)=>{
          return <Card key={index} datos={dat} setAllProduct={setAllProduct} allProduct={allProduct} countProductos={countProductos} setcountproducts={setcountproducts} total={total} settotal={settotal}/>
        }):<p>cargando</p>
      }
   
     
      </div>
    </div>
  )
}

export default Home
