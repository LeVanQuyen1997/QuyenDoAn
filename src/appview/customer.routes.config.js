import React from 'react';

import HomePage from './pages/CustomerPage/HomePage';
import CartPage from './pages/CustomerPage/CartPage';
import LoginPage from './pages/CustomerPage/LoginPage';
import RegisterPage from './pages/CustomerPage/RegisterPage';
import ProductDetailPage from './pages/CustomerPage/ProductDetailPage';
import CheckOutPage from './pages/CustomerPage/CheckOutPage';
import NotFoundPage from './pages/CustomerPage/NotFoundPage';

const routesCustomer=[
    {
        path:'/',
        exact:true,
        main:()=><HomePage/>
    },
    {
        path:'/cart',
        exact:true,
        main:()=><CartPage/>
    },
    {
        path:'/login',
        exact:true,
        main:()=><LoginPage/>
    },
    {
        path:'/register',
        exact:true,
        main:()=><RegisterPage/>
    },
    {
        path:'/checkout',
        exact:true,
        main:()=><CheckOutPage/>
    },
    {
        path:'/productdetail',
        exact:true,
        main:()=><ProductDetailPage/>
    }
];

export default routesCustomer;