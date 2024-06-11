import React from "react";
// Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoutesPage, { routes } from "./router/Routes";
// Queries & its devtool
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// configs
import QuriesDefaultOption from "./config/ReactQueryConfigs";
import { getCookie } from "./utils/cookie";



const Routes=createBrowserRouter(routes)
const queryClient=new QueryClient({defaultOptions:QuriesDefaultOption})

function App() {
  return (
    <>

    <QueryClientProvider client={queryClient}> 
          <h1>پروژه دیوار</h1>
        <RouterProvider router={Routes}/>
        <ReactQueryDevtools/>
        <RoutesPage/>
    </QueryClientProvider>
    </>
  )
}

export default App;
