import React from 'react';
import SellerHomePage from './pages/SellerPage/SellerHomePage';
import ProductPage from './pages/SellerPage/ProductPage';


const routesSeller=[
    {
        path:'/shop',
        exact:true,
        main:()=><SellerHomePage/>
    },
    {
        path:'/productshop',
        exact:true,
        main:()=><ProductPage/>
    }
]


export default routesSeller;