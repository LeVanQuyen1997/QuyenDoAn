import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import './Register.scss';


class Register extends Component{
    render(){
        return(
            <Fragment>
                <div className="register">
                    <div className="container">
                        <div className="register_header">
                            <h4>Tạo tài khoản lazada</h4><p>Bạn đã là thành viên?<Link to="/login">Đăng Nhập</Link> tại đây</p>
                        </div>
                        
                        <div className="main">
                            <div className="register_contain">
                                <form action="" method="">
                                    <div className="row">
                                    
                                        {/* left */}
                                        <div className="col-md-6">
                                            <div className="form-group">    
                                                <label >Địa chỉ  email *</label>
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                     
                                                    placeholder="Vui lòng nhập email của bạn" 
                                                    autoComplete="off"
                                                />
                                                <span>thông tin bắt buộc.</span>
                                            </div>
                                            <div className="form-group">    
                                                <label >Email Verification Code*</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    placeholder="" 
                                                    autoComplete="off"
                                                />
                                                <span>thông tin bắt buộc.</span>
                                            </div>
                                            <div className="form-group">    
                                                <label >Mật Khẩu*</label>
                                                <input 
                                                    type="password" 
                                                    className="form-control" 
                                                    placeholder="Tối thiểu 6 kí tự bao gồm chữ và số" 
                                                    autoComplete="off"
                                                    data-toggle="password"
                                                />
                                                <span>thông tin bắt buộc.</span>
                                            </div>
                                            <div className="form-group ngay_sinh">
                                                <div>
                                                    <label>Ngày sinh</label>
                                                    <div className="select">
                                                        <select 
                                                            id="thang"
                                                            name="thang" 
                                                            className="form-control">
                                                            <option value="1">thang 1</option>
                                                            <option value="2">thang 2</option>
                                                
                                                        </select>
                                                        <select 
                                                            name="ngay" 
                                                            className="form-control">
                                                            <option value="9">09</option>
                                                            <option value="7">07</option>
                                                    
                                                        </select>
                                                        <select 
                                        
                                                            name="nam" 
                                                            className="form-control">
                                                            <option value="2019">2019</option>
                                                            <option value="2017">2017</option>
                                            
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="gioi_tinh">
                                                    <label>Giới tính</label>
                                                    <select 
                                                        name="sltGioiTinh"
                                                        className="form-control">
                                                            <option value="1">Nam</option>
                                                            <option value="0">Nữ</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        {/* right */}
                                        <div className="col-md-6 register_right">
                                            <div className="form-group">    
                                                <label >Họ tên*</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    placeholder="" 
                                                    autoComplete="off"
                                                />
                                                <span>thông tin bắt buộc.</span>
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    <input
                                                        
                                                        type="checkbox"
                                                        name="chblazada"
                                                        value=""
                                                    /> &nbsp;
                                                    Tôi muốn nhận các thông tin khuyến mãi từ Lazada.
                                                </label>

                                            </div>
                                            <div className="form-group">
                                                <button
                                                    type="button"
                                                    className="form-control"
                                                >
                                                Đăng Ký
                                                </button>
                                            </div>

                                            <div>
                                                <p>Tôi đồng ý với<Link to=""> Chính sách bảo mật Lazada</Link></p>
                                                <p>Hoặc Đăng kí với</p>
                                            </div>

                                            <div className="form-group">
                                                <button
                                                    id="sdt"
                                                    type="button"
                                                    className="form-control"
                                                >
                                                Đăng Ký bằng số điện thoại
                                                </button>
                                            </div>

                                            <div className="register_social">
                                                <div className="facebook icon">
                                                    <i className="fa fa-facebook"></i> Facebook
                                                </div>
                                                <div className="google icon">
                                                    <i className="fa fa-google-plus"></i> Google
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}



export default Register;