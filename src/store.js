import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from "redux-persist"
import { rootPersistConfig, rootReducer } from "./reducers/rootReducer"

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
  devTools: true // TODO: Change it to based on the ENV
})

const persistor = persistStore(store);

export { store, persistor }
