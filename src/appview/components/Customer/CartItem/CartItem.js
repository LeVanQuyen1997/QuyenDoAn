import React,{Component,Fragment} from 'react';
import './CartItem.scss';


class CartItem extends Component{
    render(){
        return(
            <Fragment>
                <div className="cart_item_content">
                    <div className="product_thumnail">
                        <img src='./src/public/img/logo.png' width="100%"/>
                        
                    </div>
                    <div className="product_name">
                        name1
                    </div>
                    <div className="product_price">$12</div>
                    <div className="product_quantity">
                        <i className="fa fa-minus"></i>
                        <input 
                                type="text" 
                                name="updatecart"
                                
                        />
                        <i className="fa fa-plus"></i>    
                    </div>
                    <div className="product_subtotal">$</div>
                    <div className="product_remove">
                        <i className="fa fa-trash"
                            
                        >
                        </i>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default CartItem;