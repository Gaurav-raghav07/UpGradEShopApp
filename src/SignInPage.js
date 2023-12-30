import React from 'react';
import { LockOutlined } from '@mui/icons-material';
import { Paper, TextField, Typography, Button } from '@mui/material';
import {Box,Stack} from '@mui/material';

const SignInPage = () => {
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
                        />
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        placeholder='...'
                        sx={{width:'100%'}}
                        />
                    <Button variant="contained" sx={{width:'100%'}}>SIGN IN</Button>
                </Stack>
            </Paper>
        </Box>
    );
}

export default SignInPage;