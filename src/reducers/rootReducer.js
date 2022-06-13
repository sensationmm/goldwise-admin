
import { combineReducers } from "redux"
import storage from "redux-persist/lib/storage"

import counterReducer from './counterSlice.reducer'
import adminSlice from "./adminSlice.reducer"

const rootPersistConfig = {
    key: "root",
    storage,
    keyPrefix: "gw-",
    whiteList: ["counter", "admin"],
};

const rootReducer = combineReducers({
    counter: counterReducer,
    admin: adminSlice
});

export { rootPersistConfig, rootReducer }