import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import './HeaderLogo.scss';



class HeaderLogo extends Component{
    render(){
        return(
            <Fragment>
                <div className="header__logo">
                    <Link to="/"><img src="./src/public/img/logo.png" width="70%"/> </Link>
                </div>
            </Fragment>
        )
    }
}
export default HeaderLogo;