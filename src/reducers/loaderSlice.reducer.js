import {createSlice} from "@reduxjs/toolkit"

export const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        display: false,
    },
    reducers: {
        showLoader: (state, action) => {
            state.display = true
        },
        hideLoader: (state) => {
            state.display = false
        },
    },
})

export const {showLoader, hideLoader} = loaderSlice.actions

export default loaderSlice.reducer
