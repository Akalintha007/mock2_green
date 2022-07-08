import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialState = {
    isOpened: Boolean}

let initialState: InitialState  = {
    isOpened : false
}

let backdropSlice =  createSlice({
    name:'backDrop',
    initialState:initialState,
    reducers : {
        handleOpen : (state) => {
            state.isOpened = !state.isOpened
        }
        // function(state,action:PayloadAction){
             
        //     //initialState.isOpened = action.payload
        // }
    }

})
export const {handleOpen} = backdropSlice.actions;
export default backdropSlice.reducer;