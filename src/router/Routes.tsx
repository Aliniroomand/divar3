import React from 'react';

import { RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage" 
import DashbordPage from '../pages/DashbordPage';
import AuthPage from '../pages/AuthPage';
import AdminPage from '../pages/AdminPage';
import NotFoundPage from '../pages/NotFoundPage';
import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from '../services/getUserProfile';



const routes:RouteObject[]=[
    {path:"/", element:<HomePage/>  },
    {path:"/dashbord", element:<DashbordPage/>  },
    {path:"auth", element:<AuthPage/>  },
    {path:"admin", element:<AdminPage/>  },
    {path:"*", element:<NotFoundPage/>  },
]
export {routes}


const RoutesPage = () => {
    const {data,isLoading,error}=useQuery(["profile"],getUserProfile);
    console.log({data,isLoading,error});
    return (
       <>

       </>
    );
};

export default RoutesPage;





