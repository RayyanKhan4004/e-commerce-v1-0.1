import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
    name : 'cartSlice' ,
    initialState: {
        noOfProducts  : 0,
        arrOfProducts : [{
            key : 0,
            price : 0,
            quantity : 0
        }],
        TotalPrice : 0,
    },
     reducers : {
        addItems : (state , action) => {
            console.log(action.payload)
            state.TotalPrice += action.payload.price
            let product = action.payload;
             state.noOfProducts++
            const exestingitem = state.arrOfProducts.find((value , i ) => value.key === product.key)
            if(!exestingitem){
            state.arrOfProducts.push({ 
                key: product.key,
                name : product.name,
                price : product.price,
                quantity : 1,
            })}else{
                state.arrOfProducts.push({ 
                    key: product.key,
                    name : product.name,
                    price : product.price,})
                exestingitem.quantity += 1
                // state.TotalPrice += action.payload.price
            }
        },
        removeItems : (state , action) => {
           if(state.noOfProducts){
            state.noOfProducts--
           } 
            const exestingitem = state.arrOfProducts.find(value => value.key === action.payload.key)
            state.arrOfProducts.find((value => value.key === key))
            if(exestingitem){
                state.arrOfProducts.quantity--;
                state.TotalPrice -= action.payload.price;
            }else{
                let key = action.payload.key
                state.arrOfProducts = state.arrOfProducts.filter((item) => item.key !== key)
            }
           

        } 
     }
})

 export default cartSlice.reducer
 export const {addItems , removeItems} = cartSlice.actions