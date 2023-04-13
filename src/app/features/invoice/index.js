import { createSlice } from "@reduxjs/toolkit"

const initialState = localStorage.getItem('invoice') ? JSON.parse(localStorage.getItem('invoice')) : {}

export const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {
        setInvoice: (state, action) => {
            return state = action.payload
        },
        statusChanged: (state, action) => {
            const {invoiceLS, id, status} = action.payload
            return state = invoiceLS.map((item) => {
                return id === item._id? {...item, status} : item
            })
        }
    }
})

export const {setInvoice, statusChanged} = invoiceSlice.actions

export default invoiceSlice.reducer