
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        let res = await axios.get("https://dummyjson.com/products/categories");
        setCategories(res.data); 
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    }

    getCategories();
  }, []);

  
  return (
    <aside className="w-48 bg-gray-100 p-4 rounded-lg shadow">
      <nav className="flex flex-col space-y-3">
       
        {categories.map((category) => (
          <Link
            to={`${category.slug}`} 
            

            className="px-3 py-2 rounded hover:bg-blue-500 hover:text-white transition"
          >
            {category.name}
            
          </Link>
        ))}
      </nav>
    </aside>
  );
}
