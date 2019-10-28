import React,{Fragment}from 'react';
import HeaderTop from './../../components/Customer/HeaderTop/HeaderTop';
import HeaderMain from './../../components/Customer/HeaderMain/HeaderMain';
import Cart from './../../components/Customer/Cart/Cart';
import FooterMain from './../../components/Customer/FooterMain/FooterMain';
function CartPage(){
    return(
        <Fragment>
            <HeaderTop/>
            <HeaderMain/>
            <Cart/>
            <FooterMain/>
        </Fragment>
    );
}
export default CartPage;