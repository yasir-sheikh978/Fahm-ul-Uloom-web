import * as React from "react";
// import Loading from "./loader";
import Index from "./routes/Index";
import Course from "./routes/Course";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'; 
export default function App() {


  const router = createBrowserRouter([
    // { path: "/", element: (<Loading />) },
    { path: "/", element: (<Index />) },
    { path: "/course", element: (<Course />) },


  ]);


  return <RouterProvider router={router} />

}


