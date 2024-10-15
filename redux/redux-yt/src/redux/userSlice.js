import {createSlice} from '@reduxjs/toolkit'

export const commentSlice = createSlice({
    name: "newComment",
    initialState: {
        comment: []
    },
    reducers : {
        addComment: (state, action) => {
            state.comment.push(action.payload)
        }
    }
})

export const {addComment} = commentSlice.actions;

export default commentSlice.reducer