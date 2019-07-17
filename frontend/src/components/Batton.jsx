import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles,makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../assets/css/test1.css'
import { ThemeProvider } from '@material-ui/styles';
import { blue, purple } from '@material-ui/core/colors';
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
                  right:'0',
                  width: 400,
                  backgroundColor: theme.palette.background.paper,
                  border: '2px solid #000',
                  boxShadow: theme.shadows[5],
                  padding: theme.spacing(2, 4, 4),
                  // outline: 'none',
                },
                button: {
                  margin: theme.spacing(1),
                   
                },
                input: {
                  display: 'none',
                },
                margin: {
                  margin: theme.spacing(1),
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
        const theme = createMuiTheme({
          palette: {
            primary: purple,
          },
        });
       
        const BootstrapButton = withStyles({
          root: {
            // boxShadow: 'none',
            textTransform: 'none',
            fontSize: 16,
            // padding: '6px 12px',
            // border: '1px solid',
            lineHeight: 1.5,
            backgroundColor: '#007bff',
            //borderColor: '#007bff',
            fontFamily: [
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
            '&:hover': {
              backgroundColor: '#0069d9',
              borderColor: '#0062cc',
            },
            '&:active': {
              boxShadow: 'none',
              backgroundColor: '#0062cc',
              borderColor: '#005cbf',
            },
            '&:focus': {
              boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
            },
          },
        })(Button);


      return(
           <>
      {/* <Grid item xs={1}> */}
      {/* <Box className="login"> */}
     
        <div style={{position:"absolute", right:"0px", top:"20px"}}>
            <BootstrapButton onClick={handleOpen} variant="contained"  color="primary"
            className={classes.margin}  >로그인</BootstrapButton> 
      
      {/* </Box> */}
      {/* </Grid> */}
      {/* <Grid item xs={1}> */}
      {/* <Box className="join"> */}
      <ThemeProvider theme={theme}>
            <Button onClick={joinOpen} variant="contained" color="primary"
            className={classes.margin}  >회원가입</Button> 
      </ThemeProvider>
   </div>
      {/* </Box> */}
      {/* </Grid> */}


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
                  <BootstrapButton variant="contained" color="primary" className={classes.button}>
                       Primary
                  </BootstrapButton>
                    
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
      
      <BootstrapButton variant="contained" color="primary" className={classes.button}>
        Primary
      </BootstrapButton>
      <Button variant="contained" color="secondary" className={classes.button}>
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