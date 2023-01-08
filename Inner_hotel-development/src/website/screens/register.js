import React, {useState, useEffect} from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { Box, Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import { Jsonconfig } from "../../constant/config";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Register = () =>{
    return(
        <>
        <Header />
        <RegisterPage />
        <Footer />
        </>
    )
}

const RegisterPage = () =>{
    const[ userRegistration, setUserRegistration] = useState({
        username:"",
        email:"",
        password:"",
        cpassword:"",
 });
 const[formErrors, setFormErrors] = useState({});
 const[error, setError] = useState();
 const[errorpass, setErrorPass] = useState();
 const[isSubmit, setIsSubmit] = useState(false);
const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration ({...userRegistration, [name]: value});
}
useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
     console.log(userRegistration);
    }
 },[formErrors]);
 // function for validating the form//
const validate = (values)=>{
    const errors = {};
    if(!values.username){
      errors.username = "Username is required! "
    }
    if(!values.email){
      errors.email = "Email is required! "
    }
     if(!values.password){
       errors.password = "Password is required! "
    }
   return errors
  };
const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(userRegistration));
      setIsSubmit(true);
    const Data = {
        "username":userRegistration.username,
        "email":userRegistration.email,
        "password":userRegistration.password,
    }
    const config = {Jsonconfig};
    axios.post(`http://127.0.0.1:8000/api/register/`,Data,config)
    .then((res)=>{
       console.log(res);
       const token = localStorage.setItem('token');
     })
      .catch((err)=>{
       console.log(err);
       setError("Registration Failed ! User with this email address already exists !")
    })
    setUserRegistration({username: "",  email:"", password:"", })
}
    return(
        <Box>
        <Container>
        <Grid container spacing={0}>
            <Grid item xs={4}> </Grid>
            <Grid item xs={4}>
              <Box className="register-box">
                 <Typography className="register-txt-typo">Don't have an account? Register Now.</Typography>
              </Box>
              <Box className="register-form-box">
                 <form onSubmit={handleSubmit}>
                    <Box className="register-form">
                        <label htmlFor="username" className="label-name">
                            UserName*
                        </label>
                        <input
                        type="text"
                        name="username"
                        id="username"
                        value={userRegistration.username}
                        onChange={handleChange}
                        className="register-name-box"
                        />
                    </Box>
                    <Typography className="error-message">{formErrors.username}</Typography>
                    <Box className="register-form">
                        <label htmlFor="email" className="label-name">
                            Email*
                        </label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        value={userRegistration.email}
                        onChange={handleChange}
                        className="register-name-box"
                        />
                    </Box>
                    <Typography className="error-message">{formErrors.email}</Typography>
                    <Box className="register-form">
                        <label htmlFor="password" className="label-name">
                            Password*
                        </label>
                        <input
                        type="password"
                        name="password"
                        id="password"
                        value={userRegistration.password}
                        onChange={handleChange}
                        className="register-name-box"
                        />
                    </Box>
                    <Typography className="error-message">{formErrors.password}</Typography>
                    <Box className="submit-box">
                        <Button className="submit-button" onClick={handleSubmit}>Register</Button>
                    </Box>
                 </form>
              </Box>
              <Box className="sign-in">
                  <Typography className="sign-in-info">Already a member?<Link to='/user/login' className="sign-in-link"> Sign In</Link></Typography>
                </Box>
            </Grid>
            <Grid item xs={4}></Grid>
        </Grid>
        </Container>
        </Box>
    )
}

export default Register
