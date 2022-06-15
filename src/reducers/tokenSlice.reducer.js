
import { createSlice } from "@reduxjs/toolkit"

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        apiToken: ''
    },
    reducers: {
        setApiToken: (state, action) => {
            state.apiToken = action.payload
        },
        clearApiToken: (state) => {
            state.apiToken = ''
        },
    },
})

export const { setApiToken, clearApiToken } = tokenSlice.actions

export default tokenSlice.reducer