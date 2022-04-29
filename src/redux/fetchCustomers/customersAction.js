import { FETCH_CUSTOMERS_REQUEST, FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_FAILURE } from './customersType';
import axios from 'axios';

export const fetchCustomersRequest = ()=>{
    return{
        type : FETCH_CUSTOMERS_REQUEST
    }
}

export const fetchCustomersSuccesss = (customersList)=>{
    return{
        type : FETCH_CUSTOMERS_SUCCESS,
        payload : customersList,
    }
}
export const fetchCustomersFailure = (errorMsg)=>{
    return{
        type : FETCH_CUSTOMERS_FAILURE,
        payload : errorMsg,
    }
}

export const fetchCustomersLists = ()=>{
    return dispatch=>{
        dispatch(fetchCustomersRequest());

        axios.get('https://607a90abbd56a60017ba2c5e.mockapi.io/Customer')
        .then(responce=>{
            const customersList=responce.data;
            dispatch(fetchCustomersSuccesss(customersList));
        })
        .catch(error=>{
            const errorMsg=error.message;
            dispatch(fetchCustomersFailure(errorMsg));
        })
    }
}