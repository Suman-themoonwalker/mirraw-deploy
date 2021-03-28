import React,{Component} from 'react';
export class Head extends Component{
    render(){
        return(
            <div className="nav-header">
        <nav>
        <ul>
          <li><a href="#">Contact Us&nbsp;&nbsp;&nbsp;</a></li>
          <li><a href="#">7 Day Returns&nbsp;&nbsp;&nbsp;</a></li>
          <li><a href="#">Track Order&nbsp;&nbsp;&nbsp;</a></li>
          <li><a href="#">Return Order&nbsp;&nbsp;&nbsp;</a></li>
          <li><a href="#">Sell On Mirraw&nbsp;&nbsp;&nbsp;</a></li>
          <li><a href="#">Survey&nbsp;&nbsp;&nbsp;</a></li>
          <li className="right-side"><a href=""><i className="fas fa-user-tie"></i><b> LOG IN</b>&nbsp;&nbsp;</a><a href="">&nbsp;&nbsp;<i className="fas fa-shopping-bag"></i> <b>&nbsp;CART(0)</b>&nbsp;&nbsp;</a></li>
        </ul>
        </nav>

    <div className="toggler">
    <nav className="navbar navbar-inverse">
    <div className="container-fluid" >
    <ul className="nav navbar-nav mx-auto">
    <li id="course" className="dropdown"><i className="fas fa-bars"></i><span className="caret"></span>
      <ul className="dropdown-menu">
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">7 Day Returns</a></li>
        <li><a href="#">Track Order</a></li>
        <li><a href="#">Return Order</a></li>
        <li><a href="#">Sell On Mirraw</a></li>
        <li><a href="#">Survey</a></li>
      </ul>
    </li>
    </ul>
    </div>
    </nav>
    </div>

        <hr/>
        <label className="logo"><a href="#"><img src="data:image/png;base64,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"/></a></label>
        <div className="search-container">
            <form className="form-line">
              <input type="text" placeholder="Search for something!!!!" />
              <button type="submit" ><i className="fa fa-search"></i></button>
            </form>
          </div>
      </div>
        );
    }
}