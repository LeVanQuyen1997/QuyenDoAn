import React,{Fragment} from 'react';
import routesCustomer from './../../customer.routes.config';
import routesSeller from './../../seller.routes.config';
import NotFoundPage from './../../pages/CustomerPage/NotFoundPage';
import {Switch,HashRouter,Route} from 'react-router-dom';
import './App.scss';
import Shop from '../Seller/Shop/Shop';

function App(){
    return(
        <HashRouter>
            <Fragment>
                <Switch>
                {showRoutes(routesCustomer)}
                {showRoutesSeller(routesSeller)}
                <Route path="" exact={true} component={NotFoundPage} /> 
                </Switch>
            </Fragment>
        </HashRouter>
        
    )   
}
const showRoutes=(routesCustomer)=>{
    var result=null;
    if(routesCustomer.length>0){
        result=routesCustomer.map((route,index)=>{
            return <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                        key={index}
                    />
        })
    }
    return result;

    
}
const showRoutesSeller=(routesSeller)=>{
    var result=null;
    if(routesSeller.length>0){
        result=routesSeller.map((route,index)=>{
            return <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                        key={index}
                    />
        })
    }
    return result;
}

export default App;