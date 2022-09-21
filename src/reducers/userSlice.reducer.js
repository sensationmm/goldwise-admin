
import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthorized: false,
        token: '',
        id: '',
        email: '',
        name: '',
        isEmailVerify: false,
        isLocked: false,
        mobileNo: '',
        telephoneNo: ''

    },
    reducers: {
        setAdmin: (state, action) => {
            state.isAuthorized = true
            state.token = action.payload.adminToken
            state.id = action.payload.adminDetails.idAdminGuid
            state.name = action.payload.adminDetails.name
            state.email = action.payload.adminDetails.email
            state.isEmailVerify = action.payload.adminDetails.isEmailVerify
            state.isLocked = action.payload.adminDetails.isLocked
            state.mobileNo = action.payload.adminDetails.mobileNo
            state.telephoneNo = action.payload.adminDetails.telephoneNo
        },
        clearAdmin: (state) => {
            state.isAuthorized = false
            state.token = ""
            state.id = ""
            state.name = ""
            state.email = ""
            state.isEmailVerify = false
            state.isLocked = false
            state.mobileNo = ""
            state.telephoneNo = ""
        },
    },
})

export const { setAdmin, clearAdmin } = userSlice.actions

export default userSlice.reducer
