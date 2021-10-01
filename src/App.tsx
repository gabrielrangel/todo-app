import React, {useState} from 'react';
import {darkTheme, lightTheme} from "./Style/theme";
import Style from "./Style"
import {ThemeProvider} from "styled-components";
import Login from "./Pages/Login";

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
