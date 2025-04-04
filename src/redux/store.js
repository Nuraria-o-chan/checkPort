import { configureStore } from "@reduxjs/toolkit";
import { filialReduser } from "./slices/filial";
import { menuReducer } from "./slices/menu";

const store = configureStore({
    reducer:{
        filial: filialReduser,
        menu: menuReducer
    }
})

export default store;