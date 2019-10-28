import React,{Component,Fragment} from 'react';
import './Product.scss';
import ProductItem from './../ProductItem/ProductItem';



class Product extends Component{
    render(){
        return(
            <Fragment>
                <ProductItem/>
            </Fragment>
        );
    }
}

export default Product;