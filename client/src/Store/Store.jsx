import { configureStore} from '@reduxjs/toolkit'
import AuthSlice from "./AuthSlice";
import serviceReducer from './serviceSlice';     //default export can be called by any name


const store = configureStore({
    reducer : {
        auth : AuthSlice.reducer,
        service : serviceReducer
    }
})

export default store;