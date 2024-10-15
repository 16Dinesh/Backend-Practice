import { createSlice } from "@reduxjs/toolkit";

export const incSlice = createSlice({
    name: "incDncp2",

    initialState: {
        value: 0
    },

    reducers : {
        inc: ( state) => {
            state.value += 1
        },

        dec: (state) => {
            state.value -= 1
        },

        incByAmount : (state, action) => {
            state.value += action.payload
        }
    }   
})

export const {inc , dec , incByAmount} = incSlice.actions

export default  incSlice.reducer