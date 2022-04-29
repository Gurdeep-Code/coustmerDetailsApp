import { createStore ,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import customersReducers from './fetchCustomers/customersReducers';

const store = createStore(customersReducers,applyMiddleware(thunk));

export default store;