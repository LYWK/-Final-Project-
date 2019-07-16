import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Batton=()=>{
      function rand() {
            return Math.round(Math.random() * 20) - 10;
          }
          
      function getModalStyle() {
            const top = 50 + rand();
            const left = 50 + rand();
          
            return {
              top: `${top}%`,
              left: `${left}%`,
              transform: `translate(-${top}%, -${left}%)`,
            };
      }
      const useStyles = makeStyles(theme => ({ 
            paper: {
                  position: 'absolute',
                  width: 400,
                  backgroundColor: theme.palette.background.paper,
                  border: '2px solid #000',
                  boxShadow: theme.shadows[5],
                  padding: theme.spacing(2, 4, 4),
                  outline: 'none',
                },
      }));
      const classes = useStyles();
      const [modalStyle] = React.useState(getModalStyle);
      const [open, setOpen] = React.useState(false);
      const [open1, setOpen1] = React.useState(false);
      const handleOpen = () => {
         
            setOpen(true);
          };
          const handleClose = () => {
          
            setOpen(false);
          };
          const joinOpen = () => {
        
            setOpen1(true);
          };
          const joinClose = () => {

            setOpen1(false);
        };



        
      return(
 
           <>
      <Grid item xs={1}>
      <Box className="login">
            <Button onClick={handleOpen} variant="contained" color="primary"   
            className={classes.button}>로그인</Button> 
      </Box>
      </Grid>
      <Grid item xs={1}>
      <Box className="join">
            <Button onClick={joinOpen} variant="contained" color="primary"
            className={classes.button}>회원가입</Button> 
      </Box>
      </Grid>


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

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open1}
        onClose={joinClose} size = "large"
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="modal-title">회원가입</h2>
          <p id="simple-modal-description">
          <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-name"
        label="Name"
        className={classes.textField}
        margin="normal"
      /> <br/>
      <TextField
        id="standard-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
      /><br></br>
      <TextField
        id="standard-read-only-input"
        label="Read Only"
        className={classes.textField}
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
      /><br></br>
      <TextField
        id="standard-multiline-flexible"
        label="Multiline"
        multiline
        rowsMax="4"
        className={classes.textField}
        margin="normal"
      /><br></br>
     
      <TextField
        id="standard-with-placeholder"
        label="With placeholder"
        placeholder="Placeholder"
        className={classes.textField}
        margin="normal"
      />
  <br></br>
      <TextField
        id="standard-number"
        label="Number"
     
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
      <br></br>
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        className={classes.textField}
        margin="normal"
      />
 
      <br></br>
      
      <Button variant="outlined" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Secondary
      </Button>
    </form>
          </p>
        </div>
      </Modal> 

      
     </>
  
    );
}

export default Batton;