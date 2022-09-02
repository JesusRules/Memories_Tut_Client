import React from 'react';
import { Container } from '@material-ui/core'
import Navbar from './components/Navbar/Navbar.js'
import Home from './components/Home/Home.js'
import Auth from './components/Auth/Auth.js'
import PostDetails from './components/PostDetails/PostDetails'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <GoogleOAuthProvider clientId="348980586620-guceha6p9meflkheutqc2af9e44ikt47.apps.googleusercontent.com">

        <BrowserRouter>
        <Container maxWidth="xl">
            <Navbar />
            <Switch>
                <Route path='/' exact component={() => <Redirect to="/posts" />}/>
                <Route path='/posts' exact component={Home} />
                <Route path='/posts/search' exact component={Home} />
                <Route path='/posts/:id' component={PostDetails} />
                <Route path='/auth' exact component={Auth}/>
                {/* <Route path='/auth' exact component={() => (!user?.result ? <Auth /> : <Redirect to="/posts" />)}/> */}
            </Switch>
        </Container>
        </BrowserRouter>
        
        </GoogleOAuthProvider>
    )
}

export default App;