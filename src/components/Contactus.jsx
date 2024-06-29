import React from 'react'
import './contactus.css'
function Contactus() {
  return (
    <div style={{display: 'flex',justifyContent :'center' ,alignItems : 'center'}}>
       <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h1>About</h1>
            <p className="text-justify"><h2>Welcome to [Your Store Name]!</h2>  <p>At [Your Store Name], we're passionate about making your shopping experience a breeze. We offer a wide variety of [product types] to suit all your needs and budget. Whether you're a seasoned professional or just starting out, we're confident you'll find what you're looking for at [Your Store Name].</p>

<h3>Why Choose Us?</h3>

<ul>
  <li>**Unbeatable Selection:** We offer a curated selection of [product types] from top brands and hidden gems. </li>
  <li>**Competitive Prices:**  We're committed to providing you with the best value for your money. </li>
  <li>**Seamless Shopping Experience:** Our user-friendly website and helpful customer service team make shopping with us a pleasure. </li>
  <li>**[Unique Selling Proposition]:** We differentiate ourselves by [explain your USP].</li>
</ul>

<p>Looking Forward to Serving You!</p>

<p>We're constantly striving to improve our store and bring you the best possible shopping experience. We value your feedback, so please don't hesitate to contact us with any questions or suggestions.</p>

<p><a href="#">Ready to start shopping? Browse our extensive selection today!</a></p>
</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h1>Categories</h1>
            <ul className="footer-links">
             <li>1</li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h1>Quick Links</h1>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="#TremsAndServices">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by   
         <a href="https://github.com/RayyanKhan4004"> Rayyan Khan</a>.
            </p>
          </div>
        
        </div>
      </div>
</footer>
    </div>
  )
}

export default Contactus
