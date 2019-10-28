import React,{Fragment}from 'react';
import HeaderTop from './../../components/Customer/HeaderTop/HeaderTop';
import HeaderMain from './../../components/Customer/HeaderMain/HeaderMain';
import ProductDetail from './../../components/Customer/ProductDetail/ProductDetail';
import FooterMain from './../../components/Customer/FooterMain/FooterMain';
function ProductDetailPage(){
    return(
        <Fragment>
            <HeaderTop/>
            <HeaderMain/>
            <ProductDetail/>
            <FooterMain/>
        </Fragment>
    );
}
export default ProductDetailPage;