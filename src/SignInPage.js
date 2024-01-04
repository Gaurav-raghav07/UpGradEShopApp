import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { LockOutlined } from '@mui/icons-material';
import { Paper, TextField, Typography, Button } from '@mui/material';
import {Box,Stack} from '@mui/material';

const SignInPage = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPass] = useState(''); 
    const [shouldRedirect, setShouldRedFlag] = useState(false);

    const LogInHandler = async () => {
        
        const callSignUpAPi = await fetch("http://localhost:8080/api/auth/signin", 
        { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": userEmail,
                "password": userPassword
            })
        }
        );

        const resolveCategories = await callSignUpAPi.json();

        console.log(resolveCategories);

        setShouldRedFlag(true);
    }

    return (
        <Box sx={{width: '100%',height:'500px',display:'flex',direction:'row',justifyContent:'center',alignItems:'center'}}>
            <Paper sx={{width:'40%'}}>
                <Stack 
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    textAlign="center"
                >
                    <Box id='lock-circle-container'>
                        <LockOutlined />
                    </Box>
                    <Typography variant='subtitle1'>Sign In</Typography>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email Address"
                        placeholder='...'
                        sx={{width:'100%'}}
                        name = "username"
                        onChange={evt => setUserEmail(evt.target.value)}
                        />
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        placeholder='...'
                        sx={{width:'100%'}}
                        name = "password"
                        onChange={evt => setUserPass(evt.target.value)}
                        />
                    <Button variant="contained" sx={{width:'100%'}} onClick={() => LogInHandler()}>SIGN IN</Button>
                    {shouldRedirect ? (
                        <Navigate replace to="/Products" />
                    ) : null}
                </Stack>
            </Paper>
        </Box>
    );
}

export default SignInPage;