import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import './test.css'
import './assets/css/test1.css'
import FooterWrapper from './components/FooterWrapper'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Batton from './components/Batton.js';
import Mynav from './components/Mynav.jsx';
import Board from './components/Board'
import main from './components/main.jsx'
import Shop from './components/Shop.jsx'
import Top from './components/Top.jsx'
import Mypage from './components/Mypage'
import BoardForm from './components/BoardForm'
import BoardDetail from './components/BoardDetail'
import BaardUpdate from './components/BoardUpdate'
import BoardUpdate from './components/BoardUpdate';
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
                  <Box className= "upper">
                 
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

                <Grid item xs={12} >
                      <Box className="test2">
                      <Route exact path="/" component={main} />
                      <Route path="/com" component={Board} />
                      <Route path="/shop" component={Shop} />
                      {/* <Route path="/join" component={Join} />
                      <Route path="/login" component={Login} /> */}
                       <Route path="/mypage" component={Mypage} />
                       <Route path="/boardform" component={BoardForm} />
                       <Route path="/updateboard/:id" component={BoardUpdate}/>
                       <Route path="/boarddetail/:id" component={BoardDetail}/>
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
