import React, {Component} from 'react'
import {Form,Button} from 'react-bootstrap'
import Axios from 'axios';

class Login extends Component{
    constructor(props) {
        super(props);
        this.handleIDChange = this.handleIDChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.signIn = this.signIn.bind(this);
        this.state = {
            memberid:'',
            password:'',
         
        };
     
    }

    handleIDChange(e){
        //console.dir(this);
        this.setState({memberid:e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }
    signIn(e){
       // console.dir(this);
        alert('ID is ' + this.state.memberid + ' Password is ' + this.state.password);   
        e.preventDefault();
          let data = {
            memberid: this.state.memberid,
            password: this.state.password
          }
          const headers = {
            'Content-Type': 'application/json'
          }
        Axios.post(`http://localhost:8080/members/login`, JSON.stringify(data),{headers: headers}) 
          .then(res => {
            alert('=== login id is ===> '+ res.data.writerid+', name is '+ res.data.membername);
            sessionStorage.setItem('loginId',res.data.writerid);
            sessionStorage.setItem('loginName',res.data.membername);
            console.log(res);
          alert('=== session storage is id ===>'+sessionStorage.getItem('loginId')+', '+sessionStorage.getItem('loginName'));

          window.location.reload();
        // this.props.history.push("/")
          })
          .catch(function (error) {
            console.log(error);
          });     
    }
    render(){
        return(
        <div style={{width:'400px'}}>
            <form class="text-center border border-light p-5">
                <p class="h4 mb-4">로그인</p>

                    <input type="text" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="ID"
                     name="memberid" onChange={this.handleIDChange}></input>

                    <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password"
                     name="password" onChange={this.handlePasswordChange}></input>

                    <div class="d-flex justify-content-around">
                        <div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember"></input>
                                <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                            </div>
                        </div>
                        <div>
                            <a href="">Forgot password?</a>
                        </div>
                    </div>
                    <button class="btn btn-info btn-block my-4" onClick={this.signIn} type="button">Sign in</button>
            </form>
        </div>
        );
    }

}

export default Login;