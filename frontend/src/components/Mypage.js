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
            memberName: '',
            address: '',
            email: '',
            password:''
        }
        this.modipass = this.modipass.bind(this)
    }




    componentDidMount () {
        let loginId = sessionStorage.getItem('loginId')
        axios.get(`http://localhost:9000/members/mypage/${loginId}`).then(res => {
          this.setState({ loginUser: res.data, 
                          memberName: res.data.memberName, 
                          address: res.data.address, 
                          email: res.data.email,
                          password: res.data.password})
        })
      }
    
      modipass (e) {
        e.preventDefault()
        // let curpwd = this.state.loginUser.password
        // console.log(curpwd);
        
        if (Number(this.state.curpass) != Number(this.state.password)) {
          alert('현재 비밀번호가 일치하지 않습니다.')
        } else {
          let data = {
            memberId:  this.state.loginUser.memberId,
            password:  this.state.modipass,
            memberName: this.state.memberName,
            address : this.state.address,
            email : this.state.email
          }
          let headers = {
            'Content-Type': 'application/json',
            Authorization: 'JWT fefege..'
          }
          axios
            .put(`http://localhost:9000/members/modi`, JSON.stringify(data), { headers: headers })
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
        let loginId = sessionStorage.getItem('loginId')
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
              .delete(`http://localhost:9000/members/${loginId}`)
              .then(res => {
                sessionStorage.clear()
                Swal.fire('탈퇴가 완료되었습니다.')
                //alert('탈퇴가 완료되었습니다.')
                //this.props.history.push('/')
                window.location.reload();
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
            <form class="text-center border border-light" style={{width:'300px'}}>

            <p class="h4 mb-4"> 내 정보 변경 </p>
            <label>비밀번호:</label>
            <input type="password" name='curpass' 
              onChange={function(e) {
              this.setState({curpass: e.target.value});
             }.bind(this)} placeholder="현재비밀번호"/>
            <label>새 비밀번호:</label>
            <input type="password" name='modipass' 
              onChange={function(e) {
              this.setState({modipass: e.target.value});
            }.bind(this)} placeholder="새로운비밀번호"/>
         
            <input type="password" name='modipasschk' 
             onChange={function(e) {
              this.setState({modipasschk: e.target.value});
             }.bind(this)}placeholder="새로운비밀번호 확인"/>

            <input type="text" name='modiname' value={this.state.memberName} 
             onChange={function(e) {
                 this.setState({memberName: e.target.value});
             }.bind(this)}  placeholder="변경할 이름"/>

            <input type="text" name='modiaddress' value={this.state.address} 
             onChange={function(e) {
                 this.setState({address: e.target.value});
             }.bind(this)}  placeholder="변경할 주소"/>

            <input type="text" name='modiemail' value={this.state.email}
              onChange={function(e) {
                this.setState({email: e.target.value});
            }.bind(this)}  placeholder="변경할 이메일"/>

            <button class="btn btn-info btn-block my-4" onClick={this.modipass}>변경하기</button>
        
        </form>
        )
        return(
            <>
          {modiPassArea}
            <table class="table" style={{width:'500px'}} >
              <thead>
                <tr>
                  <th scope="col">아이디</th>
                  <td>{this.state.loginUser.memberId}</td>
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
                  <td>{this.state.loginUser.memberName}</td>
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