import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CustomerItem from './pages/customerItem/customerItem';
import ListCustomers from './pages/listCustomer/listCustomer';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ListCustomers}/>
                <Route path="/add-item" exact component={CustomerItem}/>
                <Route path="/add-item/:id" exact component={CustomerItem}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;