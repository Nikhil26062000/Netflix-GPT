import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState:{
        gptShow:false,
    },
    reducers:{
        changeGptShow:(state)=>{
            state.gptShow=!state.gptShow;
        }
    }
})

export const {changeGptShow} = gptSlice.actions;

export default gptSlice.reducer;