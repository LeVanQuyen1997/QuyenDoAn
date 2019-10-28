import React,{Component,Fragment} from 'react';
import './Cart.scss';
import CartItem from '../CartItem/CartItem';
import CartResult from '../CartResult/CartResult';


class Cart extends Component{
    render(){
        return(
            <Fragment>
                <div className="cart">
                    {/* header_Cart */}
                    <div className="header_cart">
                        <div className="container-fluid">
                            <div className="header_cart_content  text-center">
                                <h1>YOUR SHOPPING CART</h1>
                                <p>Home  Your Shopping Cart</p>
                            </div>
                        </div>
                    </div>
                    {/* content_Cart */}
                    <div className="content_cart">
                        <div className="container-fluid">
                            
                            {/* body_content_cart */}
                            <div className="body_content_cart">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="body_content">
                                            <div className="cart_item_header">
                                                <div>Image</div>
                                                <div>PRODUCT NAME</div>
                                                <div>UNTIL PRICE	</div>
                                                <div>QTY</div>
                                                <div>SUBTOTAL</div>
                                                <div>DELETE</div>
                                            </div>
                                            <CartItem/>
                                            
                                        </div>
                                        <div className="cart_item_bottom">
                                                <div className="icon">
                                                    Tiếp Tục Mua Hàng
                                                </div>
                                                <div className="icon">
                                                    Xóa Tất Cả Sản Phẩm
                                                </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <CartResult/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default Cart;