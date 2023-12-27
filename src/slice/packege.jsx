/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

export const Packages = createSlice({
    name: "packages",
    initialState: [],
    reducers: {
        addPackage(state, action) {
            // console.log(action.payload);
            return( state = [...state,action.payload],
                state = state.sort((a,b)=> a.name > b.name ? 1: -1)                
                );
        },
        removePackage(state, action) {
            return state = state.filter((pack) => pack.id !== action.payload.id);
            
        },

    }
})

export const { addPackage ,removePackage } = Packages.actions;
export default Packages.reducer;
