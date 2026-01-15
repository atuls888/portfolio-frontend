import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Experience from "./components/Experience";
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Login from "./components/Login";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    
    <Route path="/" element={<Layout />}>
      <Route path="" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="skills" element={<Skills />} />
      <Route path="contact" element={<Contact />} />
      <Route path="experience" element={<Experience />} />
       <Route path="/*" element={<About />} />
       {/* <Route path="/login" element={<Login />} /> */}
    </Route>
    {/* <Route path="/login" element={<Login />} /> */}
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
