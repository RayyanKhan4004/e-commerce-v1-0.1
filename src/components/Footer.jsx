import React from 'react'
import '../components/Footer.css'
import { useNavigate } from 'react-router-dom';
function Footer() {
  const navigate = useNavigate();
  const handlenavtoConcatus = () =>{
    navigate('/')
    navigate('contactus')}
    function handleTerms(){
      navigate('/')
      navigate('/terms')
    }
    return (
    < >
      <footer className='container-footer'>
       <div className='p2' style={{color : 'snow',cursor : 'pointer',marginTop: '15px'}} onClick={handlenavtoConcatus} >About us</div>
       <div className='p1' style={{color : 'snow',cursor : 'pointer',marginTop: '15px'}} >&copy; 2024   Rayyan Khan All right reserved 😉</div>
       <div className='p3' style={{color : 'snow',cursor : 'pointer',marginTop: '15px'}} onClick={handleTerms} >terms and conditions</div>
       
        
      </footer>
    </>
  )
}

export default Footer
