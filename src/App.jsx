import * as React from "react";
// import Loading from "./loader";
import Index from "./routes/Index";
import CourseOne from './routes/CourseOne'
import CourseTwo from './routes/CourseTwo'
import Donation from './routes/Donation'
import Fatwa from './routes/Fatwa'
import Quran from './routes/QuranPage'
import QuranTarjama from './routes/QuranKarimm'
import IT from './Meetteam-Component/IT-Depart'

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
    { path: "/donation", element: (<Donation />) },
    { path: "/fatwa", element: (<Fatwa />) },
    { path: "/quran", element: (<Quran />) },
    { path: "/qurantarjama", element: (<QuranTarjama />) },
    { path: "/it", element: (<IT />) },


  ]);


  return <RouterProvider router={router} />

}


