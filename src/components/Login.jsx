import React from 'react'
import {login} from '../redux store/Login';
import { useState , useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function Login() {
    const [age, setAge] = useState(-99); // Initial age value (adjust as needed)
    const dispatch = useDispatch();
    const selector = useSelector(state => state.Login);

    useEffect(() => {
      console.log('Selector state after dispatch:', selector);
    }, [selector]);


function    handleSubmit(event){
 event.preventDefault();
 const formData = new FormData(event.target)
const obj  = Object.fromEntries(formData)
   if (obj.userName && obj.number) {
      console.log('Dispatching login action with:', obj);
      dispatch(login({
        user: obj.userName,
        email: obj.email,
        password: obj.password,
        adress: obj.adress,
        phone: obj.number,
        isLogin: true
      }));
    } else {
      alert("Please enter name and number");
    }
    console.log('Selector state after dispatch:', selector);
  }
 


// function handleSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(event.target);
//   const obj = Object.fromEntries(formData);
//   if (obj.userName && obj.number) {
//     console.log('Dispatching login action with:', obj);
//     dispatch(login({
//       user: obj.userName,
//       email: obj.email,
//       password: obj.password,
//       adress: obj.adress,
//       phone: obj.number,
//       isLogin: true
//     }));
//   } else {
//     alert("Please enter name and number");
//   }
//   console.log('Selector state after dispatch:', selector);
// }
//email logic 

    // }
      
  return (
    <div style={{display : 'grid' , placeItems : 'center' , zIndex : 2}} >
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

export default Login;
