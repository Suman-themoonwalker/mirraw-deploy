import React,{Component} from 'react';
export class Footer extends Component{
    render(){
        return(
<footer className="page-footer">

<div className="container text-center text-md-left mt-5">
    <div className="row">
      
      <div className="col-md-2 col-sm-12 mx-auto mb-4">
        <h6 className="text-uppercase font-weight-bold" id="help">Help</h6>
        <ul className="help list-unstyled" id="ul_help">
          <li className="my-2 color:light"><a href="#">Survey</a></li>
          <li className="my-2"><a href="#">How To Buy</a></li>
          <li className="my-2"><a href="#">Track Order</a></li>
          <li className="my-2"><a href="#">Payments</a></li>
          <li className="my-2"><a href="#">Shipping</a></li>
          <li className="my-2"><a href="#">Cancellation</a></li>
          <li className="my-2"><a href="#">FAQs</a></li>
          <li className="my-2"><a href="#">Helpdesk</a></li>
        </ul>
      </div>

      <div className="col-md-2 col-sm-12 mx-auto mb-4">
        <h6 className="text-uppercase font-weight-bold" id="company">Company</h6>
        <ul className="list-unstyled" id="ul_company">
          <li className="my-2"><a href="#">About Us</a></li>
          <li className="my-2"><a href="#">Contact Us</a></li>
          <li className="my-2"><a href="#">Careers</a></li>
          <li className="my-2"><a href="#">Blog</a></li>
          <li className="my-2"><a href="#">Terms</a></li>
          <li className="my-2"><a href="#">Privacy</a></li>
        </ul>
      </div>

      <div className="col-md-2 col-sm-12 mx-4 mb-4">
        <h6 className="text-uppercase font-weight-bold" id="business">Business</h6>
        <ul className="list-unstyled" id="ul_business">
          <li className="my-2"><a href="#">International Buyers</a></li>
          <li className="my-2"><a href="#">Sell On Mirraw</a></li>
          <li className="my-2"><a href="#">Designer Login</a></li>
        </ul>
      </div>

      <div className="col-md-2 col-sm-12 mx-auto mb-4">
        <h6 className="text-uppercase font-weight-bold">Coupon Partners</h6>
        <ul className="list-unstyled">
          <li className="my-2"><a href="#">Mirraw Coupons</a></li>
          <li className="my-2"><a href="#">Mirraw Offers</a></li>
        </ul>
        <h6 className="text-uppercase font-weight-bold" id="social">Social</h6>
        <ul className="list-unstyled">
          <li>
            <a href="#"><i className="fab fa-twitter-square"></i></a>    
            <a className="logo" href="#"><i className="fab fa-facebook-square"></i></a>
            <a className="logo" href=""><i className="fab fa-instagram-square"></i></a>
            <a className="logo" href="#"><i className="fab fa-google-play"></i></a>
            <a className="logo" href="#"><i className="fab fa-app-store-ios"></i></a>
            <a className="logo" href="#"><i className="fab fa-linkedin"></i></a>
          </li>
        </ul>
      </div>

      <div className="col-md-2 col-sm-12 mx-4 mb-4">
        <h6 className="text-uppercase font-weight-bold">Press</h6>
        <div className="row" id="sponsors">
          <div className="col" id="dna"><a href="#"><img src="https://www.mirraw.com/assets/dna-be0b711232e819d1dfeb542296bf4d56c80cd17c41badb9494300cffe4fe9cf5.png"/></a></div>
          <div className="col" id="story"><a href="#"><img src="https://www.mirraw.com/assets/yourstory-af15b2ddcc71a01016c6b879d665af554375ace702d94eaa48d0b2210834e0d4.png"/></a></div>
        </div>
        <div className="row" id="sponsors">
          <div className="col" id="payu"><a href="#"><img src="https://www.mirraw.com/assets/payu-a31ef1db3817ade015c5ad386da4b2211b82dbebcad90964c58e4b7dc889b255.png"/></a></div>
          <div className="col" id="paypal"><a href="#"><img src="https://www.mirraw.com/assets/paypal-449cce1c328ad3e821e482a3795a336b4659a62c892eddb7f5dd095eb5d42a16.png"/></a></div>
        </div>
      </div>

    </div>
</div>

<div className="footer-copyright text-center py-2">
  <p>Copyright&copy;2021, Mirraw Online Services Pvt. Ltd. All Rights Reserved.</p>
</div>
</footer>


        );
    }
}