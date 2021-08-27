import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/home';
import Details from './pages/details';

function App() {
    return (
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/details/:id" exact component={Details} />
        </Router>
    );
}

export default App;