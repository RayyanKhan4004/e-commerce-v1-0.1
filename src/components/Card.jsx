 import React, { useState } from 'react';
import './card.css';
import { addItems  } from '../redux store/slice';
import { useDispatch } from 'react-redux';
import data from '../data/data';
export default function Card() {
  let display = [...data]
  const [searchText , setSearchText ] = useState('')
  const dispatch = useDispatch();
  console.log(data)
function addItemsfx(id){
  console.log(id)
dispatch(addItems({
  key : data[id ].id,
  name : data[id ].name,
  price : data[id ].price,
  quantity : 1
}))
}
// handle search
function handleChange(e){
setSearchText(e.target.value)
// data.filter(items , index){

// }
}
  return (
<>
     <div className='product-card' >    <input  type="search" name="search" id="search" placeholder='search'  className= {`container-nav-s ` } onChange={handleChange} />
     </div>
    <div className="product-card"> 

      {data.map((product, index) => (
        
        <div key={product.id}> 
          <div className="container">
            <div className="wrapper">
              <div className="banner-image">
                <img src={product.imageUrl} alt={product.name} /> 
              </div>

              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p>Price: ${product.price.toFixed(2)}</p> 
            </div>
            <div className="button-wrapper">
              <button className="btn outline">DETAILS</button>
              <button className="btn fill" onClick={()=> addItemsfx(index)} >BUY NOW</button  >
            </div>
          </div>
        </div>
      ))}
    </div></>
  );
}

