import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "subnew",
    initialState: {
        users: []
    },
    reducers : {
        addUser: (state, action) => {
            state.users.push(action.payload)
        }
    }
}) 

export const {addUser} = userSlice.actions

export default userSlice.reducer;