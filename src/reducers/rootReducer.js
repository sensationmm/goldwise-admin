
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'

import counterReducer from './counterSlice.reducer'
import userSlice from './userSlice.reducer'
import tokenSlice from './tokenSlice.reducer'

const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'gw-',
    whiteList: ['counter', 'admin', 'apiToken'],
};

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userSlice,
    token: tokenSlice
})

export { rootPersistConfig, rootReducer }