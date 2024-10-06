import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";



const persistConfig= {
    key:"root",
    storage,
    version:1
}

const reducers= combineReducers({
    cart: CartSlice
})

const persistedStore= persistReducer(persistConfig, reducers)



const store= configureStore({
    reducer: persistedStore
        
    
})

export default store