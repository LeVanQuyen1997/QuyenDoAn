import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import './LazMall.scss';

import LazMallitem from './../LazMallitem/LazMallitem';


class LazMall extends Component{
    render(){
        return(
            <Fragment>
                <div className="lazmall">
                     <div className="container-fluid">
                        <div className="lazmall_header">
                            <h4>LazMall</h4><span>Xem Thêm > </span>
                        </div>
                        <div className="lazmall_container">
                            <div className="row">
                                <LazMallitem/>
                                <LazMallitem/>
                                <LazMallitem/>
                                <LazMallitem/>
                                <LazMallitem/>
                                <LazMallitem/>
                            </div>
                        </div>
                     </div>
                </div>
            </Fragment>
        );
    }

}

export default LazMall;