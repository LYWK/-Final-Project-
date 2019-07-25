import React,{Component} from 'react'

class BoardForm extends Component{
  render(){
        return(
            <div>
                  <label>유형:</label>
                  <select class="mdb-select md-form md-outline colorful-select dropdown-primary">
                    <option value="" disabled selected>Choose your option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>

                  <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">글 제목:</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
                    </div>
                </div>
            </div>
        );

  }

}

export default BoardForm;