import React,{Component,Fragment} from 'react';
import HeaderTop from './../../components/Customer/HeaderTop/HeaderTop';
import HeaderMain from './../../components/Customer/HeaderMain/HeaderMain';

class HeaderContainer extends Component{
    render(){
        return(
            <Fragment>
                <HeaderTop/>
                <HeaderMain/>
            </Fragment>
        )
    }
}

export default HeaderContainer;
