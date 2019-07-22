import React,{Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

class smaple extends Component{
    
    constructor(props){
        super(props)
        this.state={
            show:false,
            setShow:false
        }
    }
   handleClose =() =>{
       this.setState({
           setShow:true
       })
   }
    handleShow=()=>{
        alert("먹어?")
        this.setState({
            setShow:false
        })
    }
    render(){
        return(
            <>
            <Button variant="primary" onClick={this.handleShow}>
              Launch demo modal
            </Button>
      
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )
    }
}
export default smaple