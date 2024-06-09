import Header from '../src/components/Header'
import React from 'react'
import Card from './components/Card';
import { createBrowserRouter} from 'react-router-dom'
import Login from './components/Login';
import Cart from './components/Cart';
// export default function App() {
   const routes = createBrowserRouter(
 [
  {
    path: '/', element: <div>
    <Header/>
    <hr />
    <Card/>
  </div>
  },
  // {
  //   path: '/cart', element: <div><Header/> <hr /><h1>cart</h1></div>

  // },
  {
    path: '/login', element: <><Header/> <hr /> <Login/></>
  },{
    path: '/cart', element: <><Header/> <hr /> <Cart/></>
  }

 ] )
//   return (
//     <div>
//       <Header/>
//       <hr />
//       <Card/>
//     </div>
//   )
// }
export default routes