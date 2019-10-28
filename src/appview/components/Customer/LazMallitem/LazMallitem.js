import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import './LazMallitem.scss';


class LazMallitem extends Component{
    render(){
        return(
            <Fragment>
                <div className="col-md-2">
                   <div className="lazmall_item">
                        <Link to="/shop">
                        <img src="./src/public/img/lazmall1.png" width="100%"/>
                            <div className="description">
                                <p className="text-center">Le Van Quyen</p>
                                <p className="text-center">Duc Phong-Quang Ngai</p>
                            </div>
                            <div className="icon">
                                <img src="./src/public/img/lazmall1.png" width="100%"/>
                            </div>
                        </Link>
                   </div>
                </div>
            </Fragment>
        );
    }

}

export default LazMallitem;