import React,{Component} from 'react';
export class Testimony extends Component{
    render(){
        return(
            <section>
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
  <div className="carousel-inner" id="testimony">
    <div className="one carousel-item active">
    <div className="start"><i className="fas fa-quote-left"></i></div>
    <div><p>Mirraw was superfast. I ordered on 26th Dec and today (28th Dec) I got the product. I Ordered Victorian Double Tokri Kashmiri Earring. The design and specially the color of the stones was perfectly the same. Moreover, It looks amazingly beautiful with my Royal Blue and Pink Benarasi Saree. Very happy with the service. Keep it up Mirraw ! All the Best ! -</p>
      <h5>Suranjeeta Das, New Delhi </h5>
    </div>
    <div className="end"><i className="fas fa-quote-right"></i></div>
    </div>
    <div className="two carousel-item">
    <div className="start"><i className="fas fa-quote-left"></i></div>
    <div><p>I'd like to take this opportunity to let you know that I am very happy with your customer service. I had an issue with a damaged piece and it was dealt with efficiently. I received the temple set and others in my order and I am extremely happy with your professionalism. All items were very well made and worth the money. Keep up the good work. - </p>
      <h5>Anjana Das, Tennessee, USA </h5>
    </div>
    <div className="end"><i className="fas fa-quote-right"></i></div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</section>

        );
    }
}