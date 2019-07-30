import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import BoardItem from './BoardItem';
import BoardForm from './BoardForm';
import axios from 'axios'
class Board extends Component{

        constructor(props){
           super(props)
           this.state = {
            title:'',
            date: '',
            cnt: '',
                }
            }

            componentDidMount () {
           
              axios.get(`http://localhost:8080/board`).then(res => {
                alert(res.data);
                this.setState({ title: res.data.title, 
                                date: res.data.date, 
                                cnt: res.data.cnt, 
                             })
                  })
                  }

  render(){
     return(
       <div>
    
          <table class="table table-striped w-auto" style={{ margin:"auto"}}  >
          <thead>
            <tr>
              <td>글 제목</td>
              <td>작성일자</td>
              <td>조회수</td>
            </tr> 
            </thead>     
            <tbody>
                <tr>
                  <td>{this.state.title}</td>
                  <td>{this.state.date}</td>
                  <td>{this.state.cnt}</td>
                </tr>
              </tbody>
          </table>
          <Link to = "/boardform"><button type="button" class="btn btn-default" >글쓰기</button></Link> 
   </div>
    );
  }
}


export default Board;