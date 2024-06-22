import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";
// import Cart from "../components/Cart";
const store = configureStore({
    reducer: { cart : slice,},
})
export default store