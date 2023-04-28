import axios from "axios";

const apiclient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export const getAccountInfo = (customerId) => apiclient.get(`user/${customerId}/info`)
export const updateAccountInfo = (customerId, accountinf) => apiclient.put(`user/${customerId}/account/update`, accountinf)
export const getAllTransactionInfo = (customerId) => apiclient.get(`user/${customerId}/transactions`)
export const addTransactionInfo = (customerId,transactioninfo) => apiclient.post(`user/${customerId}/transactions`,transactioninfo)
