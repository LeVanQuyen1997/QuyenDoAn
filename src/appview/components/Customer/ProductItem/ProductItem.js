import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import './ProductItem.scss';



class ProductItem extends Component{
    render(){
        return(
            <Fragment>
                
                <div className="col-md-2">
                    <div className="product_item">
                        <Link to="productdetail">
                        <img src="./src/public/img/pro1.png" width="100%"/>
                        <div className="product_item_des">
                            <p className="title">Combo Xà Phòng & Serum Trị Mụn Lưng, Ngực, Cổ Và Toàn Thân...</p>
                            <p className="price">19.000đ</p>
                            <div className="discount">
                                <del>25.0000đ</del> <span>-20%</span>
                            </div>
                            <div className="rating">
                                <div>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                </div>
                                <p>Ho Chi Minh</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
                
            </Fragment>
        );
    }
}

export default ProductItem;