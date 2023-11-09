import { createSlice } from "@reduxjs/toolkit";

const multiLangSlice = createSlice({
    name:"language",
    initialState:{
        langValue:"en",
    },
    reducers:{
        changeLangValue:(state,action)=>{
            state.langValue = action.payload;
        }
    }
})

export const {changeLangValue} = multiLangSlice.actions

export default multiLangSlice.reducer