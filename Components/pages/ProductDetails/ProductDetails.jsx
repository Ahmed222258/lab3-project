import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'

export default function ProductDetails() {
    let {id}=useParams()
    let [product,setproduct]=useState({})
    useEffect(()=>{
        async function getProductDetails() {
            let {data}=await axios.get(`https://dummyjson.com/products/${id}`)
            setproduct(data)
            console.log(data);
            
        }
        getProductDetails()
    },[id])
  return (
    <div>
      <h1>{product.titel}</h1>
        <img src={product.thumbnail} alt="" />
        <p>{product.price}$</p>
        <p>{product.category}</p>
        <p>{product.description}</p>
        <p>{product.brand}</p>
        <p>{product.rating}</p>
        <p>{product.stock}</p>

    </div>
  )
}
