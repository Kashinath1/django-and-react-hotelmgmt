import React, {useState} from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { Box, Container, Grid, Button, Paper } from "@material-ui/core";
import axios from "axios";
import { Jsonconfig } from "../../constant/config";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    return(
        <>
        <Header />
        <LoginPage />
        <Footer />
        </>
    )
}
const LoginPage = () =>{
    const navigate = useNavigate();
    const[userLogin, setUserLogin] = useState({
        username:"",
        password:"",
    });
    const [error,setError]=useState();
    const handleLogin = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setUserLogin({...userLogin, [name]: value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const Data = {
            "username":userLogin.username,
            "password":userLogin.password,
        }
        const config = {Jsonconfig};
        axios.post(`http://127.0.0.1:8000/api/login/`,Data,config)
        .then((res)=>{
           console.log(res);
           navigate("/");
         })
          .catch((err)=>{
           console.log(err);
           setError('Invalid Username or Password!')
        })
    }
    return(
        <Box>
        <Container>
        <Grid container spacing = {2}>
        <Grid item xs={4} ></Grid>
            <Grid item xs={4}>
            <Box className="login" component={Paper}>
            <form onSubmit={handleSubmit}>
                <Box className="login-form-box">
                    <label htmlFor="email" className="login-name">
                        UserName*
                    </label>
                    <input 
                      type="username" 
                      autoComplete="off" 
                      name="username" 
                      id="username" 
                      value={userLogin.username} 
                      onChange={handleLogin} 
                      className="login-name-box"  
                    />
                </Box>

                <Box className="login-form-box">
                    <label htmlFor="password" className="login-name">
                        Password*
                    </label>
                    <input 
                      type="password" 
                      autoComplete="off" 
                      name="password" 
                      id="password" 
                      value={userLogin.password} 
                      onChange={handleLogin} 
                      className="login-name-box" 
                     />
                </Box>
                <Box className="login-button">
                    <Button type="submit" className="login-submit-btn">Log In</Button>
                </Box>
                {error?<label className="invalid">{error}</label>:null}
            </form>
        </Box>
            </Grid>
            <Grid item xs={4}></Grid>
        </Grid>
        </Container>
    </Box>
    )
}

export default Login