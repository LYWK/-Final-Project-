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

class Board extends Component{

             state ={
                  boards: [
                      {
                        num: 1,
                        title:  'kate',
                        writer: 'moss',
                        date:   new Date(),
                        cnt : '4',
                      },
                      {
                        num: 2,
                        title:  'anna',
                        writer: 'wintour',
                        date:   new Date(),
                        cnt : '2',
                      },
                      {       
                        num: 3,  
                        title:  'tom',
                        writer: 'bond',
                        date:   new Date(),
                        cnt : '7',
                      },
                      {       
                        num: 4,  
                        title:  'jerry',
                        writer: 'horwitz',
                        date:   new Date(),
                        cnt : '8',
                      }
                  ]
              }
          
  render(){

    const {boards} = this.state;

     return(
       <div>
      

          <table class="table table-striped w-auto" style={{ margin:"auto"}} >

          <tbody>
            <tr>
              <th></th>
              <th>글 제목</th>
              <th>작성자</th>
              <th>작성일자</th>
              <th>조회수</th>
            </tr>
       

          
            {
            boards.map(row => 
              (<BoardItem key={row.num} row={row}/>)
            )
            }
            </tbody>
      </table>
          <Link to = "/boardform"><button type="button" class="btn btn-default" >글쓰기</button></Link> 
   </div>
    );
  }
}

export default Board;