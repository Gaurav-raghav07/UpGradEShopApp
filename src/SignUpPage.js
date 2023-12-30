import React from 'react';
import { LockOutlined } from '@mui/icons-material';
import { Paper, TextField, Typography, Button } from '@mui/material';
import {Box,Stack} from '@mui/material';
import {Link} from "react-router-dom";

const SignUp = () => {
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
                        <LockOutlined />
                    </Box>
                    <Typography variant='subtitle1'>Sign Up</Typography>
                    <TextField
                        required
                        id="outlined-required"
                        label="First Name"
                        placeholder=''
                        sx={{width:'100%'}}
                        />
                    <TextField
                        required
                        id="outlined-required"
                        label="Last Name"
                        placeholder=''
                        sx={{width:'100%'}}
                        />
                        <TextField
                        required
                        id="outlined-required"
                        label="Email Address"
                        placeholder=''
                        sx={{width:'100%'}}
                        />
                        <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        placeholder=''
                        sx={{width:'100%'}}
                        />
                        <TextField
                        required
                        id="outlined-required"
                        label="Confirm Password"
                        placeholder=''
                        sx={{width:'100%'}}
                        />
                        <TextField
                        required
                        id="outlined-required"
                        label="Contact Number"
                        placeholder=''
                        sx={{width:'100%'}}
                        />
                    <Button variant="contained" sx={{width:'100%'}}>SIGN UP</Button>
                    <Box sx={{width:'100%',textAlign:'end'}}>
                        <Link to="/Login" sx={{color:'#3f51b5'}}>Already have an account? Sign In</Link>
                    </Box>
                </Stack>
            </Paper>
        </Box>
    );
}

export default SignUp;