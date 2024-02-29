import { configureStore } from "@reduxjs/toolkit";
// import TaskReducer from "../Components/Tasklist";
import reducer from "./slice/Taskslice";

export const store = configureStore({
    reducer:{
        tasks:reducer,
    },
});