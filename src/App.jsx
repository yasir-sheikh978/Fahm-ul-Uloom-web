import * as React from "react";
import Index from "./routes/Index";
import Loading from "./loader";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'; 
export default function App() {


  const router = createBrowserRouter([
    { path: "/", element: (<Loading />) },
    { path: "/Index", element: (<Index />) },


  ]);


  return <RouterProvider router={router} />

}


