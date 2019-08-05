import React,{Component} from 'react'
import Axios from 'axios';

class BoardForm extends Component{

        constructor(props){
          super(props)
        this.state = {
            title: '',
            content:'',
            date: '',
            cnt: '',
            sort:'',
            writerid: ''
        }
      }
      
  handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
  }
  handleSubmit = (e) => {
        e.preventDefault();
        let data = {
          title:  this.state.title,
          content:  this.state.content,
          date : this.state.date,
          cnt : this.state.cnt,
          writerid : sessionStorage.getItem('loginId'),
           sort: this.state.sort
        }
        let headers = {
          'Content-Type': 'application/json',
          Authorization: 'JWT fefege..'
        }
       // alert(JSON.stringify(data));
        Axios.post('/board', JSON.stringify(data), { headers: headers }) 
          .then(res => {
           // alert(JSON.stringify(res.data));
            console.log(res);
            console.log(res.data);
           this.props.history.push('/com')
          })
  }

  render(){
    
        return(
            <div>
               <form className="write border" style={{width:'700px', margin:'auto',marginTop:'10px'}} onSubmit = {this.handleSubmit}>
                  <label>유형:</label>
                  <select name="sort" class="mdb-select md-form md-outline colorful-select dropdown-primary" onChange={this.handleChange}>
                    <option  disabled selected>선택</option>
                    <option  value="용품&사료">용품&사료</option>
                    <option  value="키우다궁금한점">키우다궁금한점</option>
                    <option  value="분양">분양</option>
                  </select><p></p>

         
                  <label>글 제목:</label>
                  <input type="text" class="form-control" name="title" onChange={this.handleChange}/><p></p>
                  {/* <button class="fas fa-camera fa-lg" type="file" name="file" onChange={e => this.handleFileInput(e)}></button> */}
                 
                  <textarea type="text" class="form-control" name="content" onChange={this.handleChange}/>
                  <div contenteditable="true"></div>
             
                  <button type="submit" class="btn btn-light">확인</button>
                </form>
            </div>
        );

  }
}

export default BoardForm;