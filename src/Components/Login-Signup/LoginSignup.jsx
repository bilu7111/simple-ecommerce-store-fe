import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function LoginForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField id="standard-basic" label="Username" variant="outlined" />
        <TextField
          id="standard-basic"
          label="Password"
          type="password"
          variant="outlined"
        />
      </div>
      <Button variant="contained" className={classes.button}>
        Login
      </Button>
    </form>
  );
}
