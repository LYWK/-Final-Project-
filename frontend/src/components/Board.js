import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
import "../assets/css/table.css";
import Moment from 'react-moment'
class Board extends Component{

        constructor(props){
           super(props)
           this.state = {
               boards: [ ],
               list: []
              }

            this.writeform = this.writeform.bind(this);
            }
         
            writeform(){
               this.props.history.push('/boardform'); 
            }
          
            componentDidMount () {
           
              axios.get(`http://localhost:8080/board/listall`)
              .then(res => {
                  console.log(res.data.list)
                 //alert('test '+JSON.stringify(res.data));
                  // res.data.list.map((item, index)=>{
                  //    return this.setState({
                  //       list:[...this.state.list, index]
                  //    })
                  // })
                  
                  this.setState({
                     list : res.data.list
                  })

               console.log('test' + JSON.stringify(res.data.result));
               
               //  const boards = res.data.result.map(d => [d.id, d.title, d.date,  d.cnt, d.membername]);
               //  this.setState({  boards });
                  });
            }
            renderTableHeader() {  
              return (
              
                <tr >
                  <th style={{width:"10%"}}>글 번호</th>
                  <th style={{width:"50%"}}>글 제목</th>
                  <th style={{width:"10%"}}>작성자</th>
                  <th style={{width:"20%"}}>작성일자</th>
                  <th style={{width:"10%"}}>조회수</th>
                </tr> 
              
              )
           }
        
            // renderTableData(){
            //    {this.state.list.map((contact, index)=>{
            //       return(
            //          <div>
            //             <div>{contact.title}</div>
            //             <div>{contact.date}</div>
            //             <div>{contact.membername}</div>
            //          </div>
            //       )           
            //    })}   
            // }

           render() {
            return (
               <div>
                  <h1 id='title'>게시판</h1>
                  <table id='boards'>
                     <thead>
                     {this.renderTableHeader()}
                     </thead>
                     <tbody>
                        {this.state.list.map((contact,index)=>{
                           return(
                           <tr>
                              <td>{index+1}</td>
                              <td>
                               <Link to={`/boarddetail/${contact.bno}`}>
                              {contact.title} 
                              </Link>
                              </td>
                              <td>{contact.member.membername}</td>
                              <td><Moment format="YYYY.MM.DD HH:mm:ss">{contact.date}</Moment></td>
                              <td>{contact.cnt}</td>
                           </tr>
                           )
                        })}
                     </tbody>
                  </table>
                 <button type="button" class="btn btn-default" onClick={this.writeform} >글쓰기</button>
               </div>
            )
         }
}


export default Board;