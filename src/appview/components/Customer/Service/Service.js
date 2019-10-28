import React,{Component,Fragment} from 'react';
import './Service.scss';


class Service extends Component{
    render(){
        return(
            <Fragment>
                <div className="service">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="service__item">
                                    {/* <img src="./src/public/img/lazmall.png" width="10%"/> node */}
                                    <img src="./src/public/img/service1.png" width="10%"/>
                                    <span>LazMall</span>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="service__item">
                                    <img src="./src/public/img/service2.png" width="10%"/>
                                    <span>Mã Giảm Gía</span>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="service__item">
                                    <img src="./src/public/img/service3.png" width="10%"/>
                                    <span>Dịch Vụ & Nạp Thẻ</span>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="service__item">
                                    <img src="./src/public/img/service4.png" width="10%"/>
                                    <span>Hàng Quốc Tế</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Service;