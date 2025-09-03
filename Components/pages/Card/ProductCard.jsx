import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({product}) {
  return (
    <Link to={`/product/${product.id}`} className='flex flex-col gap-3 p-4 border rounded-lg shadow hover:shadow-lg transition'>
      <img src={product.thumbnail} alt="" />
        <h2>{product.title}</h2>
        <p>{product.price}$</p>
        <p>{product.category}</p>
    </Link>
  )
}
