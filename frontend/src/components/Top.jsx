import React,{Component} from 'react'
import '../assets/css/test1.css'
import { BrowserRouter,Router, Route, Link} from "react-router-dom";
import log from '../assets/images/fffffffff.png'
import log2 from '../assets/images/sdfsdfs.png'
class Top extends Component{
    render(){

        return(
            <>
            <Link to = "/" ><img src={log} className="logo"/></Link>
           </>
        );

    }
}

export default Top;