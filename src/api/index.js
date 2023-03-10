import axios from 'axios';

const client = axios.create();
const apiUrl = 'https://admin.trinityrental.com/api';


export const getCars = (query = []) => {
    return client.get(`${ apiUrl }/cars?${ query.join('&') }`);
}

export const sendAsk = (data) => {
    return client.post(`${ apiUrl }/feedback`, data)
}

export const bookingRequest = (data) => {
    return client.post(`${ apiUrl }/booking-request`, data)
}
