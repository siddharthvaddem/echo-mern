import React from 'react'
import {Container} from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter , Switch ,Route} from 'react-router-dom'
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Bebas Neue', 'cursive'
    ].join(','),
  },});

const App = () => {
    
    return (
        <BrowserRouter>
        <ThemeProvider theme={theme}>

        <Container maxwidth="lg">
        <Navbar/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/auth" exact component={Auth}/>
        </Switch>
        </Container>
        </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
