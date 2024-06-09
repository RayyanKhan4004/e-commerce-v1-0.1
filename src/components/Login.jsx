import React from 'react'
import { useState } from 'react';
function Login() {
    const [age, setAge] = useState(18); // Initial age value (adjust as needed)

  return (
    <div style={{display : 'grid' , placeItems : 'center'}} >
    <form>
      <label  style={{color : 'snow'}} >Username:</label> <br />
      <input required type="text" /> <br />
      <label  style={{color : 'snow'}} >email</label><br />
      <input required type="email" /> <br />
        <label style={{color : 'snow'}} >password</label><br />
        <input required type="password" /> <br />
      <label style={{color : 'snow'}} >phone No.</label><br />
      <input required type="number" /> <br />
      <label style={{color : 'snow'}} >adress</label><br />
      <input  type="text" name="" required /><br />
      <input
style={{marginTop : "10px" }}
type="range"
required
  min="0"
  max="100"
  step="1"
  value={age} // Set the initial value (e.g., age from state)
  onChange={(e) => setAge(e.target.value)} // Handle changes
/> 
<label style={{color : 'snow'}} >Age: {age}</label><br />
<br />
      <button  > submit</button>

      <input type="reset" value="reset" />
    </form> </div>
  )
}

export default Login
