import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import caughtSlice from '../components/ProgressBar/caughtSlice.js'

export default configureStore({
    reducer: {
        caught: caughtSlice
    },
})