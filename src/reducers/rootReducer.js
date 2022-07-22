
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'

import userSlice from './userSlice.reducer'
import tokenSlice from './tokenSlice.reducer'

const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'gw-',
    whiteList: ['counter', 'user', 'apiToken'],
};

const rootReducer = combineReducers({
    user: userSlice,
    token: tokenSlice
})

export { rootPersistConfig, rootReducer }