import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListCostumers from './pages/listCostumers/listCostumers';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ListCostumers}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;