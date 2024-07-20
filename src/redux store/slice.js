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
        isLoggedIn : false
    },
     reducers : {
        addItems : (state , action) => {
            state.TotalPrice += action.payload.price
            let product = action.payload;
             state.noOfProducts++
             console.log(product.key)
            const exestingitem = state.arrOfProducts.find((value ) => {value.key == action.payload.key
            })
            if(exestingitem == undefined? true : false){
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
            }
        },
        removeItems : (state , action) => {
                
                let num = state.arrOfProducts.length -1  
                let price = 0 ;
                let ind = action.payload.i            
                state.arrOfProducts.splice(ind, 1 )
                state.noOfProducts = num
                state.arrOfProducts.forEach((curr)=>{
                  price += curr.price
                })
                console.log(price)

                state.TotalPrice = price
                },

                
           

     }
})

 export default cartSlice.reducer
 export const {addItems , removeItems} = cartSlice.actions