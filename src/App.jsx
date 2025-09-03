import "./App.css";
import Bttn from "../btn/Btn";
import Home from "../Components/pages/Home/Home";
import About from "./../Components/pages/About/About";
import Shop from "../Components/pages/Shop/Shop";
import Layout from "../Components/Layout/Layout";
import Notfound from "../Notfound/Notfound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Allproduct from "./../Components/pages/Shop/Allproduct";
import Men from "./../Components/pages/Shop/Men";
import Categorie from "./../Components/pages/Shop/Categorie";
import ProductDetails from './../Components/pages/ProductDetails/ProductDetails';

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        {
          path: "shop",
          element: <Shop />,
          children: [
            { index: true, element: <Allproduct /> },
            { path: ":categorie", element: <Categorie /> },
          ],
        },
        {path:"product/:id",element:<ProductDetails/>},
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
