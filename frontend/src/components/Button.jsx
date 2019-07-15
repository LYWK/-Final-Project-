import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const Button=()=>{
    return(
     <Grid>
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
    </Grid> 
    );
}

export default Button;