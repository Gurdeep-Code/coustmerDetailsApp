import { createStore ,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import coustmersReducers from './fetchCoustmers/coustmersReducers';

const store = createStore(coustmersReducers,applyMiddleware(thunk));

export default store;