import React from 'react'
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LoginModal=()=>{

    return(
        
       <Modal
       aria-labelledby="simple-modal-title"
       aria-describedby="simple-modal-description"
       open={open}
       onClose={handleClose} 
      >
       <div style={modalStyle} className={classes.paper}>
         <h2 id="modal-title">로그인</h2>
         <p id="simple-modal-description">
       <form className={classes.container} noValidate autoComplete="off">
             <TextField
               id="outlined-name"
               label="Name"
               className={classes.textField}
               margin="normal"
               variant="outlined"
             />
             <TextField
               id="outlined-uncontrolled"
               label="Password"
               className={classes.textField}
               margin="normal"
               variant="outlined"
             /> <br></br>
                  <Button variant="outlined" color="primary" className={classes.button}>
                       Primary
                  </Button>
                    
                           <div>
                            <Router>
                            <Link to="/">
                            Simple case
                            </Link>
                            <br />
                            <Link  to="/">
                            Ref forwarding
                            </Link>
                            </Router> 
                           </div>  
        </form>
                    </p>
        </div>
        </Modal> 
    )

}

export default LoginModal;