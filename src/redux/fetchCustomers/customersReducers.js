import { FETCH_CUSTOMERS_REQUEST, FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_FAILURE } from './customersType';

const initialState = {
    loading: false,
    customersList: [],
    error: ''
}

const customersReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CUSTOMERS_REQUEST:
            return {
                ...initialState,
                loading: true,
            }

        case FETCH_CUSTOMERS_SUCCESS:
            return {
                loading: false,
                customersList : action.payload,
                error : ''
            }
            
        case FETCH_CUSTOMERS_FAILURE:
            return {
                loading: false,
                customersList : [],
                error : action.payload
            }
        
        default : return state;

    }

}
export default customersReducers