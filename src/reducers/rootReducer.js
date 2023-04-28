import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'

import tokenSlice from './tokenSlice.reducer'
import loaderSlice from "./loaderSlice.reducer";
import userSlice from "./userSlice.reducer";
import searchSlice from "./search.reducer";

const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'gw-',
    whiteList: ['counter', 'user', 'apiToken'],
};

const rootReducer = combineReducers({
    user: userSlice,
    token: tokenSlice,
    loader: loaderSlice,
    search: searchSlice
})

export { rootPersistConfig, rootReducer }
