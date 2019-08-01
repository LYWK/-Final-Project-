import React, { Component } from 'react';
 
import axios from 'axios'
import "../assets/css/table.css";
 
class BoardDetail extends Component{

        constructor(props){
           super(props)
           
           this.state = {
               boards: [ ],
               list: [],
               title:'',
               content: '',
               sort:''

              }
             
        }
     
            componentDidMount(){
                axios.get(`http://localhost:8080/board/${this.props.match.params.id}`).then(r=>{
                alert(JSON.stringify(r.data));    
                console.log(r)
                 this.setState({
                        title: r.data.title,
                      content: r.data.content,
                        sort: r.data.sort
                 })
                }).catch(e=>{
             
                })
                console.log(this.props.match.params.id)
            }
 
           render() {
            return (
               <div>
                    {this.props.match.params.id}
                  <h1 id='title'>React Dynamic Table</h1>
                  <form className="write border" style={{width:'700px', margin:'auto',marginTop:'10px'}} onSubmit = {this.handleSubmit}>
                  <label>유형:</label>
                  <div></div>
   
                  <label>글 제목:</label>
                  <div  class="form-control" name="{this.state.title}" onChange={this.handleChange}/><p></p>
                  {/* <button class="fas fa-camera fa-lg" type="file" name="file" onChange={e => this.handleFileInput(e)}></button> */}
                 
                  <div  class="form-box
                  " name="content" onChange={this.handleChange}>{this.state.content}</div>
                  <div contenteditable="true"></div>
             
                  <button type="submit" class="btn btn-light">확인</button>
                </form>
               </div>
            )
         }
}


export default BoardDetail;