import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state,action)=>{

            state.value=state.value+action.payload
            console.log('increment select')
        },
        decrement:(state,action)=>{
            state.value=state.value-action.payload
            console.log('decrement select')
        },
        reset:(state,)=>{
            state.value=0
            console.log('reset select')


        }
    
    }
})
export const {increment,decrement,reset}= counterSlice.actions
export default counterSlice.reducer