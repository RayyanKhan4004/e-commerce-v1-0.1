import React from 'react'
import { useState } from 'react';
function Login() {
    const [age, setAge] = useState(-1); // Initial age value (adjust as needed)



    // function handleSubmit(event) {
    //   event.preventDefault();
    //   const formData = new FormData(event.target);
    //   const obj = {};
    //   for (const [key, value] of formData.entries()) {
    //     obj[key] = value;
    //   }
    //   console.log(obj);
    // }

function    handleSubmit(event){
 event.preventDefault();
 const formData = new FormData(event.target)
const obj  = Object.fromEntries(formData)
console.log(formData , obj)
 

    //email logic 

  



    }
    
   

     
  return (
    <div style={{display : 'grid' , placeItems : 'center'}} >
    <form onSubmit={handleSubmit}>
      <label  style={{color : 'snow'}}  >Username:</label> <br />
      <input required name='userName' type="text" /> <br />
      <label  style={{color : 'snow'}} >email</label><br />
      <input required type="email" name='email' /> <br />
        <label style={{color : 'snow'}} >password</label><br />
        <input required type="password" name='password' /> <br />
      <label style={{color : 'snow'}} >phone No.</label><br />
      <input required type="number" name='number' /> <br />
      <label style={{color : 'snow'}} >adress</label><br />
      <input  type="text" name="adress" required /><br />
      <input
style={{marginTop : "10px" }}
type="range"
name='age'
required
  min="0"
  max="100"
  step="1"
  value={age} 
  onChange={(e) => setAge(e.target.value)} // Handle changes
/> 
<label style={{color : 'snow'}} >Age: {age}</label><br />
<br />
      <button type='submit' > submit</button>

      <input type="reset" value="reset" />
    </form> </div>
  )
}

export default Login
