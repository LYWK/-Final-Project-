import React from 'react';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import './test.css'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Carousel} from 'react-bootstrap';
import dog1 from './assets/images/dog1.jpg'
import dog2 from './assets/images/dog2.jpg'
import dog3 from './assets/images/dog3.jpg'
import Footer from './containers/Footer.jsx'

// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Mynav from './components/myNav.jsx'
//import { Link as RouterLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Link from '@material-ui/core/Link';
//import { MemoryRouter as Router } from 'react-router';


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
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: 'none',
  },
  root: {
    flexGrow: 1,
    backgroundColor: 'darkolivegreen',
  },

}));
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(' yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const rows2 = [
  createData('title', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  function handleChange(event, newValue) {
    setValue(newValue);
  }
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

  return (
    <div className="App">
       <Grid container>

       <Grid item xs={10}></Grid>
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
        
      <Grid item xs={12}>
          <Box className="test">
            <Paper className={classes.root}>
             <Router>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                >
                <Tab label="Item One" ><Link to = "/com"></Link></Tab>
                <Tab label="Item Two" />
                <Tab label="Item Three" />
              </Tabs>
            </Router>
            </Paper>
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
      /> <br></br>
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
      <br></br>
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
      
    
        <Grid item xs={12}>
        <Box className="test2">
         <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={dog1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={dog2}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={dog3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 

          </Box>
        </Grid>

      </Grid>
      <Footer></Footer>
    </div>
  );
}

export default App;
