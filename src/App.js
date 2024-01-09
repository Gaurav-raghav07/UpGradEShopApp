import React from "react";
import ButtonAppBar from "./components/navigation-bar/NavigationBar";
import SignInPage from "./components/login/SignInPage";
import SignUp from "./components/signup/SignUpPage";
import { Button,ThemeProvider,createTheme } from "@mui/material";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Products from "./components/products/Products";
import ProductsPage from "./ProductsPage";

function App () {
    const theme = createTheme({
        palette: {
          primary: {
            light: "#757ce8",
            main: "#3f50b5",
            dark: "#002884",
            contrastText: "#fff",
          },
          secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
          },
        },
      });

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <ButtonAppBar />
                <Routes>
                    <Route path="/Login" element={<SignInPage />}></Route>
                    <Route path="/" element={<SignUp />}></Route>
                    <Route path="/Products" element={<Products />}></Route>
                    <Route path="/ProductsPage" element={<ProductsPage />}></Route>
                </Routes>
            </ThemeProvider>
        </Router>
    );
}

export default App;