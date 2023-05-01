import { createSlice } from '@reduxjs/toolkit';

export const caughtSlice = createSlice({
    name: 'caught',
    initialState: {
        caught: 0
    },
    reducers: {
        setCaught: (state, action) => {
            state.caught = action.payload
        },
        incrementCaught: (state) => {
            state.caught++;
        },
        decrementCaught: (state) => {
            state.caught--;
        }
    }
})

export const { setCaught, incrementCaught, decrementCaught } = caughtSlice.actions;

export default caughtSlice.reducer;