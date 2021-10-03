import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

//Providers
import {AuthContextProvider} from "./Context/AuthContext";
import {ThemeContextProvider} from "./Context/ThemeContext";

//Stylesheet
import "./Style/index.scss"

//Pages
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App() {
    return (
        <ThemeContextProvider>
            <AuthContextProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={"/"}><Login/></Route>
                        <Route path={"/home"}><Home/></Route>
                    </Switch>
                </BrowserRouter>
            </AuthContextProvider>
        </ThemeContextProvider>
    );
}

export default App;
