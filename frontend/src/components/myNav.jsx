import React from 'react'
// import Grid from '@material-ui/core/Grid';
// import { makeStyles,useTheme  } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
// import Paper from '@material-ui/core/Paper';
import { BrowserRouter,Router, Route, Link} from "react-router-dom";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import '../assets/css/test1.css'

function TabContainer(props) {
  return (
    <Typography component="div"  style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
 
};

const useStyles = makeStyles(theme => ({

  root: {
   
    flexGrow: 1,
    width: '100%',
    backgroundColor:  "",
  },

}));
const Mynav=()=>{

   const classes = useStyles();
   const theme = useTheme();
   const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }


  // function handleChangeIndex(index) {
  //   setValue(index);
  // }
    return(
      <div className={classes.root}>
      <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                className="test7"
                >
                <Link to = "/"></Link>
                <Link to = "/com" className="test8"><Tab label="Item One" /></Link>
                <Link to = "/shop" className="test8"><Tab label="Item Two" /></Link>
                {/* <Tab label="Item Three" /> */}
              </Tabs>
              </AppBar>
  
        <TabContainer dir={theme.direction}>Item One</TabContainer>
        <TabContainer dir={theme.direction}>Item Two</TabContainer>
        <TabContainer dir={theme.direction}>Item Three</TabContainer>
   
    </div>
   
    );
};

export default Mynav;