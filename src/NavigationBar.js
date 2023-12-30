import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {BrowserRouter as Router, Link} from "react-router-dom";
import { Paper, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { blue } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';


const preventDefault = (event) => event.preventDefault();

export default function ButtonAppBar() {
  return (
      <Box sx={{ 
        display: 'flex',
        background: '#3f51b5',
        flexWrap: 'wrap',
          typography: 'body1',
          '& > :not(style) ~ :not(style)': {
            ml: 2,}
      }} onClick={preventDefault}>
        <AppBar position="static">
          <Toolbar>
            
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              Upgrad E Shop
            </Typography>
            <Paper sx={{ margin: 3, flexGrow: 1, background: 'white', borderRadius: 2}}>
              <SearchIcon />
              <TextField 
                  hiddenLabel
                  id="hidden-label-normal"
                  placeholder='Search'
                  sx={{width:'80%'}}
                />
            </Paper>
            
            <Typography variant='subtitle' sx={{color: 'white', margin: 1}}><Link to="/" color='inherit'>Home</Link></Typography>
            <Typography variant='subtitle' sx={{color: 'white', margin: 1}}><Link to="/Products" color='inherit'>Add Product</Link></Typography>
            <Typography variant='subtitle' sx={{color: 'red', margin: 1,textDecoration: 'none'}}><Link to="/Login" color='inherit'>Login</Link></Typography>
          </Toolbar>
        </AppBar>
      </Box>
  );
}