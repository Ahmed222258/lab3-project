// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// export default function Sidebar() {
//     const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     async function getCategories() {
//       try {
//         let res = await axios.get("https://dummyjson.com/products/categories");
//         setCategories(res.data); // ✅ save categories to state
//       } catch (err) {
//         console.error("Error fetching categories:", err);
//       }
//     }

//     getCategories();
//   }, []);
//   return (
//     <aside className="w-48 bg-gray-100 p-4 rounded-lg shadow">
//       <nav className="flex flex-col space-y-3">
//         <Link
//           to=""
//           className="px-3 py-2 rounded hover:bg-blue-500 hover:text-white transition"
//         >
//           All Products
//         </Link>
//         {/* <Link
//           to="Men"
//           className="px-3 py-2 rounded hover:bg-blue-500 hover:text-white transition"
//         >
//           Men
//         </Link>
//         <Link
//           to="Women"
//           className="px-3 py-2 rounded hover:bg-blue-500 hover:text-white transition"
//         >
//           Women
//         </Link> */}
//           {categories.map((cat) => (
//           <Link
//             key={cat}
//             to={`/category/${cat}`} // route per category
//             className="px-3 py-2 rounded hover:bg-blue-500 hover:text-white transition"
//           >
//             {cat}
//           </Link>
//         ))}
//       </nav>
//     </aside>
//   );
// }

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
