import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";
import LoginSlice from "./Login";
const store = configureStore({
    reducer: { cart : slice,
        Login: LoginSlice.reducer
    },
})
export default store