import React,{Fragment}from 'react';
import HeaderContainer from './../../containers/HeaderContainer/HeaderContainer';
import FooterMain from './../../components/Customer/FooterMain/FooterMain';
import ShopContainer from './../../containers/ShopContainer/ShopContainer';
import ShopProductContainer from './../../containers/ShopProductContainer/ShopProductContainer';
function SellerHomePage(){
    return(
        <Fragment>
            <HeaderContainer/>
            <ShopContainer/>
            <ShopProductContainer/>
            <FooterMain/>
        </Fragment>
    );
}
export default SellerHomePage;