import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProductCard from './../Card/ProductCard';
export default function Categorie() {
    let {categorie}=useParams()
    console.log(categorie);

    
    
    
    let [categorieproduct,setcategorieproduct]=useState([])
    useEffect(()=>{
        async function getCategoriePeoduct() {
            let res=await axios.get(`https://dummyjson.com/products/category/${categorie}`)
            setcategorieproduct(res.data.products)
        }
        getCategoriePeoduct()
    },[categorie])
    console.log(categorieproduct);
  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {categorieproduct.map((product)=>(<ProductCard product={product}/>))}
   </div>
  )
}
