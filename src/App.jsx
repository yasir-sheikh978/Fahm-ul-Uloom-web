// import * as React from "react";
// // import Loading from "./loader";
// import Index from "./routes/Index";
// import CourseOne from './routes/CourseOne'
// import CourseTwo from './routes/CourseTwo'
// import Donation from './routes/Donation'
// import Fatwa from './routes/Fatwa'
// import Quran from './routes/QuranPage'
// import QuranTarjama from './routes/QuranKarimm'
// import Contact from './routes/contact'
// import IT from './Meetteam-Component/IT-Depart'

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import './index.css'; 
// export default function App() {
  


//   const router = createBrowserRouter([
//     // { path: "/", element: (<Loading />) },
//     { path: "/", element: (<Index />) },
//     { path: "/courseone", element: (<CourseOne />) },
//     { path: "/coursetwo", element: (<CourseTwo />) },
//     { path: "/donation", element: (<Donation />) },
//     { path: "/fatwa", element: (<Fatwa />) },
//     { path: "/quran", element: (<Quran />) },
//     { path: "/qurantarjama", element: (<QuranTarjama />) },
//     { path: "/contact", element: (<Contact />) },
//     { path: "/it", element: (<IT />) },


//   ]);


//   return <RouterProvider router={router} />

// }

import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Loader from './loader'; // Path to the Loader component

const Index = React.lazy(() => import("./routes/Index"));
const CourseOne = React.lazy(() => import('./routes/CourseOne'));
const CourseTwo = React.lazy(() => import('./routes/CourseTwo'));
const Donation = React.lazy(() => import('./routes/Donation'));
const Fatwa = React.lazy(() => import('./routes/Fatwa'));
const Quran = React.lazy(() => import('./routes/QuranPage'));
const QuranTarjama = React.lazy(() => import('./routes/QuranKarimm'));
const Contact = React.lazy(() => import('./routes/contact'));
const IT = React.lazy(() => import('./Meetteam-Component/IT-Depart'));
const Registration = React.lazy(() => import('./routes/registration'));

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: (<Suspense fallback={<Loader />}><Index /></Suspense>) },
    { path: "/courseone", element: (<Suspense fallback={<Loader />}><CourseOne /></Suspense>) },
    { path: "/coursetwo", element: (<Suspense fallback={<Loader />}><CourseTwo /></Suspense>) },
    { path: "/donation", element: (<Suspense fallback={<Loader />}><Donation /></Suspense>) },
    { path: "/fatwa", element: (<Suspense fallback={<Loader />}><Fatwa /></Suspense>) },
    { path: "/quran", element: (<Suspense fallback={<Loader />}><Quran /></Suspense>) },
    { path: "/qurantarjama", element: (<Suspense fallback={<Loader />}><QuranTarjama /></Suspense>) },
    { path: "/contact", element: (<Suspense fallback={<Loader />}><Contact /></Suspense>) },
    { path: "/it", element: (<Suspense fallback={<Loader />}><IT /></Suspense>) },
    { path: "/registration", element: (<Suspense fallback={<Loader />}><Registration /></Suspense>) },
  ]);

  return <RouterProvider router={router} />;
}



