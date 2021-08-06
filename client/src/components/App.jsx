import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router';
import { CircularProgress, Container } from '@material-ui/core';

const NavBar = lazy(() => import('./NavBar/NavBar'));
const Products = lazy(() => import('./Products/Products'));


const App = () => {
    return (
        // <Container maxWidth='lg'>
            <Router>
                <Suspense fallback={<CircularProgress />} >
                    <NavBar appName='E-commerce'/>
                    <Switch>
                        <Route exact path='/products' component={Products} />
                    </Switch>
                </Suspense>
            </Router>
    )
}

export default App
