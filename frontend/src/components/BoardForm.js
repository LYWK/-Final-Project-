import React,{Component} from 'react'
import Axios from 'axios';


class BoardForm extends Component{

   

  render(){
        
    
        return(
            <div>
               <form className="write border" style={{width:'700px', margin:'auto',marginTop:'10px'}}>
                  <label>유형:</label>
                  <select class="mdb-select md-form md-outline colorful-select dropdown-primary">
                    <option value="" disabled selected>선택</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select><p></p>

         
                  <label>글 제목:</label>
                  <input type="text" class="form-control" name="title" onChange={null}/><p></p>
                  <button class="fas fa-camera fa-lg" type="file" name="file" onChange={e => this.handleFileInput(e)}></button>
                 
                  <textarea type="text" class="form-control" name="content" onChange={null}/>
                  <div contenteditable="true"></div>
             
                  <button type="button" class="btn btn-light">확인</button>


           
                </form>
            </div>
        );

  }

}

export default BoardForm;