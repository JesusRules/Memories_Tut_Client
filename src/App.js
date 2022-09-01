import React from 'react';
import { Container } from '@material-ui/core'
import Navbar from './components/Navbar/Navbar.js'
import Home from './components/Home/Home.js'
import Auth from './components/Auth/Auth.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
    return (
        <GoogleOAuthProvider clientId="348980586620-guceha6p9meflkheutqc2af9e44ikt47.apps.googleusercontent.com">

        <BrowserRouter>
        <Container maxWidth="lg">
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/auth' exact component={Auth}/>
            </Switch>
        </Container>
        </BrowserRouter>
        
        </GoogleOAuthProvider>
    )
}

export default App;