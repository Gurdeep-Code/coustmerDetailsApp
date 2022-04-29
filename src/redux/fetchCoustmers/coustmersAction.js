import { FETCH_COUSTMERS_REQUEST, FETCH_COUSTMERS_SUCCESS, FETCH_COUSTMERS_FAILURE } from './coustmersType';
import axios from 'axios';

export const fetchCoustmersRequest = ()=>{
    return{
        type : FETCH_COUSTMERS_REQUEST
    }
}

export const fetchCoustmersSuccesss = (coustmersList)=>{
    return{
        type : FETCH_COUSTMERS_SUCCESS,
        payload : coustmersList,
    }
}
export const fetchCoustmersFailure = (errorMsg)=>{
    return{
        type : FETCH_COUSTMERS_FAILURE,
        payload : errorMsg,
    }
}

export const fetchCoustmersLists = ()=>{
    return dispatch=>{
        dispatch(fetchCoustmersRequest());

        axios.get('https://607a90abbd56a60017ba2c5e.mockapi.io/Customer')
        .then(responce=>{
            const coustmersList=responce.data;
            dispatch(fetchCoustmersSuccesss(coustmersList));
        })
        .catch(error=>{
            const errorMsg=error.message;
            dispatch(fetchCoustmersFailure(errorMsg));
        })
    }
}