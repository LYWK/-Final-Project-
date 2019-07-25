import React, { Component } from 'react'
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
 //import Button from '@material-ui/core/Button';
// import { createMuiTheme, withStyles,makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
 import TextField from '@material-ui/core/TextField';
 import { Link } from "react-router-dom";
 import { DropButton } from 'react-bootstrap'
 import Join from '../components/Join'
 import Login from '../components/Login'
// import '../assets/css/test1.css'
// import { ThemeProvider } from '@material-ui/styles';
// import { blue, purple } from '@material-ui/core/colors';
// import Axios from 'axios';
//  import Login from './components/Login'
// import Join from './components/Join'
import { Button} from 'react-bootstrap';
import log from '../assets/images/fffffffff.png'
class Batton extends Component{

  state = { reload: false }
  renderItems = () => (
    <div>
      <a href="/mypage">마이페이지</a>
      <Button onClick={this.logout}>로그아웃</Button>
    </div>
  )
  
  render() {
    const temp = sessionStorage.getItem('loginId')
    const temp1 = sessionStorage.getItem('loginName')
    console.dir(temp);
    let loginArea =
      temp == null ? (
            <div>
                {/* <Link  to = "/login"> <button>로그인</button> </Link>
                <Link  to = "/join"> <button>회원가입</button> </Link> */}
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#basicExampleModal1">
                로그인 </button>  
               <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#basicExampleModal">
                회원가입</button> 
            </div>
      ) : (
          // <span>temp1</span>
           <this.renderItems></this.renderItems>
      )

        return(  
          <div style={{position:"absolute", right:"0px", top:"20px"}}>
                {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#basicExampleModal1">
                로그인 </button>  */}
                {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#basicExampleModal">
                회원가입</button>  */}
              {loginArea}
               
               
                <div class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                              <Join></Join>
                      </div>
                  
                    </div>
                  </div>
                </div>


                <div class="modal fade" id="basicExampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                             <Login></Login>
                      </div>
                    </div>
                  </div>
                </div>
              
          </div>
      );
  }
  check = () => {
    // alert('check')
   // this.setState({ reload: !this.state.reload })
 
  }
  logout = () => {
    alert('로그아웃 완료')
    sessionStorage.clear()
    window.location.reload();
  
    //this.check()
    //this.props.history.push("");
   

  }
}

export default Batton;