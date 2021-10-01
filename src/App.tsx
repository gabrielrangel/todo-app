import React, {useState} from 'react';
import {ThemeProvider} from "styled-components";

import {darkTheme, lightTheme} from "./Style/theme";

import Style from "./Style"
import Login from "./Pages/Login";

import "./Style/fonts.scss"

function App() {
    const prefersDarkMode:Boolean = window.matchMedia("(prefers-color-scheme: dark)").matches
    const [theme, setTheme] = useState(prefersDarkMode ? darkTheme : lightTheme)

    return (
        <ThemeProvider theme={theme}>
            <Style/>
            <Login/>
        </ThemeProvider>
    );
}

export default App;
