import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
    name : 'cartSlice' ,
    initialState: {
        noOfProducts  : 0,
        arrOfProducts : [],
        TotalPrice : 0,
    },
     reducers : {
        addItems : (state , action) => {
            state.arrOfProducts.push({ 
                key: action.payload.key,
                name : action.payload.name,
                price : action.payload.price,
                quantity : 0,
            })
        },
        removeItems : (state , action) => {
           let key = action.payload.key
           state.arrOfProducts = state.arrOfProducts.filter((item) => item.key !== key)
           

        } 
     }
})
 export default cartSlice.reducer
 export const {addItems , removeItems} = cartSlice.reducer