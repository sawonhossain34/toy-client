import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../Main/ErrorPage";
import Toys from "../pages/Home/Toys/Toys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import AddToy from "../pages/AddToy/AddToy";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/toys',
          element:<Toys></Toys>
        },
        {
          path:'/toyDetails/:id',
          element:<ProtectedRoute><ToyDetails></ToyDetails></ProtectedRoute>,
          loader:({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
          path:'/addtoys',
          element:<AddToy></AddToy>
        }
       
      ]
    },
  ]);

  export default router;