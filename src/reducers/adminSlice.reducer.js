
import { createSlice } from "@reduxjs/toolkit"

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        isAuthorized: false,
        adminToken: '',
        admin: {
            id: '',
            email: '',
            name: '',
            isEmailVerify: false,
            isLocked: false,
            mobileNo: '',
            telephoneNo: ''
        },
    },
    reducers: {
        setAdmin: (state, action) => {
            state.isAuthorized = true
            state.adminToken = action.payload.adminToken
            state.admin.id = action.payload.adminDetails.idAdminGuid
            state.admin.name = action.payload.adminDetails.name
            state.admin.email = action.payload.adminDetails.email
            state.admin.isEmailVerify = action.payload.adminDetails.isEmailVerify
            state.admin.isLocked = action.payload.adminDetails.isLocked
            state.admin.mobileNo = action.payload.adminDetails.mobileNo
            state.admin.telephoneNo = action.payload.adminDetails.telephoneNo
        },
        clearAdmin: (state) => {
            state.isAuthorized = false
            state.adminToken = ""
            state.admin.id = ""
            state.admin.name = ""
            state.admin.email = ""
            state.admin.isEmailVerify = false
            state.admin.isLocked = false
            state.admin.mobileNo = ""
            state.admin.telephoneNo = ""
        },
    },
});

export const { setAdmin, clearAdmin } = adminSlice.actions

export default adminSlice.reducer