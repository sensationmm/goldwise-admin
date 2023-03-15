import {createSlice} from "@reduxjs/toolkit"

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: '',
    },
    reducers: {
        search: (state, action) => {
            state.searchTerm = action.payload
        },

    },
})

export const {search} = searchSlice.actions

export default searchSlice.reducer
