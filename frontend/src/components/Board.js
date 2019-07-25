import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";


class Board extends Component{

  render(){
  // const useStyles = makeStyles(theme => ({
  //   root: {
  //     width: '100%',
  //     marginTop: theme.spacing(3),
  //     overflowX: 'auto',
  //   },
  //   table: {
  //     minWidth: 650,
  //   },
  // }));
  
  // const classes = useStyles();
  
  // function createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }
  
  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];
     return(
       <div>
          <table class="table table-striped w-auto" style={{ margin:"auto"}} >

          <thead>
            <tr>
              <th></th>
              <th>글 제목</th>
              <th>작성자</th>
              <th>작성일자</th>
              <th>조회수</th>
            
            </tr>
          </thead>

          <tbody>
            <tr class="table-info">
              <th scope="row">1</th>
              <td>Kate</td>
              <td>Moss</td>
              <td>USA</td>
              <td>New York City</td>

            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Anna</td>
              <td>Wintour</td>
              <td>United Kingdom</td>
              <td>London</td>

            </tr>
            <tr class="table-info">
              <th scope="row">3</th>
              <td>Tom</td>
              <td>Bond</td>
              <td>Spain</td>
              <td>Madrid</td>

            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Jerry</td>
              <td>Horwitz</td>
              <td>Italy</td>
              <td>Bari</td>

            </tr>
            <tr class="table-info">
              <th scope="row">5</th>
              <td>Janis</td>
              <td>Joplin</td>
              <td>Poland</td>
              <td>Warsaw</td>

            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Gary</td>
              <td>Winogrand</td>
              <td>Germany</td>
              <td>Berlin</td>
              
            </tr>
            <tr class="table-info">
              <th scope="row">7</th>
              <td>Angie</td>
              <td>Smith</td>
              <td>USA</td>
              <td>San Francisco</td>
            </tr>
          </tbody>    
      </table>
          <Link to = "/boardform"><button type="button" class="btn btn-default" >글쓰기</button></Link> 
   </div>
    );
  }
}

export default Board;