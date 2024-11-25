import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header.js';
import Body from './Body.js';
import { createBrowserRouter , RouterProvider, Outlet} from 'react-router-dom';
import About from './about.js';
import Contact from './contact.js';
import Error from './error.js';
import Card from './card.js';
const Appli = () => {
    return (
        <div className="app">
         <Header></Header>
         <Outlet></Outlet>
         
         
        </div>
    )
};
const Route = createBrowserRouter([
    {
        path:"/",
        element:<Appli></Appli>,
        children:[
            {
                path:"/",
                element:<Body></Body>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/card",
                element:<Card></Card>
            }
        ],
        errorElement:<Error></Error>
    },
   
])
const outside= ReactDOM.createRoot(document.getElementById("abc"))
outside.render(<RouterProvider router = {Route}></RouterProvider>);

