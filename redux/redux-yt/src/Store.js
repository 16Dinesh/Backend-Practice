import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/counterSlice.js'
import incSlice from "./redux/page-2/Likes.js";
import userSlice from './redux/commentSlice.js';
import commentSlice  from './redux/userSlice.js';

export const store = configureStore({
    reducer: {
    counter: counterReducer,
    incDncp2: incSlice,
    subnew: userSlice,
    newComment: commentSlice,
  },
})