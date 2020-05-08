import React from 'react';
import {ThemeProvider} from "styled-components";
import theme from './styles/theme'
import App from './components/app'

const MocoLayout = () => (
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);

export default MocoLayout;