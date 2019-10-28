import React,{Fragment}from 'react';
import HeaderContainer from './../../containers/HeaderContainer/HeaderContainer';
import BannerContainer from './../../containers/BannerContainer/BannerContainer';
import Service from './../../components/Customer/Service/Service';
import DealContainer from './../../containers/DealContainer/DealContainer';
import DanhRiengContainer from './../../containers/DanhRiengContainer/DanhRiengContainer';
import PhoBien from './../../components/Customer/PhoBien/PhoBien';
import LazMallContainer from  './../../containers/LazMallContainer/LazMallContainer';
import FooterMain from './../../components/Customer/FooterMain/FooterMain';
function HomePage(){
    return(
        <Fragment>
            <HeaderContainer/>
            <BannerContainer/>
            <Service/>
            <DealContainer/>
            <PhoBien/>
            <LazMallContainer/>
            <DanhRiengContainer/>
            <FooterMain/>
        </Fragment>
    );
}
export default HomePage;