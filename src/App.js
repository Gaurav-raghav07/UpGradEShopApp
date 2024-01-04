import React from "react";
import ButtonAppBar from "./NavigationBar";
import SignInPage from "./SignInPage";
import SignUp from "./SignUpPage";
import { Button } from "@mui/material";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Products from "./Products";

function App () {
    return (
        <Router>
            <ButtonAppBar />
                <Routes>
                    <Route path="/Login" element={<SignInPage />}></Route>
                    <Route path="/" element={<SignUp />}></Route>
                    <Route path="/Products" element={<Products />}></Route>
                </Routes>
        </Router>
    );
}

export default App;