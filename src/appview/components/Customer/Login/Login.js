import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import './Login.scss';


class Login extends Component{
    render(){
        return(
            <Fragment>
                <div className="login">
                    <div className="container">
                        <div className="login_header">
                            <h4>Chào mừng đến với lazada.Đăng nhập ngay</h4><p>Thành viên mới?<Link to="/register">Đăng Ký</Link> tại đây</p>
                        </div>
                        <div className="main">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">    
                                        <label >Số điện thoại hoặc  email *</label>
                                        <input 
                                            type="email" 
                                            className="form-control"  
                                            placeholder="Vui lòng nhập số điện thoại hoặc email của bạn" 
                                            autoComplete="off"
                                            />
                                        <span>thông tin bắt buộc.</span>
                                    </div>
                                    <div className="form-group">    
                                        <label >Mật Khẩu*</label>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Vui lòng nhập mật khẩu của bạn" 
                                            autoComplete="off"
                                            data-toggle="password"
                                            />
                                            <span>thông tin bắt buộc.</span>
                                    </div>
                                    <div className="text-right">
                                        <Link to="/forgetpassword"><p >Quên mật khẩu?</p></Link>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="form-group login_right">
                                        <button
                                            type="button"
                                            className="form-control"
                                        >
                                            Đăng Nhập
                                        </button>
                                    </div>
                                    <div>
                                        <p>Hoặc,đăng nhập bằng</p>
                                    </div>
                                    <div className="login_social">
                                        <div className="facebook icon text-center">
                                            <i className="fa fa-facebook"></i> Facebook
                                        </div>
                                        <div className="google icon text-center">
                                            <i className="fa fa-google-plus"></i> Google
                                        </div>
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



export default Login;