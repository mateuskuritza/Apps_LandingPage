import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/home';
import Details from './pages/details';
import getData from './fakeAPI';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

    const [data, setData] = useState();

    useEffect(() => {
        getData().then(r => setData(r));
    }, []);

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/details/:id" exact component={Details} />
            </Switch>
        </Router>
    );
}

export default App;