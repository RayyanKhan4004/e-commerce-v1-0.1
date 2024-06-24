import Header from '../src/components/Header'
import React from 'react'
import Card from './components/Card';
import { createBrowserRouter} from 'react-router-dom'
import Login from './components/Login';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Contactus from './components/Contactus';
// export default function App() {
   const routes = createBrowserRouter(
 [
  {
    path: '/', element: <div>
    <Header/>
    <hr />
    <Card/> 
    <hr />
    <Footer/>
  </div>
  },
  // {
  //   path: '/cart', element: <div><Header/> <hr /><h1>cart</h1></div>

  // },
  {
    path: '/login', element: <><Header/> <hr /> <Login/><Footer/></>
  },{
    path: '/cart', element: <><Header/> <hr /> <Cart/><Footer/></>
  },
{
  path : "/contactUS", element : <><Header/> <hr /> <Contactus/> <Footer/></>
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