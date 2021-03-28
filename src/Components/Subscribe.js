import React,{Component} from 'react';
export class Subscribe extends Component{
    render(){
        return(
<section>
    <h4>SIGN UP TO RECEIVE OUR UPDATES</h4>
    <h6><i>Be the first to know about latest offers and discounts on Mirraw</i></h6>
    <div className="subscribe-container">
            <form className="form-line">
              <input type="text" placeholder="Enter your Email Address" />
              <button type="submit">SUBSCRIBE!</button>
            </form>
    </div>
</section>            

        );
    }
}