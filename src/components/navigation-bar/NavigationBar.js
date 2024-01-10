import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import {IconButton, InputBase} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {BrowserRouter as Router, Link} from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./navigation-bar.css";

export default function ButtonAppBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  
  const response = [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "johndoe@gmail.com",
      "password": "123456",
      "isAdmin": true,
      "isLoggedIn": true
    },
    {
      "id": 2,
      "firstName": "John",
      "lastName": "Johnson",
      "email": "johnjohson@gmail.com",
      "password": "123456",
      "isAdmin": false,
      "isLoggedIn": false
    }
  ];
  useEffect(() => {
    // Implement logic to check if the user is logged in and if they are an admin

    const checkUserStatus = async () => {
      try {
        // const response = await axios.get(
        // ); // Replace with your actual endpoint

        setIsLoggedIn(response[1].isLoggedIn);
        setIsAdmin(response[1].isAdmin);
      } catch (error) {
        console.error("Error checking user status:", error);
      }
    };

    checkUserStatus();
  }, []);

  const handleLogout = async () => {
    try {
      // Implement logic to log the user out on the server-side
      // await axios.post('/api/auth/logout'); // Replace with your actual endpoint
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleSearch = async () => {
    try {
      // Implement logic to search for products on the server-side
      // const response = await axios.get(`/api/products?query=${searchQuery}`); // Replace with your actual endpoint
      // Process the response as needed
      // console.log('Search results:', response.data);
    } catch (error) {
      console.error("Error searching for products:", error);
    }
  };
  return (
      
    <AppBar position="static" color="primary" className="navbar">
      <Toolbar>
      <Link to="/" className="login-link" color="inherit">
        <IconButton edge="start" color="inherit" aria-label="upGrad Eshop">
          <ShoppingCartIcon />
          <Typography className="navbar-title" variant="h6">
            upGrad Eshop
          </Typography>
        </IconButton>
        </Link>
        {!isLoggedIn ? (
          <div className="auth-links">
            <Link to="/Login" className="login-link" color="inherit">
              Login
            </Link>
            <Link to="/" className="signup-link" color="inherit">
              Sign Up
            </Link>
          </div>
        ) : (
          <>
            <div className="search-bar">
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search products..."
                inputProps={{ style: { color: "white" } }}
              />
            </div>
            <div className="feature-links">
              <Typography variant="subtitle" sx={{ color: "white", margin: 1 }}>
                <Link to="/" color="inherit">
                  Home
                </Link>
              </Typography>
              <Typography variant="subtitle" sx={{ color: "white", margin: 1 }}>
                <Link to="/Products" color="inherit">
                  Add Product
                </Link>
              </Typography>
              <Button
                to="/login"
                color="error"
                variant="contained"
                className="logout"
              >
                Logout
              </Button>
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}