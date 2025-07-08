import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count: 0,
}
 export const countSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;

        },
        decrement: (state) => {
        if (state.count == 0) {
            return;
        }else{
                state.count -= 1
        }
        },
        incrememtbyInput: (state, actions)=>{
            state.count += actions.payload

        }
    }
}

)
export const {increment, decrement, incrememtbyInput} = countSlice.actions