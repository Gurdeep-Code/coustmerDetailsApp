import { FETCH_COUSTMERS_REQUEST, FETCH_COUSTMERS_SUCCESS, FETCH_COUSTMERS_FAILURE } from './coustmersType';

const initialState = {
    loading: false,
    coustmersList: [],
    error: ''
}

const coustmersReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COUSTMERS_REQUEST:
            return {
                ...initialState,
                loading: true,
            }

        case FETCH_COUSTMERS_SUCCESS:
            return {
                loading: false,
                coustmersList : action.payload,
                error : ''
            }
            
        case FETCH_COUSTMERS_FAILURE:
            return {
                loading: false,
                coustmersList : [],
                error : action.payload
            }
        
        default : return state;

    }

}
export default coustmersReducers