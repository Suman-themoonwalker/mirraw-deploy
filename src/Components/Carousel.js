import React,{Component} from 'react';
export class Carousel extends Component{
    render(){
        return(
            <section>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="2000" data-pause="hover">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="https://assets0.mirraw.com/banner_sliders/7978/Exclusive-saree-collection-%28destop%29_main_webp.webp?1613466325" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://assets0.mirraw.com/banner_sliders/8061/Ready-to-ship-Collection-%28Banner%29_main_webp.webp?1615348760" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://assets0.mirraw.com/banner_sliders/8120/Clearence-sale-%28New%29-3_main_webp.webp?1615348705" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          </section>
        );
    }
}