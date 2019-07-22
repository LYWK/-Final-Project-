import React, { Component } from 'react'
import axios from 'axios';

class Mypage extends Component{
    constructor(props){
        super(props)
        this.state = {
            loginUser:'',
            curpass: '',
            modipass: '',
            modipasschk:''
        }
    }




    componentDidMount () {
        let loginId = sessionStorage.getItem('loginId')
        axios.get(`http://localhost:9000/members/mypage/${loginId}`).then(res => {
          this.setState({ loginUser: res.data })
        })
      }
    
      modipass (e) {
        e.preventDefault()
        // let curpwd = this.state.loginUser.password
        // console.log(curpwd);
        
        if (this.state.curpass != this.state.loginUser.password) {
          alert('현재 비밀번호가 일치하지 않습니다.')
        } else {
          let data = {
            userEmail: this.state.loginUser.password,
            password: this.state.modipass
          }
          let headers = {
            'Content-Type': 'application/json',
            Authorization: 'JWT fefege..'
          }
          axios
            .put(`http://localhost:9000/members/modi`, JSON.stringify(data), { headers: headers })
            .then(res => {
              alert('비밀번호가 수정되었습니다')
              this.setState({ curpass: '', modipass: '', modipasschk: '', open:false })
              // var target = e.target;
              // target.setAttribute("data-dismiss", "modal");
              // target.click();
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
              .delete(`http://localhost:9000/users/delete/${loginId}`)
              .then(res => {
                sessionStorage.clear()
                Swal.fire('탈퇴가 완료되었습니다.')
                this.props.history.push('/')
              })
          }
        })
      }
    
      handleChange = e => {
        const target = e.target
        const name = target.name
        this.setState({
          [name]: target.value
        })
        console.log("loginpwd: " +this.state.loginUser.password)
        console.log("curpass: " +this.state.curpass)
        console.log("modipass: "+this.state.modipass)
        console.log("modipasschk: "+this.state.modipasschk)
      }


    render(){

        let modiPassArea = (
            <form class="text-center border border-light p-5" >

            <p class="h4 mb-4">Sign in</p>
        
        
            <input type="password" name='curpass' placeholder="현재비밀번호"/>

            <input type="modipass" placeholder="새로운비밀번호"/>
            <input type="password" placeholder="새로운비밀번호 확인"/>
            <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>
            
           
            <p>Not a member?
                <a href="">Register</a>
            </p>
        
        
            <p>or sign in with:</p>
        
       
        
        </form>
        )
        return(
            <>
          
            </>
        );

    }
}

export default Mypage;