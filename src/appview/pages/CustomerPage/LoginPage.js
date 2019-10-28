import React,{Fragment}from 'react';
import HeaderTop from './../../components/Customer/HeaderTop/HeaderTop';
import HeaderMain from './../../components/Customer/HeaderMain/HeaderMain';
import Login from './../../components/Customer/Login/Login';
import FooterMain from './../../components/Customer/FooterMain/FooterMain';

function LoginPage(){
    return(
        <Fragment>
            <HeaderTop/>
            <HeaderMain/>
            <Login/>
            <FooterMain/>
        </Fragment>
    );
}
export default LoginPage;