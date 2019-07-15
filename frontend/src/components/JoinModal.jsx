import React from 'react'
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const JoinModal=()=>{

     return(
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
     )
}

export default JoinModal;