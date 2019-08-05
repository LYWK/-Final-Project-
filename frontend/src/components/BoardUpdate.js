import React,{Component} from 'react'
import axios from 'axios'
class BoardUpdate extends Component{
     constructor(props){
       super(props)
       this.state={
          title : '',
        content : '',
           sort : '',
  
           id   : ''
      }
      
     }

     componentDidMount()
          {
          //  alert(this.props.match.params.id)
            
            axios.get(`/board/${this.props.match.params.id}`).then(r=>{
         //  alert(JSON.stringify(r.data));    
            console.log(r)
            this.setState({
                    title: r.data.title,
                  content: r.data.content,
                    sort: r.data.sort,
                    id: r.data.id,
                 
            })
            }).catch(e=>{
        
            })
            //console.log(this.props.match.params.id)
          }

      handleSubmit = (e) => {
    
        e.preventDefault();
            let data = {
              title:  this.state.title,
              content:  this.state.content,
              sort: this.state.sort,
              bno: this.props.match.params.id
            }
            let headers = {
              'Content-Type': 'application/json',
              Authorization: 'JWT fefege..'
            }
        
            console.log("++++++++++++++",data)
            //alert(JSON.stringify(data));
            axios.put('/board/modi', JSON.stringify(data), { headers: headers }) 
              .then(res => {
              //  alert(JSON.stringify(res.data));
                console.log(res);
                console.log(res.data);
               this.props.history.push(`/boarddetail/${this.props.match.params.id}`)
              })
      }
     render(){

        return(
          <div>
          <form className="write border" style={{width:'700px', margin:'auto',marginTop:'10px'}} onSubmit = {this.handleSubmit}>
             <label>유형:</label>
             <select name="sort" class="mdb-select md-form md-outline colorful-select dropdown-primary" onChange={function(e) {
                   this.setState({
                       sort: e.target.value
                   })
             }.bind(this)}
             value={this.state.sort}>
               <option  disabled selected>선택</option>
               <option  value="용품&사료">용품&사료</option>
                <option  value="키우다궁금한점">키우다궁금한점</option>
                <option  value="분양">분양</option>
             </select><p></p>

    
             <label>글 제목:</label>
             <input type="text" class="form-control" name="title" onChange={function(e) {
                  this.setState({
                       title: e.target.value  
                  })
             }.bind(this)} value={this.state.title}/><p></p>
             {/* <button class="fas fa-camera fa-lg" type="file" name="file" onChange={e => this.handleFileInput(e)}></button> */}
            
             <textarea type="text" class="form-control" name="content" onChange={function(e) {
                  this.setState({
                       content: e.target.value
                  })
             }.bind(this)} value={this.state.content}/>
             <div contenteditable="true"></div>
        
             <button type="submit" class="btn btn-light">확인</button>
           </form>
          </div>
        );

     }

}
export default BoardUpdate;