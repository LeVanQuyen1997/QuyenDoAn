import React,{Fragment}from 'react';
import HeaderTop from './../../components/Customer/HeaderTop/HeaderTop';
import HeaderMain from './../../components/Customer/HeaderMain/HeaderMain';
import Register from './../../components/Customer/Register/Register';
import FooterMain from './../../components/Customer/FooterMain/FooterMain';
function RegisterPage(){
    return(
        <Fragment>
            <HeaderTop/>
            <HeaderMain/>
            <Register/>
            <FooterMain/>
        </Fragment>
    );
}
export default RegisterPage;