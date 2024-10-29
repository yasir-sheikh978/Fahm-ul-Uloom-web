import * as React from "react";
// import Loading from "./loader";
import Index from "./routes/Index";
import CourseOne from './routes/CourseOne'
import CourseTwo from './routes/CourseTwo'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'; 
export default function App() {


  const router = createBrowserRouter([
    // { path: "/", element: (<Loading />) },
    { path: "/", element: (<Index />) },
    { path: "/courseone", element: (<CourseOne />) },
    { path: "/coursetwo", element: (<CourseTwo />) },


  ]);


  return <RouterProvider router={router} />

}


