import { combineReducers } from 'redux';

import customer from './customer';

const rootReducer = combineReducers({
    customerReducer: customer,
});

export default rootReducer;