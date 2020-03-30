import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Cars from '../pages/Car';
import Country from '../pages/Country';
import Home from '../pages/Home';
import Instrument from '../pages/Instrument';
import Employe from '../pages/Employe';

export default function BasicExample() {
    return (
        <Router>
            <>
                <nav>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/">Home</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/country">Country</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/cars">Cars</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/instruments">Instrument</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/employe">Employe</Link>
                </nav>

                <hr />

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cars" component={Cars}/>
                    <Route path="/country" component={Country}/>
                    <Route path="/instruments" component={Instrument}/>
                    <Route path="/employe" component={Employe}/>
                </Switch>
            </>
        </Router>
    );
}
