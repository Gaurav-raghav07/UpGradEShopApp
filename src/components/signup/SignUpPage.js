import React, {Component, useState} from 'react';
import { LockOutlined } from '@mui/icons-material';
import { Paper, TextField, Typography, Button } from '@mui/material';
import {Box,Stack} from '@mui/material';
import {Link, Navigate} from "react-router-dom";
import "./signup.css";


class SignUp extends Component{ 
    state = {
        FirstName : "",
        LastName : "",
        Email : "",
        Password : "",
        ContactNumber : "",
        ShouldRedirect: false
    }

    formHandler = ({target}) => {
        const {name,type,value} = target;
        this.setState({
            [name]: value
        });
    };

    SignUpHandler = async () => {
        console.log(this.state);

        // const callSignUpAPi = await fetch("http://localhost:8080/api/auth/signup", 
        // { 
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         "email": this.state.Email,
        //         "password": this.state.Password,
        //         "firstName": this.state.FirstName,
        //         "lastName": this.state.LastName,
        //         "contactNumber": this.state.ContactNumber
        //     })
        // }
        // );

        // const resolveCategories = await callSignUpAPi.json();

        // console.log(resolveCategories);
        
        this.setState({
            ShouldRedirect: true
        });

    }
    render = function() {
    return (
        <Box sx={{width: '100%',height:'600px',display:'flex',direction:'row',justifyContent:'center',alignItems:'center'}}>
            <Paper sx={{width:'40%'}}>
                <Stack 
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                    textAlign="center"
                >
                    <Box id='lock-circle-container'>
                        <LockOutlined className="lock-icon" />
                    </Box>
                    <Typography variant='subtitle1'>Sign Up</Typography>
                    <div className="signup-form">
                        <div className="signup-form-fields">
                            <div className="first-name">
                    <TextField
                        required
                        id="outlined-required"
                        label="First Name"
                        placeholder=''
                        name= "FirstName"
                        sx={{width:'100%'}}
                        onChange={this.formHandler}
                        />
                        </div>
            <div className="last-name">
                    <TextField
                        required
                        id="outlined-required"
                        label="Last Name"
                        placeholder=''
                        name = "LastName"
                        sx={{width:'100%'}}
                        onChange={this.formHandler}
                        />
                        </div>
            <div className="email">
                        <TextField
                        required
                        id="outlined-required"
                        label="Email Address"
                        placeholder=''
                        name = "Email"
                        sx={{width:'100%'}}
                        onChange={this.formHandler}
                        />
                        </div>
            <div className="password">
                        <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        placeholder=''
                        name = "Password"
                        sx={{width:'100%'}}
                        onChange={this.formHandler}
                        />
                        </div>
            <div className="confirm-password">
                        <TextField
                        required
                        id="outlined-required"
                        label="Confirm Password"
                        placeholder=''
                        sx={{width:'100%'}}
                        />
                        </div>
            <div className="contact-number">
                        <TextField
                        required
                        id="outlined-required"
                        label="Contact Number"
                        placeholder=''
                        name = "ContactNumber"
                        sx={{width:'100%'}}
                        onChange={this.formHandler}
                        />

</div>
          </div>
                    <Button className="signup-button" variant="contained" sx={{width:'100%'}} onClick={this.SignUpHandler}>SIGN UP</Button>
                    {this.state.ShouldRedirect ? (
                        <Navigate replace to="/Login" />
                    ) : null}
                    <Box sx={{width:'100%',textAlign:'end'}}>
                    <Link to="/login" sx={{ color: "#3f51b5" }} className="login-form-link">Already have an account? Sign In</Link>
                    </Box>
                    </div>
                </Stack>
            </Paper>
        </Box>
    );
}
}

export default SignUp;