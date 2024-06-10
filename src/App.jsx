import React from "react";
import AuthPage from "./pages/AuthPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./router/Routes";

const Routes=createBrowserRouter(routes)


function App() {
  return (
  <div>
    <h1>پروژه دیوار</h1>
    <RouterProvider router={Routes}/>
  </div>)
}

export default App;
