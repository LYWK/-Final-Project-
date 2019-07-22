import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import './test.css'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import './assets/css/test1.css'
import FooterWrapper from './components/FooterWrapper'
// import Test from './components/smaple'

// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
//import Mynav from './components/myNav.jsx'
//import { Link as RouterLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Batton from './components/Batton.js';
import Mynav from './components/Mynav.jsx';
//import Link from '@material-ui/core/Link';
//import { MemoryRouter as Router } from 'react-router';
import Board from './components/Board.jsx'
import main from './components/main.jsx'
import Shop from './components/Shop.jsx'
import Top from './components/Top.jsx'
import Login from './components/Login'
import Join from './components/Join'
import Mypage from './components/Mypage'

class App extends Component {
    constructor(props){
      super(props);
    }
  render(){
  return (
    <div className="App">
               
                
          <Router>
                <Grid container>

                <Grid item xs={12} className="test9" >
                  {/* top, logo, pattern  */}
                  <Box >
                 
                       <Top></Top> 
                        <Batton></Batton> 
                       {/* <Test></Test> */}
                                
                  </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box className="test" >
                       <Mynav></Mynav>
                    </Box>
                </Grid>    

                <Grid item xs={12}>
                      <Box className="test2">
                      <Route exact path="/" component={main} />
                      <Route path="/com" component={Board} />
                      <Route path="/shop" component={Shop} />
                      {/* <Route path="/join" component={Join} />
                      <Route path="/login" component={Login} /> */}
                       <Route path="/mypage" component={Mypage} />
                      </Box>
                </Grid>  

                  <Grid item xs={12}>
                  <Box className="footer">
                      <FooterWrapper></FooterWrapper>
                  </Box>
                  </Grid>
            </Grid>
        </Router> 
    </div>
  );
}
}
export default App;
