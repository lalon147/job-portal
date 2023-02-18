import { createBrowserRouter } from "react-router-dom";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import Main from "../../layouts/Main";

 export const router=createBrowserRouter([

    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
                           
            },{
                path:"/about",
                element:<About></About>
            },{
                path:"/contact",
                element:<Contact></Contact>
            },{
                path:"/login",
                element:<Login></Login>
            },{
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])