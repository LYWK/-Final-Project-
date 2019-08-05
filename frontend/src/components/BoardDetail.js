import React, { Component } from 'react';
 
import axios from 'axios'
import "../assets/css/table.css";
import { Link } from "react-router-dom";
class BoardDetail extends Component{

        constructor(props){
           super(props)
           
           this.state = {
               boards: [ ],
               list: [],
               title:'',
               content: '',
               sort:'',
               id : '',
               cnt : ''
              }
              this.deleteboard = this.deleteboard.bind(this)
              this.list = this.list.bind(this)
              this.updateboard = this.updateboard.bind(this)
              }

            updateboard(e){
              e.preventDefault();
              let id = this.state.id;
              this.props.history.push(`/updateboard/${id}`)
              
            } 
            list(e){
              e.preventDefault();
              // window.location.reload('/com');
              this.props.history.push('/com')
            }
            deleteboard(e){
              e.preventDefault();
               let id = this.state.id;
               axios.delete(`/board/${id}`).then( res=> {
            
                this.props.history.push('/com')

               }).catch(e=>{
                 alert(e)
               })
              // window.location.reload('http://localhost:3000/com');
            }
            componentDidMount(){
                axios.get(`/board/${this.props.match.params.id}`).then(r=>{
              // alert(JSON.stringify(r.data));    
                console.log(r)
                 this.setState({
                        title: r.data.title,
                      content: r.data.content,
                        sort: r.data.sort,
                        id: r.data.bno,
                        cnt : r.data.cnt + 1
                 })
                  //alert(JSON.stringify(r.data))
                }).catch(e=>{
             
                })
                //console.log(this.props.match.params.id)
            }
 
           render() {
            return (
               <div>
                    {/* {this.props.match.params.id} */}
                  <h1 id='title'>자유 게시판</h1>
                  <form className="detailform"  style={{width:'700px', margin:'auto',marginTop:'10px'}}>
                  <div >유형: {this.state.sort}</div><p></p>
                
                  <div class="md-form">
                    <input type="text" id="inputDisabledEx" class="form-control" disabled></input>
                    <label for="inputDisabledEx" class="disabled">글 제목: {this.state.title}</label>
                  </div>
                  {/* <button class="fas fa-camera fa-lg" type="file" name="file" onChange={e => this.handleFileInput(e)}></button> */}
                  
                  <span >{this.state.content}</span>
                  <p></p>
                  <p></p>
                  <p></p>
                  {/* <button type="submit" class="btn btn-light">확인</button> */}
                  <button class="btn btn-success" onClick={this.list}>목록</button>
                  <button class="btn btn-info" onClick={this.updateboard}>수정</button>
                  <span class="btn btn-blue-grey" onClick={this.deleteboard}>삭제</span>
                  
                </form>
               </div>
            )
         }
}


export default BoardDetail;