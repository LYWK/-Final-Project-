import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'

class Mypage extends Component{
    constructor(props){
        super(props)
        this.state = {
            loginUser:'',
            curpass: '',
            modipass: '',
            modipasschk:'',
            membername: '',
            address: '',
            email: '',
            password:'',
            id : '',
         
        }
        this.modipass = this.modipass.bind(this)
    }
    
    logout = () => {
      window.location.reload('/');
      this.props.history.push('/');
      //this.check()
      //this.props.history.push("");
     
  
    }
    
    componentDidMount () {
        let loginId = sessionStorage.getItem('loginId')
        axios.get(`/members/mypage/${loginId}`).then(res => {
         alert(JSON.stringify(res.data))
          this.setState({ loginUser: res.data, 
                          membername: res.data.membername, 
                          address: res.data.address, 
                          email: res.data.email,
                          password: res.data.password,
                          id: res.data.writerid,
                         
                        })
        })
      }
 
      modipass (e) {
        e.preventDefault()
        // let curpwd = this.state.loginUser.password
        // console.log(curpwd);
        alert(JSON.stringify(this.state.membername))
        if (this.state.curpass != this.state.password) {
          alert('현재 비밀번호가 일치하지 않습니다.')
        } else {
          let data = {
            memberid:  this.state.loginUser.memberid,
            password:  this.state.modipass,
            membername: this.state.membername,
            address : this.state.address,
            email : this.state.email,
            writerid : this.state.loginUser.writerid
          }
          let headers = {
            'Content-Type': 'application/json',
            Authorization: 'JWT fefege..',
          }
          alert(JSON.stringify(data))
          axios
            .put(`/members/modi`, JSON.stringify(data), { headers: headers })
            .then( res => {
              alert('비밀번호가 수정되었습니다')
              this.setState({curpass: '',
                             modipass: '',
                             modipasschk: '',
                            })
                  //this.props.history.push("/mypage")
                  window.location.reload("/mypage");

            })
        }
      }
    
      leave = e => {
        let loginId = this.state.id
        //alert(loginId);
        e.preventDefault()
        Swal.fire({
          title: '탈퇴하시겠습니까?',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '탈퇴',
          cancelButtonText: '취소'
        }).then(result => {
          if (result.value) {
            axios
              .delete(`/members/${loginId}`)
              .then(res => {
                sessionStorage.clear()
                Swal.fire('탈퇴가 완료되었습니다.')
                //alert('탈퇴가 완료되었습니다.')
                this.logout()
               window.location.reload('/');
              
              })
          }
        })
      }
    
      // handleChange = e => {
      //   const target = e.target
      //   const name = target.name
      //   this.setState({
      //     [name]: target.value
      //   })
      //   console.log("loginpwd: " +this.state.loginUser.password)
      //   console.log("curpass: " +this.state.curpass)
      //   console.log("modipass: "+this.state.modipass)
      //   console.log("modipasschk: "+this.state.modipasschk)
      // }


    render(){

        let modiPassArea = (
            <form class="text-center border border-light" style={{width:'350px', margin:'auto',marginTop:'10px'}}>

            <p class="h4 mb-4"> 내 정보 변경 </p>
            <label>비밀번호:</label>
            <input type="password" name='curpass' 
              onChange={function(e) {
              this.setState({curpass: e.target.value});
             }.bind(this)} placeholder="현재비밀번호" /> <p></p>
            <label>새 비밀번호:</label>
            <input type="password" name='modipass' 
              onChange={function(e) {
              this.setState({modipass: e.target.value});
            }.bind(this)} placeholder="새로운비밀번호"/><p></p>
            <label>새 비밀번호 확인:</label>
            <input type="password" name='modipasschk' 
             onChange={function(e) {
              this.setState({modipasschk: e.target.value});
             }.bind(this)}placeholder="새로운비밀번호 확인"/><p></p>
            <label>이름:</label>
            <input type="text" name='modiname' value={this.state.membername} 
             onChange={function(e) {
                 this.setState({membername: e.target.value});
             }.bind(this)}  placeholder="변경할 이름"/><p></p>
              <label>주소:</label>
            <input type="text" name='modiaddress' value={this.state.address} 
             onChange={function(e) {
                 this.setState({address: e.target.value});
             }.bind(this)}  placeholder="변경할 주소"/><p></p>
             <label>이메일:</label>
            <input type="text" name='modiemail' value={this.state.email}
              onChange={function(e) {
                this.setState({email: e.target.value});
            }.bind(this)}  placeholder="변경할 이메일"/><p></p>

            <button class="btn btn-info btn-block my-4" onClick={this.modipass}>변경하기</button>
        
        </form>
        )
        return(
            <>
          {modiPassArea}<p></p><p></p>
          <p class="h4 mb-4" style={{width:'500px', margin:'auto'}}>현재 내 정보</p>
            <table class="table" style={{width:'500px', margin:'auto'}} >
              <thead>
                <tr>
                  <th scope="col">아이디</th>
                  <td>{this.state.loginUser.memberid}</td>
                </tr>
              </thead>
              
              <tbody>
                <tr>
                  <th scope="col">비밀번호</th>
                  <td>{this.state.loginUser.password}</td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <th scope="col">이름</th>
                  <td>{this.state.loginUser.membername}</td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <th scope="col">주소</th>
                  <td>{this.state.loginUser.address}</td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <th scope="col">이메일</th>
                  <td>{this.state.loginUser.email}</td>
                </tr>
              </tbody>
            
            <button class="btn btn-info btn-block my-4" onClick={this.leave}>회원탈퇴</button>
        

            </table>
            </>
        );

    }
}

export default Mypage;