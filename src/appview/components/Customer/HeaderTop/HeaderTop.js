import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import './HeaderTop.scss';
class HeaderTop extends Component{
    render(){
        return(
            <Fragment>
                <div className="header__top">
                    <div className="container-fluid">
                            <ul >
                                <li><Link to="/ahihi" className="item">TIẾT KIỆM HƠN VỚI ỨNG DỤNG</Link></li>
                                <li><Link to="/" className="item">BÁN HÀNG CÙNG LAZADA</Link></li>
                                <li><Link to="/" className="item">CHĂM SÓC KHÁCH HÀNG</Link></li>
                                <li><Link to="/" className="item">KIỂM TRA ĐƠN HÀNG</Link></li>
                                <li><Link to="/login" className="item">ĐĂNG NHẬP</Link></li>
                                <li><Link to="/register" className="item">ĐĂNG KÍ</Link></li>
                                <li><Link to="/" className="item">CHANGE LANGUAGE</Link></li>
                            </ul>
                        
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default HeaderTop;