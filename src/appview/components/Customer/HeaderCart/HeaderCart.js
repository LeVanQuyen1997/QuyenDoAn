import React,{Component,Fragment} from 'react';
import './HeaderCart.scss';
import {Link}  from 'react-router-dom';

class HeaderCart extends Component{
    render(){
        return(
            <Fragment>
                <div className="header__cart">
                    <Link to="/cart" className="cart_item"><img src="./src/public/img/shop-cart.png"/></Link>
                    <span>1</span>
                </div>
            </Fragment>
        );
    }
}

export default HeaderCart;