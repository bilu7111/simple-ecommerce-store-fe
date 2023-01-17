import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    width: "25ch"
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // send a post request to the server with the username and password
    axios.post('/login', { username, password })
    .then(response => {
      // set the token in the state
      setToken(response.data.token);
      // store the token in the local storage
      localStorage.setItem('token', response.data.token);
    })
    .catch(error => {
      console.log(error);
    });
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField 
        className={classes.formControl} 
        id="username" 
        label="Username" 
        variant="outlined" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField 
        className={classes.formControl} 
        id="password" 
        label="Password" 
        type="password" 
        variant="outlined" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" className={classes.button}>
        Login
      </Button>
    </form>
  );
}
