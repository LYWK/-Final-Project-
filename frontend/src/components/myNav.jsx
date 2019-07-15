import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { BrowserRouter,Router, Route} from "react-router-dom";
import Board from './Board.jsx'

const Mynav=()=>{
  function handleChange(event, newValue) {
    setValue(newValue);
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
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
    return(
        <BrowserRouter>
        <Grid item xs={10}>
        <Box className="test">
          <Paper className={classes.root}>
           <Router>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              >
              <Route path="/com" component={Board}><Tab label="Item One" ></Tab></Route>
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Router>
          </Paper>
        </Box>
      </Grid> 
      </BrowserRouter>

    )
}

export default Mynav;