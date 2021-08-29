import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/home';
import getData from './fakeAPI';
import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from './interfaces/fakeData';

import "./assets/styles/reset.css";
import "./assets/styles/style.css";
import Details from './pages/details';

function App() {

    const [data, setData] = useState<fakeData[]>([]);

    useEffect(() => {
        getData().then(r => setData(r));
    }, []);

    if (!data[0]) {
        return <strong>Loading...</strong>
    }

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home data={data} />
                </Route>
                <Route path="/details/:id" exact>
                    <Details />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;