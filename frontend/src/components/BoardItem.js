import React,{Component} from 'react';

class BoardItem extends Component{
     render(){
            return(
            
              <tr>
                  <td>{this.props.row.num}</td>
                  <td>{this.props.row.title}</td>
                  <td>{this.props.row.writer}</td>
                  <td>{this.props.row.date.toLocaleDateString('ko-KR')}</td>
                  <td>{this.props.row.cnt}</td>
              </tr>
             
            );

     }
}

export default BoardItem;