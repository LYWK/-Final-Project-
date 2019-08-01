import React,{Component} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
class Join extends Component{
      
     constructor(props){
          super(props)
        this.state = {
            memberid: '',
            password:'',
            membername: '',
            address: '',
            email: '',
        }
     }
      handleUserIDChange = (e) => {this.setState({ memberid: e.target.value })}
      handleFullNameChange = (e) => {this.setState({ password: e.target.value })}
      handleUserGroupChange = (e) => {this.setState({ membername: e.target.value })}
      handleEmailIDChange = (e) => {this.setState({ address: e.target.value })}
      handleMobileChange = (e) => {this.setState({ email: e.target.value })}
    
  
    handleSubmit = event => {
      event.preventDefault();
      let data = {
        memberid:  this.state.memberid,
        password:  this.state.password,
        membername: this.state.membername,
        address : this.state.address,
        email : this.state.email
      }
      let headers = {
        'Content-Type': 'application/json',
        Authorization: 'JWT fefege..'
      }
      axios.post('http://localhost:8080/members', JSON.stringify(data), { headers: headers }) 
        .then(res => {
          console.log(res);
          console.log(res.data);
         // this.props.history.push('/')
         window.location.reload();
        })
    }
     render(){
            return(
            <div style={{width:'400px'}}>
             <form class="text-center border border-light p-5"
                    onSubmit={this.handleSubmit}>

                <p class="h4 mb-4">회원가입</p>

                <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="ID" 
                 name="memberid" onChange={this.handleUserIDChange}></input>

                <input type="password" id="defaultContactFormEmail" class="form-control mb-4" placeholder="Password" 
                 name="password" onChange={this.handleFullNameChange}></input>

                <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Name" 
                 name="membername" onChange={this.handleUserGroupChange}></input>

                <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Address" 
                 name="address" onChange={this.handleEmailIDChange}></input>
                
                <input type="email" id="defaultContactFormEmail" class="form-control mb-4" placeholder="E-mail"
                 name="email" onChange={this.handleMobileChange}></input>

                <button class="btn btn-info btn-block" type="submit" >가입</button>
                <button class="btn btn-secondary" type="reset">다시쓰기</button>
            
             </form>
            </div>
            );
     }
}

export default Join;