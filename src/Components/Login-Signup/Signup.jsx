import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function Signup() {
  const classes = useStyles();

  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "firstName":
          if (!value) {
            stateObj[name] = "Please enter First Name.";
          }
          break;

        case "lastName":
          if (!value) {
            stateObj[name] = "Please enter Last Name.";
          }
          break;

        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  return (
    <div className="app">
      <h4>Complete the form to register.</h4>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          type="text"
          name="firstName"
          placeholder="Enter First Name"
          value={input.firstName}
          onChange={onInputChange}
          onBlur={validateInput}
          variant="outlined"
        />
        {error.firstName && <span className="err">{error.firstName}</span>}

        <TextField
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          value={input.lastName}
          onChange={onInputChange}
          onBlur={validateInput}
          variant="outlined"
        />
        {error.lastName && <span className="err">{error.lastName}</span>}

        <TextField
          type="text"
          name="username"
          placeholder="Enter Username"
          value={input.username}
          onChange={onInputChange}
          onBlur={validateInput}
          variant="outlined"
        />
        {error.username && <span className="err">{error.username}</span>}

        <TextField
          type="password"
          name="password"
          placeholder="Enter Password"
          value={input.password}
          onChange={onInputChange}
          onBlur={validateInput}
          variant="outlined"
        />
        {error.password && <span className="err">{error.password}</span>}

        <TextField
          type="password"
          name="confirmPassword"
          placeholder="Enter Confirm Password"
          value={input.confirmPassword}
          onChange={onInputChange}
          onBlur={validateInput}
          variant="outlined"
        />
        {error.confirmPassword && (
          <span className="err">{error.confirmPassword}</span>
        )}

        <Button variant="contained" className={classes.button}>Submit</Button>
      </form>
    </div>
  );
}

export default Signup;
